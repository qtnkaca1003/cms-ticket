import { useSingleAsync } from '@hook/useAsync';
import { Table, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import Pagination from './Component/Pagination';
import { InitPagination, IBEPaginationTable, InitOption } from './interface';
import SearchComponent from '../SearchComponent/SearchComponent';
import { FormattedMessage, useIntl } from 'react-intl';
import { CheckPermissionFunc } from '@hoc/CheckPermission';
import { useSelector } from 'react-redux';
import { RootState } from '@modules';
import { PaginationEntity } from '@core/pagination/entity';
import { OptionEntity } from '@core/table';
import lodash from 'lodash';

interface IState {
  pagination: PaginationEntity;
  option: OptionEntity;
  selection: Array<any>;
  rowKey?: any;
}

const getDataWithCurrentState = (state, setState, repository: any) => {
  const { option, pagination } = state;
  setState((prev) => ({ ...prev, option }));
  console.log(repository?.execute, 'repository');
  if (repository) {
    return repository.execute(pagination, option).then((res) => {
      setState((prev) => {
        return {
          ...prev,
          pagination: {
            ...pagination,
            ...res?.info,
          },
        };
      });
      return Promise.resolve(res);
    });
  } else {
    setState((prev) => ({ ...prev, pagination }));
    return Promise.resolve(undefined);
  }
};

const TableComponent: React.FC<IBEPaginationTable> = (
  props: IBEPaginationTable,
) => {
  const {
    apiServices,
    columns = [],
    register,
    defaultOption,
    translateFirstKey = 'common',
    getDataAfter,
    disableFirstCallApi = false,
    dataSource = [],
    search,
    hasStt = false,
  } = props;
  const listPermissionCode = useSelector(
    (state: RootState) => state.profile.listPermissionCode,
  );
  const repository = useSingleAsync(apiServices);
  const intl = useIntl();
  const [state, setState] = useState<IState>({
    pagination: { ...InitPagination, ...props.pagination },
    option: { ...defaultOption, ...InitOption },
    selection: [],
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (pSelectedRowKeys: React.Key[], selectedRows: any) => {
      setSelectedRowKeys(pSelectedRowKeys);
      if (props.onRowSelect)
        props.onRowSelect(pSelectedRowKeys);
      if (props.onRowSelectDetail)
        props.onRowSelectDetail(selectedRows);
    },
  };


  const handleClickOnRow = (record: any) => {
    if (typeof props.rowKey != 'function') {
      return;
    }
    const tempRowKey = props.rowKey ? props.rowKey(record) : '';

    const isInArr = selectedRowKeys.some((key) => key === tempRowKey);
    let tempSelectedRowKeys = selectedRowKeys;
    if (isInArr == false) {
      tempSelectedRowKeys = [...selectedRowKeys, tempRowKey];
      // setSelectedRow(selectedRows);
      // props.onRowSelectDetail && props.onRowSelectDetail(selectedRows);
    } else {
      tempSelectedRowKeys = selectedRowKeys.filter((k) => k != tempRowKey);
    }
    setSelectedRowKeys(tempSelectedRowKeys);
    if (props.onRowSelect)
      props.onRowSelect(tempSelectedRowKeys);
  };

  const fetchData = useCallback((pState) => {
    getDataWithCurrentState(pState, setState, repository).then(rs => {
      if (rs != null && getDataAfter != null) {
        getDataAfter(rs);
      }
    });
  }, [getDataAfter, setState, repository]);


  useEffect(() => {
    if (!disableFirstCallApi && apiServices) fetchData({
      pagination: { ...InitPagination },
      option: { ...defaultOption, ...InitOption },
    });
  }, [disableFirstCallApi, apiServices, defaultOption, fetchData]);



  const handleSearch = (text) => {
    const pagination = { ...state.pagination, ...InitPagination };
    const option = {
      ...state.option,
      search: text,
    };
    fetchData({ pagination, option });
  };


  const handleChangePage = (
    newPagination: PaginationEntity,
    _filter?,
    _sorter?,
  ) => {
    const option = state.option;
    option.sorter = _sorter;
    let newCurrent = newPagination.current;
    if (newPagination.pageSize != state.pagination.pageSize) {
      newCurrent = 1;
    }

    fetchData({
      pagination: { ...state.pagination, ...newPagination, current: newCurrent },
      option,
    });
    setState((prev) => ({ ...prev, selection: [] }));
  };

  const getData = () => {

    return {
      data: repository?.value?.data || [],
      ...state,
    };
  };

  //React.useImperativeHandle(register,()=>{})

  if (register) {
    register.clearSelection = () => {
      setSelectedRowKeys([]);
    };
    register.getData = getData;
    register.fetchData = (...args) => {
      const param = lodash.get(args, '[0]', {});
      param.pagination = { ...state.pagination, current: 1, ...param.pagination };
      setSelectedRowKeys([]);
      fetchData(param);
    };
    register.setOption = (value) =>
      setState((prev) => ({ ...prev, option: { ...prev.option, ...value } }));
    register.setPagination = (value) =>
      setState((prev) => ({
        ...prev,
        pagination: { ...prev.pagination, ...value },
      }));
    register.setSelection = (value) =>
      setState((prev) => ({ ...prev, selection: value }));
  }

  const align = {
    left: 'to-left',
    right: 'to-right',
  };

  const thisColumns = React.useMemo(() => {
    // xét từng column một

    //Check permision
    const col = columns
      .filter((item) => {
        const permissionCode = item?.permissionCode || null;
        if (permissionCode) {
          const checkPermissionForColumn = CheckPermissionFunc(
            permissionCode,
            listPermissionCode,
          );
          return checkPermissionForColumn;
        }
        return true;
      })
      .map((ite) => ({ ...ite, permissionCode: undefined }));

    // translate title
    const columnTranslate = col.map((item) => {
      const key = item?.title || `${translateFirstKey}.${item?.dataIndex}`;
      // ưu tiên nếu dev truyền vào title trước nha
      const title = intl.formatMessage({
        id: key,
        defaultMessage: key,
      });
      return { ...item, title };
    });

    //xét có nên thêm stt
    if (hasStt) {
      const hasSttColumn = {
        title: intl.formatMessage({
          id: 'common.stt',
          defaultMessage: 'STT',
        }),
        width: '5.9rem',
        className: 'text-center',
        dataIndex: 'tableComponentStt',
        render: (text, record, index) => {
          const num = state.pagination.current || 1;
          const pageSize = state.pagination.pageSize || 1;
          return (num - 1) * pageSize + (index + 1);
        },
      };
      return [hasSttColumn, ...columnTranslate];
    }
    //dịch mỗi thằng
    return columnTranslate;
  }, [columns, hasStt, listPermissionCode, translateFirstKey, intl, state.pagination]);

  const onRow = (record) => ({
    onClick: () => {
      handleClickOnRow(record);
    },
  });

  return (
    <div className={`card-main-table ${props?.className}`}>
      {search?.placeholder && (
        <div className={`search-in-table ${search?.align ? align[search?.align] : 'to-right'}`}>
          <div className="search-label-default">
            {intl.formatMessage({
              id: 'common.keyword',
              defaultMessage: 'common.keyword',
            })}
          </div>
          <SearchComponent
            onSearch={handleSearch}
            placeholder={search?.placeholder}
            classNames={search?.className ? search?.className : ''}
          />
        </div>
      )}
      <Table
        rowSelection={props.onRowSelect != null ? rowSelection : undefined}
        onRow={props.onRowSelect ? onRow : undefined}
        summary={() => {
          if (selectedRowKeys.length == 0 || lodash.isEmpty(props.summaryKey)) {
            return undefined;
          }
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3}>
                <Typography.Text className="ml-1 mt-4 mb-4">
                  <FormattedMessage
                    id={props.summaryKey}
                    values={{ rows: selectedRowKeys.length }}
                  />
                </Typography.Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }}
        {...props}
        className="main-table"
        dataSource={repository?.value?.data || dataSource}
        loading={props?.loading || repository?.status == 'loading'}
        pagination={props.pagination !== false && state.pagination}
        onChange={handleChangePage}
        columns={thisColumns}
      />
      {props.pagination !== false && (
        <Pagination pagination={state.pagination} onChange={handleChangePage} />
      )}
    </div>
  );
};

export default React.memo(TableComponent);
