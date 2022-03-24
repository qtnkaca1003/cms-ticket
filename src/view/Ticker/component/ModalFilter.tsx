import React from "react";
import Modal from 'antd/lib/modal/Modal';
import Form from "antd/lib/form";
import { Button, Checkbox, Col, Radio, Row } from "antd";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const CheckboxGroup = Checkbox.Group;


const ModalFilter = ({ setIsModalVisible, isModalVisible }) => {
    const plainOptions = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5',];
    const [checkedList, setCheckedList] = React.useState([]);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    const [disabled, setDisabledkAll] = React.useState(false);
    const handleOk = () => {
        setIsModalVisible(false);
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChange = list => {
        setCheckedList(list);
        //setIndeterminate(!!list.length && list.length < plainOptions.length);
        //setCheckAll(list.length === plainOptions.length);
    };
    const dateFormat = 'YYYY/MM/DD';
    const onCheckAllChange = e => {
        setCheckedList([]);
        //setIndeterminate(false);
        if (e.target.checked === false) {
            setDisabledkAll(false)
        }
        else if (e.target.checked === true) {
            setDisabledkAll(true)
        }

        //setCheckAll(e.target.checked);
    };

    return (
        <>
            <Modal
                width={635}
                footer={false}
                title={'Lọc vé'}
                className="main-modal-filter main-modal"
                visible={isModalVisible}
                destroyOnClose={true}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
            >
                <Form>
                    <div className="main">
                        <div className="date mb-3">
                            <div className="startdate mr-xl-5">
                               <p className="text-modal mb-1">Từ ngày</p>
                               <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </div>
                            <div className="enddate">
                               <p className="text-modal mb-1">Đến ngày</p>
                               <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </div>

                        </div>
                        <div className="radiobutton">
                            <p className="text-modal mb-1">Tình trạng sử dụng</p>
                            <Radio.Group >
                                <Radio value={1}>Tất cả</Radio>
                                <Radio value={2}>Đã sử dụng</Radio>
                                <Radio value={3}>Chưa sử dụng</Radio>
                                <Radio value={4}>Hết hạn</Radio>
                            </Radio.Group>
                        </div>
                        <div className="checkbox">
                            <p className="text-modal mb-1">Cổng check - in</p>
                            <Checkbox.Group style={{ width: '100%' }}>
                                <Row gutter={[16, 16]} wrap={true}>
                                    <Col span={16}>
                                        <Checkbox indeterminate={checkAll} onChange={onCheckAllChange} checked={checkAll}>
                                            Tất cả
                                        </Checkbox>
                                    </Col>
                                    <Col span={14}>
                                        <CheckboxGroup disabled={disabled} options={plainOptions} value={checkedList} onChange={onChange} />
                                    </Col>
                                </Row>
                            </Checkbox.Group>,
                        </div>
                        <div className="button text-center">
                            <Button onClick={() => { }}>Lọc</Button>
                        </div>
                    </div>




                </Form>
            </Modal>
        </>
    )

}
export default ModalFilter