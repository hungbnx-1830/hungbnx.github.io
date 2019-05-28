
!function ($) {

  var ChartJs = function () {
  };

  ChartJs.prototype.digCharts = function (selector, type, data, options) {
    if (!selector.get(0)) {
      return selector;
    }

    var ctx = selector.get(0).getContext("2d");

    function generateChart() {
      switch (type) {
        case 'Pie':
          return new Chart(ctx, {type: 'pie', data: data, options: options});
          break;
        case 'doughnut':
          return new Chart(ctx, {type: 'doughnut', data: data, options: options});
          break;
        case 'Bar':
          return new Chart(ctx, {type: 'bar', data: data, options: options});
          break;
        case 'Line':
          return new Chart(ctx, {type: 'line', data: data, options: options});
          break;
      }
    };
    return generateChart();
  },

    ChartJs.prototype.init = function () {

      //Pie Chart

      var pieChart = {
        labels: [
          "Ngay1",
          "Ngay2",
          "Ngay3",
          "Ngay4",
          "Ngay5",

        ],
        datasets: [
          {
            data: [11, 11, 20, 20, 10],
            backgroundColor: [
              "#2b98f0",
              "#bbdef9",
              "#6fa53a",
              "#ee1111",
              "#005599",
              "#ee6622",
              "#11aa33",
              "#00b574"

            ],
            borderWidth: 0.5,
            hoverBorderColor: "#fff"
          }]
      };
      var pieChart2 = {
        labels: [
          "Ngay1",
          "Ngay2",
          "Ngay3",
        ],
        datasets: [
          {
            data: [11, 11, 20],
            backgroundColor: [
              "#005599",
              "#ee6622",
              "#11aa33",
              "#00b574"

            ],
            borderWidth: 0.5,
            hoverBorderColor: "#fff"
          }]
      };

      var optionsPie = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 40,
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: '#212121',
            boxWidth: 12,
            boxHeight: 2
          }
        }
      };

      this.digCharts($(".pie-chart"), 'Pie', pieChart, optionsPie);
      this.digCharts($(".pie-chart--02"), 'Pie', pieChart2, optionsPie);

      //Donut Chart

      var donutChart = {
        labels: [
          "Cong viec 1",
          "Cong viec 2"
        ],
        datasets: [
          {
            data: [11, 15],
            backgroundColor: [
              "#2b98f0",
              "#00b574"

            ],
            borderWidth: 0.5,
            hoverBorderColor: "#fff"
          }]
      };
      var donutChart2 = {
        labels: [
          "Cong viec 1",
          "Cong viec 2",
          "Cong viec 3",
          "Cong viec 4"
        ],
        datasets: [
          {
            data: [11, 15, 20, 22],
            backgroundColor: [
              "#2b98f0",
              "#fff000",
              "#333",
              "#00b574"

            ],
            borderWidth: 0.5,
            hoverBorderColor: "#fff"
          }]
      };

      var optionsDonut = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 82,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontColor: '#212121',
            boxWidth: 1,
            boxHeight: 2
          }
        },
        tooltips: {
          enabled: true
        }
      };

      this.digCharts($(".donut-chart"), 'doughnut', donutChart, optionsDonut);
      this.digCharts($(".donut-chart--02"), 'doughnut', donutChart2, optionsDonut);

      //Bar Chart
      var barChart = {
        labels: ['cv1', 'cv12', 'cv13', 'cv14', 'cv15', 'cv16'],
        datasets: [
          {
            label: "Ngay 1",
            backgroundColor: "#2b98f0",
            borderColor: "#000",
            borderWidth: 1,
            data: [3000, 3300, 2200, 4600, 3300, 3900],
            datalabels: {
              color: '#fff',
              align: 'end',
              opacity: 0
            }
          },
          {
            label: "Ngay 2",
            backgroundColor: "#bbdef9",
            borderColor: "#000",
            borderWidth: 1,
            data: [2700, 3400, 2800, 4200, 2100, 4500],
            datalabels: {
              color: '#fff',
              align: 'end',
              opacity: 0
            }
          }
        ]
      };
      var barChart2 = {
        labels: ['cv1', 'cv12', 'cv13', 'cv14', 'cv15', 'cv16'],
        datasets: [
          {
            label: "Ngay 1",
            backgroundColor: "#2b98f0",
            borderColor: "#000",
            borderWidth: 1,
            data: [3000, 3300, 2200, 4600, 3300, 3900],
            datalabels: {
              color: '#fff',
              align: 'end',
              opacity: 0
            }
          },
          {
            label: "Ngay 2",
            backgroundColor: "#bbdef9",
            borderColor: "#000",
            borderWidth: 1,
            data: [2700, 3400, 2800, 4200, 2100, 4500],
            datalabels: {
              color: '#fff',
              align: 'end',
              opacity: 0
            }

          },
          {
            label: "Ngay 3",
            backgroundColor: "#bbdef9",
            borderColor: "#000",
            borderWidth: 1,
            data: [1700, 1400, 1800, 1200, 1100, 1500],
            datalabels: {
              color: '#fff',
              align: 'end',
              opacity: 0
            }

          }
        ]
      };

      var optionsBar = {
        tooltips: {
          mode: 'label',
          intersect: false,
          callbacks: {
            label: function (t, d) {
              var dstLabel = d.datasets[t.datasetIndex].label;
              yLabel = t.yLabel;
              return dstLabel + ': ' + yLabel;
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          labels: {
            render: 'percentage'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              // set min value for Y-axis or range value
              max: 5000,
              min: 0,
              stepSize: 1000,
              beginAtZero: true,
            }
          }]
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: '#212121',
            boxWidth: 12,
            boxHeight: 2
          }
        }
      };
      this.digCharts($(".bar-chart"), 'Bar', barChart, optionsBar);
      this.digCharts($(".bar-chart--02"), 'Bar', barChart2, optionsBar);

      //Line 2 Chart
      var lineChart = {
        labels: ['2/03/01', '2/03/02', '2/03/03', '2/03/04', '2/03/04', '2/03/04'],
        datasets: [
          {
            label: "Ngay 1",
            borderColor: "#2b98f0",
            borderWidth: 1,
            hoverBorderColor: "#5592e1",
            data: [65, 59, 81, 45, 56, 80],
            fill: false,
            datalabels: {
              color: '#ff6384',
              align: 'top'
            }
          },
          {
            label: "Ngay 2",
            borderColor: "#bbdef9",
            borderWidth: 1,
            hoverBorderColor: "#fda32f",
            data: [20, 70, 60, 30, 26, 40],
            fill: false,
            datalabels: {
              color: '#ff6384',
              align: 'top'
            }
          },
          {
            label: "Ngay 3",
            borderColor: "#0d47a1",
            borderWidth: 1,
            hoverBorderColor: "rgb(255, 0, 0)",
            data: [10, 20, 60, 40, 20, 35],
            fill: false,
            datalabels: {
              color: '#ff6384',
              align: 'top'
            }
          }
        ]
      };

      var lineChart2 = {
        labels: ['1/1/1', '1/03/02', '1/03/03', '1/03/04', '1/03/04', '1/03/04'],
        datasets: [
          {
            label: "Công việc 1",
            borderColor: "#2b98f0",
            borderWidth: 1,
            hoverBorderColor: "#5592e1",
            data: [65, 59, 81, 45, 56, 80],
            fill: false,
            datalabels: {
              color: '#ccc',
              align: 'top'
            }
          },
          {
            label: "Công việc 2",
            borderColor: "#bbdef9",
            borderWidth: 1,
            hoverBorderColor: "#fda32f",
            data: [20, 70, 60, 30, 26, 40],
            fill: false,
            datalabels: {
              color: '#ccc',
              align: 'top'
            }
          }
        ]
      };
      var optionsLine = {
        responsive: true,
        maintainAspectRatio: false,
        tooltipCaretSize: 0,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
              // labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20
            },
            scaleLabel: {
              display: true
              // labelString: 'Value'
            }
          }]
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: '#333',
            boxWidth: 12,
            boxHeight: 2
          }
        }
      };

      this.digCharts($(".line-chart"), 'Line', lineChart, optionsLine);
      this.digCharts($(".line-chart--02"), 'Line', lineChart2, optionsLine);

    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs


}(window.jQuery),

//init
  function ($) {
    $.ChartJs.init()
  }(window.jQuery);