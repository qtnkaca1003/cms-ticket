import { Button } from 'antd';
import React from 'react';
import { NavbarComponent } from '../component/Navbar';
import '../style.scss';

export const SentToParents = () => {
  return (
    <div>
      <NavbarComponent/>
      <div className='content-secsion-1'>
        <div>
          <p className='p-text-brown'>Chương trình [tiết học thực hành] giáo dục về nguồn nước là một chương trình</p>
          <p className='p-text-pink'>học về tầm quan trọng và cách vận hành của tự nhiên, con người chúng ta trong sự tuần hoàn của 
            nước trên địa cầu này cần phải làm gì để tương lai có thể tiếp tục sử dụng nguồn nước.</p>
          <p className='p-text-brown'>Việc tham gia vào chương trình trên là một hoạt động nhằm</p>
          <p className='p-text-pink'>tăng cường thói quen, và hiểu biết về nguồn nước ngay chính trong gia đình mình</p>]
          <p className='p-text-brown'>. Nội dung chương trình sẽ được đính kèm trong [vé thông hành của người bạn Aqua], xin quý phụ huynh hãy cùng theo sát các bé trong suốt quá trình.</p>
        </div>
      </div>
      <Button></Button>
    </div>
  );
};
export default React.memo(SentToParents);