import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export function getDetailRecommend() {
  return request({
    url: '/recommend'
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

export class detailShopData {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class detailGoodsData {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.key = detailInfo.detailImage[0].key
    this.images = detailInfo.detailImage[0].list
  }
}

export class detailParamData {
  constructor(itemParams) {
    this.company = itemParams.info.set
    this.pSize = itemParams.rule.tables[0]
  }
}

