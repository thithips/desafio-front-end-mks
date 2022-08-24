export interface IAction {
    type: string;
    data: {
      count: number;
      id: number;
      price: string;
      title: string;
    };
  }

export interface Iitem {
    id: number;
    count: number;
  }