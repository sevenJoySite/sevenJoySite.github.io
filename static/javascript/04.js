var myChart1 = echarts.init(document.getElementById('p-4-chart-bar'));
var myChart2 = echarts.init(document.getElementById('p-4-chart-pie1'));
var myChart3 = echarts.init(document.getElementById('p-4-chart-pie2'));
var myChart4 = echarts.init(document.getElementById('p-4-chart-pie3'));
var myChart5 = echarts.init(document.getElementById('p-4-chart-pie4'));

var option1 = {
  grid: {
    top: 30
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["其他单位", "改革调整类", "平台类", "功能服务类", "装备制造类"]
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#e46c0a',
      },
      data: [26957, -12668, 98, 9198, -21000]
    }
  ]
};

option2 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      label: {
        color: "#000000",
        fontSize: 8,
        formatter: function(params) {
          return [params.data.name, params.data.value, params.percent + '%'].join('\n')
        }
      },
      labelLine: {
        lineStyle: {
          color: "#000000"
        }
      },
      data: [
        {
          value: 417141,
          name: '装备制造类',
          itemStyle: {
            color: '#bb7033'
          }
        },
        {
          value: 44703,
          name: '功能服务类',
          itemStyle: {
            color: '#dc853d'
          }
        },
        {
          value: 1528,
          name: '平台类',
          itemStyle: {
            color: '#f9b690'
          }
        },
        {
          value: 121363,
          name: '功能服务类',
          itemStyle: {
            color: '#fbd0bb'
          }
        },
        {
          value: 26741,
          name: '其他单位',
          itemStyle: {
            color: '#f7e3da'
          }
        }
      ]
    }
  ]
};

option3 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      label: {
        color: "#000000",
        fontSize: 8,
        formatter: function (params) {
          return [params.data.name, params.data.value, params.percent + '%'].join('\n')
        }
      },
      labelLine: {
        lineStyle: {
          color: "#000000"
        }
      },
      data: [
        {
          value: 254712,
          name: '装备制造类',
          itemStyle: {
            color: '#bb7033'
          }
        },
        {
          value: 2353,
          name: '功能服务类',
          itemStyle: {
            color: '#dc853d'
          }
        },
        {
          value: 0,
          name: '平台类',
          itemStyle: {
            color: '#f9b690'
          }
        },
        {
          value: 168014,
          name: '功能服务类',
          itemStyle: {
            color: '#fbd0bb'
          }
        },
        {
          value: -5107,
          name: '其他单位',
          itemStyle: {
            color: '#f7e3da'
          }
        }
      ]
    }
  ]
};

option4 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      label: {
        color: "#000000",
        fontSize: 8,
        formatter: function (params) {
          return [params.data.name, params.data.value, params.percent + '%'].join('\n')
        }
      },
      labelLine: {
        lineStyle: {
          color: "#000000"
        }
      },
      data: [
        {
          value: 183671,
          name: '装备制造类',
          itemStyle: {
            color: '#bb7033'
          }
        },
        {
          value: 8165,
          name: '功能服务类',
          itemStyle: {
            color: '#dc853d'
          }
        },
        {
          value: 204,
          name: '平台类',
          itemStyle: {
            color: '#f9b690'
          }
        },
        {
          value: 91077,
          name: '功能服务类',
          itemStyle: {
            color: '#fbd0bb'
          }
        },
        {
          value: -10216,
          name: '其他单位',
          itemStyle: {
            color: '#f7e3da'
          }
        }
      ]
    }
  ]
};

option5 = {
  series: [
    {
      type: 'pie',
      radius: 90,
      label: {
        color: "#000000",
        fontSize: 8,
        formatter: function (params) {
          return [params.data.name, params.data.value, params.percent + '%'].join('\n')
        }
      },
      labelLine: {
        lineStyle: {
          color: "#000000"
        }
      },
      data: [
        {
          value: 513653,
          name: '装备制造类',
          itemStyle: {
            color: '#bb7033'
          }
        },
        {
          value: 340239,
          name: '功能服务类',
          itemStyle: {
            color: '#dc853d'
          }
        },
        {
          value: 0,
          name: '平台类',
          itemStyle: {
            color: '#f9b690'
          }
        },
        {
          value: 65200,
          name: '功能服务类',
          itemStyle: {
            color: '#fbd0bb'
          }
        },
        {
          value: 496,
          name: '其他单位',
          itemStyle: {
            color: '#f7e3da'
          }
        }
      ]
    }
  ]
};

myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart5.setOption(option5);