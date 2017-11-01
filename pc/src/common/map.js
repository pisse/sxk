import echarts from 'echarts';
import InstantClick from 'instantclick';
import chinaMapLoad from 'bundle?lazy!common/china.json';
import CITYS from 'common/city.json';

const START = {
    name: '',
    value: [121.49295, 31.22337],
    symbolSize: 16,
    itemStyle: {
        normal: {
            color: '#00ccff'
        }
    }
};
const COLORS = {
    MATKER: {
        STARTER: '#ffcc66'
    },
    text: {

    }
};

let chart;
let timer;
let surname = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗', '梁', '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏', '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎', '余', '潘', '杜', '戴', '夏', '锺', '汪', '田', '任', '姜', '范', '方', '石', '姚', '谭', '廖', '邹', '熊', '金', '陆', '郝', '孔', '白', '崔', '康', '毛', '邱', '秦', '江', '史', '顾', '侯', '邵', '孟', '龙', '万', '段', '雷', '钱', '汤', '尹', '黎', '易', '常', '武', '乔', '贺', '赖', '龚', '文'];
let cache = {};

let options = {
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        },
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#3355fd',
                borderColor: '#738afb'
            },
            emphasis: {
                areaColor: '#3355fd',
                borderColor: '#738afb'
            }
        },
        width: 860,
        height: 600
    },
    series: []
};

// 地图初始化
function init(){
    if(!chart){
        chart = echarts.init(this);
    }
    chinaMapLoad(data => {
        echarts.registerMap('china', data);
        timer = setInterval(present, 5000);
        setSeries();
        present();
    });
}

// 设置坐标、路径
function setSeries(cities = [], moves = []){
    let data = {
        'citys': cities,
        'moveLines': moves
    };
    options.series = [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                textStyle: {
                    color: "lime",
                    fontSize: 13
                },
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
        itemStyle: {
            normal: {
                color: '#f4e925'
            }
        },
        animation: false,
        data: [].concat(data.citys)
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            symbol: `arrow`,
            symbolSize: 12,
            period: 3,
            color: '#00ccff',
            shadowColor: 'rgba(245,205,25,0.4)',
            shadowBlur: 2,
            trailLength: 0.1,
            loop: true,
            z: 10,
            zlevel: 2
        },
        lineStyle: {
            normal: {
                z: 10,
                zlevel: 2,
                color:'#fff',
                width:0.5,
                type: 'solid',
                opacity: 0.1,
                curveness: 0.1
            }
        },
        animation:false,
        data: [].concat(data.moveLines)
    }];
    chart.setOption(options);
    setTimeout(setDropdown, 200);
}

function setDropdown(){
    $('.map-tips').fadeOut(400, function(){
        $(this).remove();
    });

    let options = [];
    let element = chart._dom;
    let {offsetLeft: x, offsetTop: y} = element;
    let position = chart.getModel()._componentsMap.series[0]._data._graphicEls;
    if(!position || position.length === 1) return;
    position.forEach((data, index) => {
        if(index === 0) return;
        let [top, left] = data.position;
        let city = cache.citys[index];
        let param = city.params;
        let direction = 'bottom';
        (city.value[1] < START.value[1] || city.value[1] > 51) && (direction = 'top');
        for(let i = 1;i < index;i++){
            let temp = cache.citys[i];
            let distance = getDistance({lat: city.value[0], lon: city.value[1]}, {lat: temp.value[0], lon: temp.value[1]});
            if(distance < 600 && direction == temp.direction){
                direction = (direction == 'bottom') ? 'top' : 'bottom';
                break;
            }
        }
        options.push([
            x + top,
            y + left,
            param,
            direction
        ]);
    });
    if(options.length == 2){
        if(options[1][1] > options[0][1]){
            options[1][3] = 'top';
            options[0][3] = 'bottom';
        }else{
            options[0][3] = 'top';
            options[1][3] = 'bottom';
        }
    }
    options.forEach((option) => {
        showDropdown.apply(undefined, option);
    })
}

function showDropdown(x, y, data, direction){
    let element = $(`<div class='map-tips'>
            <p>
                <span>${data.position}</span>
                <span>${data.name}</span>
            </p>
            <p>
                <span>借款</span>
                <span>${data.money} 元</span>
            </p>
        </div>`);
    $('body').append(element);
    let width = element.outerWidth() / 2;
    direction = direction || 'bottom';
    switch (direction) {
        case 'bottom':
            x = x - width;
            y = y - element[0].clientHeight - 30;
            break;
        case 'top':
            x = x - width;
            y = y + 30;
            break;
    };
    element.addClass(direction).css({
        top: `${y}px`,
        left: `${x}px`,
        display: 'none'
    }).fadeIn(500);
}


function deg2radius(deg){
    return deg * (Math.PI / 180);
}

function getDistance(start, end){
    let radius = 6371;
    let lat = deg2radius(end.lat - start.lat);
    let lon = deg2radius(end.lon - start.lon);
    let a = Math.sin(lat / 2) * Math.sin(lat / 2) + Math.cos(deg2radius(start.lat)) * Math.cos(deg2radius(end.lat)) + Math.sin(lon / 2) * Math.sin(lon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c;
}

function present(){

    let count = 2;
    let citys = [START];
    let moves = [];

    for(let i = 0; i < count;i++){
        let position = getPosition();
        let data = {
            name: `${getSurname() + getGender()}`,
            money: getMoney(),
            position: position.name
        };
        citys.push({
            params: data,
            // name: `${position.name}${data.name}\n借款${data.money}元`,
            value: position.coordinate,
            symbolSize: data.money >= 3000 ? (data.money >= 5000 ? 15 : 20) : 10,
            label: {
                normal: {
                    textStyle: {
                        color: "#ffcc66",
                        fontSize: 20
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffcc66'
                }
            }
        });
        moves.push({
            fromName: START.name,
            toName: position.name,
            coords: [
                START.value,
                position.coordinate
            ]
        });

    }
    cache = {citys, moves};
    setSeries(citys, moves);
}

function getPosition(){
    let count = CITYS.length - 1;
    let data = CITYS[Math.floor(Math.random() * count)];
    return data;
}

function getSurname(){
    let count = surname.length - 1;
    let data = surname[Math.floor(Math.random() * count)];
    return data;
}

function getGender(){
    return Math.random() < 0.5 ? '先生' : '女士';
}

function getMoney(){
    let money = Math.ceil(Math.random() * 25) * 100;
    return money < 1000 ? 1000 : money;
}

export default function(){
    init.apply(this, []);
    InstantClick.on('change', () => {
        chart = undefined;
        timer && clearInterval(timer);
    });
};