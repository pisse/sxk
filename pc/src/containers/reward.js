import request from 'common/request'

export default () => {
  let reward = document.querySelector('div.reward')
  if(!reward) return;
  let form = reward.querySelector('form')
  let tips = form.querySelector('p')
  let popup = reward.querySelector('.reward-popup')

  let show = function(title, body) {
    popup.style.display="block"
    popup.querySelector('h1').innerText = title
    popup.querySelector('p').innerHTML = body
  }

 // show('恭喜你已报名成功！','恭喜您已报名成功！<br/>工作人员将第一时间与报名者取得联系<br/>请耐心等待，谢谢！')

  popup.querySelector('a').addEventListener('click', function(e){
    e.stopPropagation()
    e.preventDefault()
    popup.style.display="none"
  }, false)

  form.text.addEventListener('keyup', function(e){
    let l = this.value.length
    tips.innerText = `还可以输入${140-l}个字`
  },false)

  form.addEventListener('submit',function(e){
    e.stopPropagation();
    e.preventDefault();
    let name = this.name.value
    let phone = this.phone.value
    let text = this.text.value

    if (!name) {
      show('提 示', '请输入姓名')
      this.name.focus()
      return
    }
    if (!phone) {
      show('提 示', '请输入手机号')
      this.phone.focus()
      return
    }
    if (!/^1\d{10}/.test(phone)) {
      show('提 示', '手机号不正确')
      this.phone.focus()
      return
    }
    if(!text) {
      show('提 示', '请输入留言')
      this.text.focus()
      return
    }
    if(text.length > 140) {
      show('提 示', '请输入留言超过140字')
      this.text.focus()
      return
    }

    request('http://credit.xianjincard.com/credit-info/user-offer-reward',{
      method: 'POST',
      body: $(form).serialize()
    }).then(response => response.json())
      .then(function(data){
        if(data.code == 0){
          popup.style.display="block"
          popup.querySelector('p').innerHTML = data.message
          show('恭喜你已报名成功！',data.message)
          return
        }
        alert(data.message)
      })

  },false)
};
