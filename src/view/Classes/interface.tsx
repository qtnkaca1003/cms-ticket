import { ReactNode } from 'react';

export interface IModal {
  isVisible: boolean;
  dataEdit: any;
  isReadOnly?: boolean;
}
export interface IModalField {
  modal: {
    isVisible: boolean;
    record: any;
    isReadOnly: boolean;
  };
  handleRefreshData: (reload: boolean) => void;
  setModal: any;
}
export interface IPropsModal {
  handleRefresh: () => void;
  modal: IModal;
  setModal: (arg: any) => void;
}
export interface IFormContent {
  label?: string;
  name: string;
  render?: ReactNode;
  rules?: any;
}
