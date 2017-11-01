/**
 * Created by Jay on 2016/11/28.
 */

window.MAP_EFFECT = {
    series2: {
        show: true,
        symbolSize: 5,
        period:4,
        color: '#f4e925',
        shadowColor: 'rgba(245,205,25,0.4)',
        shadowBlur : 5,
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
            borderWidth:1,
            borderColor:['rgba(30,144,255,1)','lime'][0],
            lineStyle: {
                //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                //shadowBlur: 10,
                //shadowOffsetX: 0,
                //shadowOffsetY: 0,
                type: 'solid'
            },
            opacity: 0.5,
            curveness: 0.1
        }
    }
}
