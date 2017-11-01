$(function(){
  var setTime = function(){
    var date = new Date();
    var y = date.getFullYear();
    var m = (date.getMonth()+1) < 10 ? '0' +(date.getMonth()+1):(date.getMonth()+1);
    var d = date.getDate();
    $('.date').text(y+'.'+m+'.'+d);
    $('.time').text(date.getHours()+':'+date.getMinutes());
  };
  
  setTime();
  setInterval(setTime,1000*60);
  
  var transform = function(points){
    var east = 132.5, south=18.1, west=73, north = 53.34;
    var width = east-west, height = north-south;
    return {
      left: (points[0]-west)/width,
      top: (north-points[1])/height
    };
  };

  var position = function (points) {
    var r = transform(points);
    return {
      left: r.left*1143,
      top: r.top*982
    };
  };

  
  var data = {
    users:100000,
    loanTotal: 10000,
    loanCount:20000,
    mark:[
      {
        type:true,
        points:[116.417854,39.921988]
      },
      {
        type:true,
        points:[106.417854,39.921988]
      },
      {
        type:true,
        points:[96.417854,39.921988]
      }
    ]
  };

  //[116.404, 39.915]
  var showMarker = function(mark){
    console.log(mark);
    $('.point').css(position(mark.points)).find('span').text(mark.prompt);    
  };

  //showMarker({points:[116.404,39.915]});

  var intervalShow = function(data, fn){
    var i = 0;
    showMarker(data.mark[i]);
    var interval = setInterval(function(){
      i++;
      if ( i >= data.mark.length){
        clearInterval(interval);
        setTimeout(fn,5000);
        return;
      }
      showMarker(data.mark[i]);
    },3000);
  };

  (function fatchData (){
    $.getJSON('http://api.koudaikj.com/cash/list?callback=?').then(function(data){
      console.log(data);
      $('.user').text(parseInt(data.users,10).toLocaleString());
      $('.loanTotal').text(parseInt(data.loanTotal,10).toLocaleString());
      $('.loanCount').text(parseInt(data.loanCount,10).toLocaleString());
      if(data.mark.length > 1){
        intervalShow(data, fatchData);
      }else{
       setTimeout(fatchData,5000);
      }
    });
  }());

});
