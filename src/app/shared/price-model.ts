export class PriceModel {
  id: number;
  name: string;
  time: string;
  price: string;
  nameURL: string;


  constructor(param?: PriceModel) {
    Object.assign(this, param);
  }

  static get emptyPrice(): PriceModel {
    return {
      id: 0,
      name: '',
      time: '',
      price: '',
      nameURL: '',
    };
  }
}
