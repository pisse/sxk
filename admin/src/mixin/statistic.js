/**
 * Created by Administrator on 2017/5/14.
 */
import Highcharts from 'highcharts'
// import HighchartMore from 'highcharts/highcharts-more'
// HighchartMore(Highcharts)

var statisticChart = {
  methods: {
    drawLine (data) {
      let series = data.series
      let categories = data.categories
      let title = data.title
      let ele = data.ele
      let type = data.type
      let yFormat = data.yFormat
      let max = data.max
      let height = data.height
      let marginTop = data.marginTop
      let marginLeft = data.marginLeft
      let marginRight = data.marginRight
      let tickInterval = data.tickInterval
      var options = {
        chart: {
          renderTo: ele,
          height: height || 450,
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          animation: true,
          marginTop: marginTop || 80,
          marginLeft: marginLeft || 80,
          marginRight: marginRight || 40,
          type: type || 'line'
        },
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          borderWidth: 0,
          x: 0,
          itemStyle: {
            fontWeight: 'normal',
            color: '#a1a8b4'
          },
          itemHoverStyle: {
            color: '#c9c9c9'
          }
        },
        colors: ['#1c62b8', '#f6505c', '#2bb874', '#19b2b7', '#8673cd', '#f6c928'],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          },
          line: {
            marker: {
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null,
              symbol: 'circle'
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: title,
          align: 'center',
          style: {
            fontSize: '12px'
          },
          verticalAlign: 'top',
          floating: true
        },
        yAxis: [{
          title: {
            enabled: false
          },
          max: max,
          labels: {
            format: yFormat || '{value}',
            style: {
              color: '#f6505c'
            }
          }
        }],
        xAxis: {
          categories: categories,
          labels: {
            enabled: true
          },
          tickPosition: 'inside',
          tickInterval: tickInterval || 1,
          tickmarkPlacement: 'on'
        },
        tooltip: {
          shared: true
        },
        series: series
      }
      let hchart = new Highcharts.Chart(options)
    }
  }
}
export default statisticChart
