import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  portfolios = [
    {
      "name":"IS0102",
      "ccy":"CHF",
      "ctv":"1263",
      "qta":"100",
      "price":"12.63",
      "performance":"0.03",
      "sdg":{
        "overall":"78.63",
        "sdg_1":"38.12",
        "sdg_2":"45.12",
        "sdg_3":"34.12",
        "sdg_4":"89.12",
        "sdg_5":"12.12",
        "sdg_6":"38.12",
        "sdg_7":"67.12",
        "sdg_8":"12.12",
        "sdg_9":"74.12",
        "sdg_10":"23.23",
        "sdg_11":"85.12",
        "sdg_12":"56.13",
        "sdg_13":"12.99",
        "sdg_14":"100.00",
        "sdg_15":"32.99",
        "sdg_16":"56.44",
        "sdg_17":"83.77",
      },
      "esg":["alcohol","nuclear"],
      "co2em":"78"
    },
    {
      "name":"LU0001",
      "ccy":"USD",
      "ctv":"38795",
      "qta":"1000",
      "price":"38.80",
      "performance":"-0.06",
      "sdg":{
        "overall":"48.38",
        "sdg_1":"46.66",
        "sdg_2":"40.35",
        "sdg_3":"42.01",
        "sdg_4":"89.12",
        "sdg_5":"52.35",
        "sdg_6":"81.49",
        "sdg_7":"14.46",
        "sdg_8":"12.12",
        "sdg_9":"91.56",
        "sdg_10":"96.22",
        "sdg_11":"85.12",
        "sdg_12":"80.37",
        "sdg_13":"64.27",
        "sdg_14":"19.88",
        "sdg_15":"44.16",
        "sdg_16":"18.66",
        "sdg_17":"83.07",
      },
      "co2em":"78"
    },
  ]

  constructor() { }

  getPortfolios(): any {
    return this.portfolios;
  }

}
