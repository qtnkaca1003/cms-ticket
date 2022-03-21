import RightFilter from "@layout/RightFilter";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import SearchComponent from "@shared/components/SearchComponent";
import TableComponent from "@shared/components/TableComponent";
import { Button, Tag } from "antd";
import React from "react";
import { ColumnsType } from "antd/lib/table";
type dataType = {
    codeTicket?: number
    event?: string
    date?: string
    type?: string
    checkin?: string
    check?:string
}
const Checkingtickets = () => {
    console.log(1);
    const columns: ColumnsType = [
        {
            title: 'Số vé',
            dataIndex: 'codeTicket',

        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'event',
            key: 'event',
        
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'date',
        },
        {
            title: 'Loại vé',
            dataIndex: 'type',
        },
        {
            title: 'Cổng check - in',
            dataIndex: 'checkin',
        },
        {
            title: '  ',
            dataIndex: 'check',
        }
    ];
    const data: dataType[] = [{
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 3',
        check: 'Chưa đối soát'
    },

    {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 4',
        check: 'Chưa đối soát'
    },
    {
       
        codeTicket: 123456789034,
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 1',
        check: 'Chưa đối soát'
    },
    {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 1',
        check: 'Chưa đối soát'
    }, {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 1',
        check: 'Chưa đối soát'
    }, {
        
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 2',
        check: 'Chưa đối soát'
    }, {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 1',
        check: 'Chưa đối soát'
    },
    {
      
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 3',
        check: 'Chưa đối soát'
    },
    {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 2',
        check: 'Chưa đối soát'
    },
    {
       
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        checkin: 'Cổng 4',
        check: 'Chưa đối soát'
    }, {
        
        codeTicket: 123456789034,
        /* event: '10 Downing Street', */
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        check: 'Chưa đối soát',
        checkin: 'Cổng 6'
    }, {
        event: 'Hội chợ',
        date: '14/04/2021',
        type: 'Vé cổng',
        codeTicket: 123456789034,
        check: 'Chưa đối soát',
        checkin: 'Cổng 3'
    }


    ]
    return (
        <>
            <div className="checkingticket d-flex">
                <div className="main-card">
                    <MainTitleComponent title={"Đối soát vé"} />
                    <div className="warp-search d-flex justify-content-md-between">
                        <SearchComponent placeholder={"Tìm bằng số vé..."} />
                        <div className="button ">
                            <Button >Chốt đối soát</Button>
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
                <div className="right-card">
                    <RightFilter />
                </div>
            </div>


        </>

    )

}
export default React.memo(Checkingtickets);