
import { Button, DatePicker, Radio, Space } from "antd";
import moment from "moment";
import React from "react";
import './style.scss'
const RightFilter = () => {
    console.log(1);
    const dateFormat = 'DD/MM/YYYY';
    return (
        <>
            <div className="rightfilter">
                <p className="secondary-title">Lọc vé</p>
                <div className="filter">
                    <div className="filter-radio d-flex justify-content-md-between">
                        <p>Tình trạng đối soát</p>
                        <Radio.Group >
                            <Space direction="vertical">
                                <Radio value={1}>Tất cả</Radio>
                                <Radio value={2}>Đã đối soát</Radio>
                                <Radio value={3}>Chưa đối soát</Radio>

                            </Space>
                        </Radio.Group>
                    </div>
                    <div className="filter-type  d-flex justify-content-md-between">
                        <p>Loại vé</p>
                        <p>Vé cổng</p>
                    </div>
                    <div className="filter-dateS d-flex justify-content-md-between">
                        <p>Từ ngày</p>
                        <DatePicker defaultValue={moment('19/03/2022', dateFormat)} format={dateFormat} />
                     
                    </div>
                    <div className="filter-dateE d-flex justify-content-md-between">
                        <p>Đến ngày</p>
                        <DatePicker defaultValue={moment('19/03/2022', dateFormat)} format={dateFormat} />
                     
                    </div>

                </div>
                <div className="button mt-5 text-center">
                    <Button>Lọc</Button>
                </div>


            </div>


        </>

    )

}
export default RightFilter