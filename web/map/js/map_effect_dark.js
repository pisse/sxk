/**
 * Created by Jay on 2016/11/28.
 */

window.MAP_EFFECT = {
    series2: {
        show: true,
        symbol:"arrow",
        symbolSize: 12,
        period:3,
        color: 'aqua',
        shadowColor: 'rgba(245,205,25,0.4)',
        shadowBlur : 2,
        trailLength:0.1,
        loop:true,
        z: 10,
        zlevel: 2
    }
};

window.MAP_ITEM_STYLE = {
    source: {
        size: 16
    },
    dest:{
        sizes:[ 10, 15, 20 ],
        colors:[  ]
    },
    series1 : {
        normal: {
            color: '#f4e925'
        }
    },
    series2: {
        normal: {
            z: 10,
            zlevel: 2,
            color:'#fff',
            width:0.5,
            type: 'solid',
            opacity: 0.1,
            curveness: 0.1
        }
    }
}

window.generateMapSeries = function(allData) {
    return [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                textStyle: { color: "lime", fontSize:13 },
                formatter: '{b}\r\n',
                position: 'top',
                show: true
            },
            emphasis: {
                show: true
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: MAP_ITEM_STYLE.series1,
        animation:false,
        data: [].concat(allData.citys)
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: MAP_EFFECT.series2,
        lineStyle: MAP_ITEM_STYLE.series2,
        animation:false,
        data: [].concat(allData.moveLines)
    }];
}
