import React, { Key, useEffect, useState } from 'react';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import TableComponent from '@shared/components/TableComponent';
import { DeleteConfirm } from '@shared/components/ConfirmDelete';
import SearchComponent from '@shared/components/SearchComponent/SearchComponent';
import { useAltaIntl } from '@shared/hook/useTranslate';
import useTable from '@shared/components/TableComponent/hook';
import { routerClasses } from './router';
import { ColumnsType } from 'antd/lib/table';
import listoffieldPresenter from '@modules/classes/presenter';
import RangePickerComponent from '@shared/components/RangePickerComponent';
import ListoffieldEntity from '@modules/classes/entity';
import ModalClasses from './component/MainModal/ModalClasses';
import { deleteClass } from '@modules/classes/repository';
import SchoolEntity from '@modules/school/entity';

const Classes = () => {
  const { formatMessage } = useAltaIntl();
  const table = useTable();
  const [modal, setModal] = useState({
    isVisible: false,
    record: null,
    isReadOnly: false,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const [search, setSearch] = useState<string>('');

  const columns: ColumnsType = [
    {
      title: formatMessage('field.schoolName'),
      dataIndex: 'school',
      // render trường thuộc tính tầng với index chính là school
      render: (school: SchoolEntity) => {
        return school.schoolName;
      },
    },
    {
      title: formatMessage('field.city'),
      dataIndex: 'school',
      render: (school: SchoolEntity) => {
        return school.city;
      },
    },
    {
      dataIndex: 'year',
    },
    {
      dataIndex: 'className',
    },
    {
      dataIndex: 'classId',
    },
    // {
    //   dataIndex: "dateOfMizuikuClass",
    // },
  ];
  const handleRefresh = (flag) => {
    setModal({ isVisible: false, record: null, isReadOnly: false });
    setSelectedRowKeys([]);
    if (flag) {
      table.fetchData!();
    }
  };
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      handleAction: () => {
        setModal({ isVisible: true, record: null, isReadOnly: false });
      },
    },
    {
      iconType: 'delete',
      disable: selectedRowKeys.length == 0,
      handleAction: () => {
        DeleteConfirm({
          handleOk: () => {
            deleteClass({ classId: selectedRowKeys[0] }).then(() => {
              handleRefresh(true);
            });
          },
          title: formatMessage('field.delete.title'),
          content: formatMessage('field.delete.content'),
        });
      },
    },
  ];

  useEffect(() => {
    table.fetchData!({
      option: { search: search },
    });
  }, [search, table.fetchData]);

  

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };
  const handleSearchDate = (searchKey: string) => {
    setSearch(searchKey);
  };

  return (
    <div className="video-management">
      <MainTitleComponent breadcrumbs={routerClasses} />
      <div className="main-card">
        <div className="d-flex flex-row justify-content-md-between mb-3 align-items-end">
          <div className="d-flex flex-column ">
            <div className="label-select">
              {formatMessage('common.keyword')}
            </div>
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'common.search'}
              classNames="mb-0"
            />
          </div>
          <div className="d-flex flex-row ">
            <RangePickerComponent
              onChange={handleSearchDate} />
          </div>
        </div>
        <TableComponent
          apiServices={listoffieldPresenter.getListClass}
          hasStt={true}
          translateFirstKey="field"
          rowKey={(res: ListoffieldEntity) => res.id}
          register={table}
          columns={columns}
          onRowSelect={setSelectedRowKeys}
          disableFirstCallApi={true}
        />
      </div>
      <RightMenu arrayAction={arrayAction} />
      <ModalClasses modal={modal} handleRefreshData={handleRefresh} setModal={setModal} />
    </div>
  );
};
// listoffieldPresenter.getListClass
export default React.memo(Classes);
