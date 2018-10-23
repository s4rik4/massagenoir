import {TicketModel} from './ticket-model';
import {Injectable} from '@angular/core';
import {PriceModel} from './price-model';

@Injectable()
export class PriceService {
  private _prices: PriceModel[];

  constructor(private _priceService: PriceService) {
    this._prices = this._getMockData();
  }

  getAllTickets() {
    return this._prices.map(price => {
      return {
        ...price,
        event: this._priceService.getPriceById(price.priceId)
      };
    });
  }

  create(param: PriceModel) {
    this._prices = [
      ...this._prices,
      new PriceModel({
        id: this._prices.reduce((x, y) => x.id > y.id ? x : y).id + 1,
        ...param,
        price: this._priceService.getPriceById(param.priceId)
      })

    ];
    console.log(this._prices);
  }

  private _getMockData() {
    return [
      new PriceModel({
        'id': 1,
        'name': 'Test masszázs',
        'time': '45 perc',
        'price': '4500 Ft',
        'nameURL': ''
      }),
    ];
  }
}
