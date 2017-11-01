export default new class Content {
  popupHtml (content = '服务器繁忙，请稍后重试', tips = '朕知道了') {
    return `<p>${content}</p><a class='click'>${tips}</a>`
  }

  showHtml (code) {
    switch (code) {
      case 0:
        return this.popupHtml('您已成功参团，当前团队人数<b>X</b>人<br />请邀请更多人和你一起享折扣', '马上邀请')
      case 1:
        return this.popupHtml('您尚未登录，请登录后查看', '马上登录')
      case 2:
        return this.popupHtml('您尚未组团，请开团后查看！', '马上开团')
      case 3:
        return this.popupHtml('您尚未申请，请申请后开团', '马上申请')
      case -2012:
        return this.popupHtml('亲，活动即将开始<br />敬请期待')
      case -2013:
        return this.popupHtml('亲，活动已经结束<br />更多精彩马上来袭')
      default:
        return this.popupHtml()
    }
  }
}()
