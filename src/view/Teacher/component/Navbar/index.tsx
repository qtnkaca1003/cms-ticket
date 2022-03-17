import React from 'react';
import { Button, Row, Col } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { useHistory } from 'react-router';
import '../../style.scss';

export const NavbarComponent = () => {
  const history = useHistory();

  return (
    <div className='layout-introduce'>
      <div className='header-introduce'>
        <Row>
          <Col flex="420px"><a className='title-introduce' href="/#">Gửi đến quý phụ huynh</a></Col>
          <Col flex="auto">
            <Button className='button-navintro' style={{ display: 'flex' }} icon={<HomeFilled />}>
              <p className='text-default-button'>  Trở về màn hình chính</p>
            </Button>
            <Button onClick={() => {
              history.push('/senttoparents');
            }}
            className='button-navintro'>
              <p className='text-default-button'>Gửi đến quý phụ huynh</p>
            </Button>
            <Button onClick={() => {
              history.push('/senttoteachers');
            }}
            className='button-navintro'>
              <p className='text-default-button'>Gửi đến quý giáo viên</p>

            </Button>
            <Button onClick={() => {
              history.push('/QA');
            }}
            className='button-navintro'>
              <p className='text-default-button'>Hỏi/đáp</p>
            </Button>
          </Col>
        </Row>
      </div>
    </div>

  );
};
export default React.memo(NavbarComponent);
