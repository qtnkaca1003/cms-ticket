import * as ticketRepository from './repository';

const ticketPresenter = { ...ticketRepository };

// ở đây xử lý dữ liệu gửi lên backend và dữ liệu backend gửi về, dữ liệu backend gửi về có thể đc đưa lên store ở đây
ticketPresenter.getListTicket()

export default ticketPresenter;