var myChart1 = echarts.init(document.getElementById('p-3-chart-1'));
var myChart2 = echarts.init(document.getElementById('p-3-chart-2'));
var myChart3 = echarts.init(document.getElementById('p-3-chart-3'));
var myChart4 = echarts.init(document.getElementById('p-3-chart-4'));
var myChart5 = echarts.init(document.getElementById('p-3-chart-5'));

var option1 = {
  grid: {
    top: 30
  },
  xAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["2015.9", "2016.9", "2017.9", "2018.9", "2019.9"]
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#7f7f7f',
      },
      data: [861305, 774967, 707535, 672616, 611476]
    },
    {
      name: '营业收入',
      type: 'line',
      lineStyle: {
        color: '#e46c0a',
      },
      itemStyle: {
        opacity: 0
      },
      data: ['', 774967, 707535, 672616, 611476]
    }
  ]
};

var option2 = {
  grid: {
    top: 30
  },
  xAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["2015.9", "2016.9", "2017.9", "2018.9", "2019.9"]
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#e46c0a',
      },
      data: [-14688, -7229, 437, 1209, 2586]
    },
    {
      name: '营业收入',
      type: 'line',
      lineStyle: {
        color: '#7f7f7f',
      },
      itemStyle: {
        opacity: 0
      },
      data: ['', -7229, 437, 1209, 2586]
    }
  ]
};
var option3 = {
  grid: {
    top: 30
  },
  xAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["2015.12", "2016.12", "2017.12", "2018.12", "2019.9"]
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#7f7f7f',
      },
      data: [374706, 324478, 294173, 273552, 272901]
    },
    {
      name: '营业收入',
      type: 'line',
      lineStyle: {
        color: '#e46c0a',
      },
      itemStyle: {
        opacity: 0
      },
      data: ['', 324478, 294173, 273552, 272901]
    }
  ]
};
var option4 = {
  grid: {
    top: 30
  },
  xAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["2015.12", "2016.12", "2017.12", "2018.12", "2019.9",]
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#7f7f7f',
      },
      data: [755849, 781722, 699773, 609834, 583215]
    },
    {
      name: '营业收入',
      type: 'line',
      lineStyle: {
        color: '#e46c0a',
      },
      itemStyle: {
        opacity: 0
      },
      data: ['', 781722, 699773, 609834, 583215]
    }
  ]
};
var option5 = {
  grid: {
    top: 30
  },
  xAxis: {
    axisLabel: {
      fontSize: 10
    },
    data: ["2015.12", "2016.12", "2017.12", "2018.12", "2019.9",]
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: '营业收入',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        color: '#7f7f7f',
      },
      data: [473646, 460118, 420381, 374415, 419972]
    },
    {
      name: '营业收入',
      type: 'line',
      lineStyle: {
        color: '#e46c0a',
      },
      itemStyle: {
        opacity: 0
      },
      data: ['', 460118, 420381, 374415, 419972]
    }
  ]
};

myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart5.setOption(option5);