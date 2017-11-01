/**
 * Created by Jay on 2016/11/28.
 */

window.MAP_EFFECT = {
    series2: {
        show: true,
        constantSpeed: 80,
        symbol: 'pin',
        symbolSize: 5,
        trailLength: 0,
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
            color: '#46bee9'
        }
    },
    series2: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#F58158'
            }, {
                offset: 1,
                color: '#58B3CC'
            }], false),
            width: 3,
            opacity: 0.2,
            curveness: 0.1
        }
    }
}
