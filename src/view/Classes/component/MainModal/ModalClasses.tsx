import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'antd';
import { IFormContent, renderForm } from '@hoc/FormHelper';
import ButtonForm from '@shared/components/ButtonForm';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { IModalField } from '../../interface';
import { FormattedMessage } from 'react-intl';
import lodash from 'lodash';
import { isCheckLoading } from '@helper/isCheckLoading';
import { useSingleAsync } from '@hook/useAsync';
import classesPresenter from '@modules/classes/presenter';
import schoolPresenter from '@modules/school/presenter';
import SelectAndLabelConponent from '@shared/components/SelectAndLabelConponent';
import ISelect from '@core/select';

const ModalClasses: React.FC<IModalField> = ({
  modal,
  handleRefreshData,
}) => {
  const [form] = Form.useForm();
  const { isReadOnly } = modal;
  const { intl } = useAltaIntl();
  const [isModalOff, setIsModalOff] = useState(true);
  const [schollData, setSchoolData] = useState<ISelect[]>();
  // tạo useState lấy ISelect sử dụng
  const { createClass, updateClass, getDetailClass } = classesPresenter;
  const createClassCall = useSingleAsync(createClass);
  const updateClassCall = useSingleAsync(updateClass);

  useEffect(() => {
    if (lodash.isEmpty(modal.record)) {
      form.resetFields();
    } else {
      getDetailClass(modal.record?.id).then((rs) => {
        form.setFieldsValue(rs);
      });
    }
    setIsModalOff(false);
  }, [form, getDetailClass, modal.record]);

  useEffect(() => {
    schoolPresenter.getListSchool().then((rs) => {
      const data = rs.data;
      const schoolState: ISelect[] = data.map(it => {
        return { label: it.schoolName, value: it.id };
      });
      setSchoolData(schoolState);
    });
  }, []);
  //Lấy danh sách data từ schoolentity
  const formData = React.useMemo<IFormContent[]>(() => {
    const formContent: IFormContent[] = [
      {
        name: 'classCode',
        label: 'field.classCode',
        rules: [{ required: true }, { max: 255 }],
        readOnly: modal.isReadOnly,

      },
      {
        label: 'field.className',
        rules: [{ required: true }, { max: 255 }],
        name: 'className',
        readOnly: modal.isReadOnly,
      },
      {
        name: 'schoolId',
        label: 'field.schoolId',
        rules: [{ required: true }, { max: 255 }],
        readOnly: modal.isReadOnly,
        render: (placeholder) => {
          return <SelectAndLabelConponent dataString={schollData} placeholder={placeholder} />;
        },
        // sử dụng SelectAndLabelConponent với data dạng cuộn từ schollennity đã map từ trước

      },
      {
        name: 'year',
        label: 'field.year',
        rules: [{ required: true }, { max: 255 }],
        readOnly: modal.isReadOnly,

      },
    ];
    return formContent;
  }, [modal.isReadOnly, schollData]);

  const handleCancel = (value = false) => {
    handleRefreshData(value);
    form.resetFields();
    setIsModalOff(false);
  };

  const onFinish = (values) => {
    setIsModalOff(true);
    if (modal.record != null) {
      updateClassCall?.execute(modal.record.id, values)
        .then(() => {
          handleCancel(true);
        })
        .catch(() => {
          setIsModalOff(false);
        });
    } else {
      createClassCall?.execute(values)
        .then(() => {
          handleCancel(true);
        })
        .catch(() => {
          setIsModalOff(false);
        });
    }
  };

  return (
    <Modal
      className="main-modal"
      title={
        <FormattedMessage
          id={
            modal?.record == null
              ? 'field.create'
              : isReadOnly
                ? 'field.information'
                : 'field.update'
          }
        />
      }
      closable={false}
      visible={modal.isVisible}
      destroyOnClose={true}
      onCancel={() => handleCancel(false)}
      footer={
        <ButtonForm
          isLoading={
            isCheckLoading([createClassCall, updateClassCall]) || isModalOff
          }
          isDisabled={isReadOnly ? true : false}
          formName="form-field"
          nameButtonSubmit={
            modal.record !== null ? 'common.update' : 'common.add'
          }
          onCancelForm={() => handleCancel(false)}

        />
      }
    >
      <Form
        form={form}
        className="main-form"
        layout="vertical"
        name="form-field"
        onFinish={onFinish}
      >
        {renderForm(formData, intl)}
      </Form>
    </Modal>
  );
};
export default ModalClasses;
