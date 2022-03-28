import Edit from "@shared/components/Icon/Edit";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import SearchComponent from "@shared/components/SearchComponent";
import TableComponent from "@shared/components/TableComponent";
import { Button, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { ReactNode, useState } from "react";
import ModalAddTicket from "./component/ModalAddticket";
import ModalUpdate from "./component/ModalUpdate";

type dataType = {
    codeTicket?: string
    event?: string
    dateS?: string
    dateE?: string
    price?: number
    combo?: number
    status?: string
    edit?: ReactNode
}
const Setting = () => {
    const columns: ColumnsType = [
        {
            title: 'Mã gói',
            dataIndex: 'codeTicket',

        },
        {
            title: 'Tên gói vé',
            dataIndex: 'event',
            key: 'event',

        },
        {
            title: 'Ngày áp dụng',
            dataIndex: 'dateS',
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'dateE',
        },
        {
            title: 'Giá vé (VNĐ/Vé)',
            dataIndex: 'price',
        },
        {
            title: 'Giá combo (VNĐ/Combo)',
            dataIndex: 'combo',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            render: status => (
                <>
                    {
                        status === 'Đang áp dụng' ? (
                            <>
                                <Tag color={'green'} >
                                    {"Đang áp dụng"}
                                </Tag>
                            </>
                        ) : status === 'Tắt' ? (
                            <>
                                <Tag color={'red'} >
                                    {"Tắt"}
                                </Tag>
                            </>
                        ) : ''

                    }

                </>
            )
        },
        {
            title: ' ',
            dataIndex: 'edit',
            render: () => (
                <>
                    <p onClick={showModalUp} style={{ color: '#FF993C', cursor: "pointer" }}><Edit />Cập nhật</p>

                </>
            )
        }
    ];
    const data: dataType[] = [{
        codeTicket: 'AL3242321',
        /* event: '10 Downing Street', */
        event: 'Gói gia đình',
        dateS: '14/04/2021 ',
        dateE: '14/07/2021',
        price: 90000,
        combo: 360000,
        status: 'Tắt',
        edit: <></>
    },

    {
        codeTicket: 'AL3242322',
        /* event: '10 Downing Street', */
        event: 'Gói sự kiện',
        dateS: '14/04/2021 ',
        dateE: '14/07/2021',
        price: 90000,
        combo: 360000,
        status: 'Đang áp dụng',
        edit: <></>
    },
    {

        codeTicket: 'AL3242323',
        /* event: '10 Downing Street', */
        event: 'Gói gia đình',
        dateS: '14/04/2021 ',
        dateE: '14/07/2021',
        price: 90000,
        combo: 360000,
        status: 'Đang áp dụng',
        edit: <></>
    },
    {

        codeTicket: 'AL3242324',
        /* event: '10 Downing Street', */
        event: 'Gói sự kiện',
        dateS: '14/04/2021 ',
        dateE: '14/07/2021',
        price: 90000,
        combo: 360000,
        status: 'Tắt',
        edit: <></>
    }
    ]
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleUp, setIsVisibleUp] = useState(false);
    const showModal = () => {
        setIsVisible(true);
    }
    const showModalUp = () => {
        setIsVisibleUp(true);
    }

    return (
        <div className="service">
            <div className="main-card">
                <MainTitleComponent title={'Danh sách gói vé'} />
                <div className="warp-search d-flex justify-content-md-between">
                    <SearchComponent placeholder={"Tìm bằng số vé..."} />
                    <div className="button  ">
                        <Button className="mr-2" >Xuất file (.svg)</Button>
                        <Button onClick={showModal} >Thêm gói vé</Button>
                    </div>

                </div>
                <div className='table'>
                    <TableComponent
                        //key={1}
                        dataSource={data}
                        //apiServices={listoffieldPresenter.getListClass}
                        hasStt={true}
                        translateFirstKey="field"
                        //rowKey={(res: ListoffieldEntity) => res.id}
                        //register={table}
                        columns={columns}
                        //onRowSelect={setSelectedRowKeys}
                        disableFirstCallApi={true}
                    />
                </div>
            </div>
            <ModalAddTicket isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
            <ModalUpdate isModalVisible={isVisibleUp} setIsModalVisible={setIsVisibleUp} />
        </div>
    )

}
export default React.memo(Setting);