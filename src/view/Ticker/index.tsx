import { FilterOutlined } from "@ant-design/icons";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import SearchComponent from "@shared/components/SearchComponent";
import TableComponent from "@shared/components/TableComponent";
import useTable from "@shared/components/TableComponent/hook";
import { useAltaIntl } from "@shared/hook/useTranslate";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal/Modal";
import { ColumnsType } from "antd/lib/table";
import Tag from "antd/lib/tag";
import React, { useState } from "react";
import ModalFilter from "./component/ModalFilter";
import './style.scss';
type dataType = {
    bookingcode: string
    codeTicket: number
    usage: string
    date: string
    releaseDate: string
    checkin: string
}
const Ticker = () => {
    const columns: ColumnsType = [
        {
            title: 'Booking code',
            dataIndex: 'bookingcode',
            // render trường thuộc tính tầng với index chính là school

        },
        {
            title: 'Số vé',
            dataIndex: 'codeTicket',

        },
        /*  {
             title: 'Tên sự kiện',
             dataIndex: 'event',
         }, */
        {
            title: 'Tình trạng sử dụng',
            dataIndex: 'usage',
            key: 'usage',
            render: usage => (
                <>
                    {
                        usage === 'Đã sử dụng' ? (
                            <>
                                <Tag color={'default'} >
                                    {"Đã sử dụng"}
                                </Tag>
                            </>
                        ) : usage === 'Chưa sử dụng' ? (
                            <>
                                <Tag color={'green'} >
                                    {"Chưa sử dụng"}
                                </Tag>
                            </>
                        ) : usage === 'Hết hạn' ? (
                            <>
                                <Tag color={'red'} >
                                    {"Hết hạn"}
                                </Tag>
                            </>
                        ):''

                    }

                </>
            )
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'date',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'releaseDate',
        },
        {
            title: 'Cổng check - in',
            dataIndex: 'checkin',
        },
        // {
        //   dataIndex: "dateOfMizuikuClass",
        // },
    ];
    const data: dataType[] = [{
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Đã sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 3'

    },

    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Đã sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 4'
    },
    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Chưa sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 1'
    },
    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Chưa sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 1'
    }, {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Chưa sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 1'
    }, {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Hết hạn',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 2'
    }, {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Hết hạn',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 1'
    },
    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Hết hạn',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 3'
    },
    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Đã sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 2'
    },
    {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Đã sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 4'
    }, {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Chưa sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 6'
    }, {
        bookingcode: 'ALTFGHJU',
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        usage: 'Chưa sử dụng',
        date: '14/04/2021',
        releaseDate: '14/04/2021',
        checkin: 'Cổng 3'
    }


    ]
    
    const [isVisible, setIsVisible] = useState(false);
    const showModal = () => {
        setIsVisible(true);
    }
    return (
        <>
            <div className="ticket">
                <div className="main-card">
                    <MainTitleComponent title={"Danh sách vé"} />
                    <div className="warp-search d-flex justify-content-md-between">
                        <SearchComponent placeholder={"Tìm bằng số vé..."} />
                        <div className="button ">
                            <Button  className="mr-2" onClick={showModal}  ><FilterOutlined />Lọc vé</Button>
                            <Button  >Xuất file (.svg)</Button>
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
            </div>
            <ModalFilter
                isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
        </>


    )

}
export default React.memo(Ticker);