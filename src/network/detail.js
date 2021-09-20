import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class detailBaseData {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}
