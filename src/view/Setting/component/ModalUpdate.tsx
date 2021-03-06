import React, { forwardRef } from "react";
import Modal from 'antd/lib/modal/Modal';
import Form from "antd/lib/form";
import { Button, Checkbox, Select, TimePicker } from "antd";
import { DatePicker } from 'antd';
import Input from "antd/lib/input/Input";
const CheckboxGroup = Checkbox.Group;
import '../style.scss';
import DateTimePicker from "@shared/components/DatePicker";
import Calenda from "@shared/components/Icon/Calenda";
const { Option } = Select;
const ModalUpdate = ({ setIsModalVisible, isModalVisible }) => {
    const [checkedList, setCheckedList] = React.useState([]);
    const [disabled, setDisabledkAll] = React.useState(false);
    const handleOk = () => {
        setIsModalVisible(false);
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChange = list => {
        setCheckedList(list);
    }
    const dateFormat = 'YYYY/MM/DD';
    const onCheckAllChange = e => {
        setCheckedList([]);
        if (e.target.checked === false) {
            setDisabledkAll(false)
        }
        else if (e.target.checked === true) {
            setDisabledkAll(true)
        }
    };
    const date = new Date();
     const CustomInput = forwardRef(({ value, onClick }, ref) => (
         <>
             <button className='button-datepicker' onClick={onClick} ref={ref}>
                 Tháng {value}  <Calenda />
             </button>
         </>
     ));
    return (
        <>
            <Modal
                width={758}
                footer={false}
                title={'Cập nhật thông tin gói vé'}
                className="main-modal"
                visible={isModalVisible}
                destroyOnClose={true}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
            >
                <Form>
                    <div className="warp d-flex justify-content-md-between">
                        <div className="code_event">
                            <p className="mb-2 text-modal">Mã sự kiện</p>
                            <Form.Item
                                className="mt-0"
                                name="code"
                                rules={[{ required: true, message: 'Nhập tên gói vé !', whitespace: true }]}
                            >
                                <Input width={'245px'} />
                            </Form.Item>
                        </div>
                        <div className="name_event">
                            <p className="mb-2 text-modal">Tên sự kiện</p>
                            <Form.Item
                                className="mt-0"
                                name="code"
                                rules={[{ required: true, message: 'Nhập tên gói vé !', whitespace: true }]}
                            >
                                <Input width={'367px'} />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item>
                        <div className="date d-flex justify-content-md-between ">
                            <div className="dateS mr-1">
                                <p className="text-modal mb-2">Ngày áp dụng</p>
                                <DateTimePicker  value={date} dateFormat={"MM,yyyy"} custom={<CustomInput />} />
                                <TimePicker placeholder="hh:mm:ss" />
                            </div>
                            <div className="dateE">
                                <p className="text-modal mb-2">Ngày hết hạn</p>
                                <DateTimePicker value={date} dateFormat={"MM,yyyy"} custom={<CustomInput />} />
                                <TimePicker placeholder="hh:mm:ss" />
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <p className="text-modal mb-2">Giá vé áp dụng</p>
                        <div className="mb-3">
                            <Checkbox>Vé lẻ (vnđ/vé) với giá <Input placeholder="Giá vé" />  / vé </Checkbox>
                        </div>
                        <div>
                            <Checkbox>Combo vé với giá <Input placeholder="Giá vé" />  / <Input placeholder="Giá vé" className="price-combo" />  / vé  </Checkbox>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <p className="text-modal mb-2">Tình trạng</p>
                        <Select defaultValue={"Đang áp dụng"}>
                            <Option value="Đang áp dụng">Đang áp dụng</Option>
                            <Option value="Tắt">Tắt</Option>
                        </Select>
                        <p style={{ fontStyle: "italic" }} >
                            <span style={{ color: '#FD5959' }}>*</span> là thông tin bắt buộc
                        </p>
                    </Form.Item>
                    <div className="button text-center mb-5">
                        <Button className="delete mr-5">Huỷ</Button>
                        <Button className="submit">Lưu</Button>
                    </div>
                </Form>
            </Modal>
        </>
    )

}
export default ModalUpdate