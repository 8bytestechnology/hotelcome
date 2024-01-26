import { Component } from '@angular/core';

// Get Data
import { employeList } from './data';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  miniChart: any;
  userChart1: any;
  userChart2: any;
  userChart3: any;
  hourSpentChart: any;
  radialbarChart: any;

  employees: any;

  ngOnInit(): void {
    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Leaderboard', active: true }
    ];

    // Fetch Data
   this.employees = employeList

    // Chart Color Data Get Function
    this._miniChart('["--tb-primary"]');
    this._userChart1('["--tb-primary"]');
    this._userChart2('["--tb-primary"]');
    this._userChart3('["--tb-primary"]');
    this._hourSpentChart('["--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info","--tb-info","--tb-info","--tb-info","--tb-info", "--tb-info"]');
    this._radialbarChart('["--tb-primary", "--tb-danger", "--tb-warning"]');
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
* Basic Area Charts
*/
  private _miniChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.miniChart = {
      series: [{
        data: [7, 22, 11, 21, 17, 25]
      }],
      chart: {
        type: 'line',
        width: 48,
        height: 34,
        sparkline: {
          enabled: true
        }
      },
      colors: colors,
      stroke: {
        width: 2.2,
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  /**
* user1 Charts
*/
  private _userChart1(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.userChart1 = {
      series: [{
        data: [2, 22, 11, 21, 17, 25]
      }],
      chart: {
        type: 'line',
        width: 80,
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      colors: colors,
      stroke: {
        curve: 'smooth',
        width: 2.2,
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  /**
* user2 Charts
*/
  private _userChart2(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.userChart2 = {
      series: [{
        data: [18, 17, 21, 11, 21, 5]
      }],
      chart: {
        type: 'line',
        width: 80,
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      colors: colors,
      stroke: {
        curve: 'smooth',
        width: 2.2,
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  /**
* user3 Charts
*/
  private _userChart3(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.userChart3 = {
      series: [{
        data: [22, 7, 18, 7, 17, 8]
      }],
      chart: {
        type: 'line',
        width: 80,
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      colors: colors,
      stroke: {
        curve: 'smooth',
        width: 2.2,
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  // Hours Spent Chart
  private _hourSpentChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.hourSpentChart = {
      series: [{
        data: [7, 11, 15, 20, 18, 23, 20, 23, 21, 19]
    }],
    chart: {
        toolbar: {
            show: false,
        },
        height: 170,
        type: 'bar',
        events: {
            click: function (chart:any, w:any, e:any) {
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '70%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    colors: colors,
    grid: {
        show: false,
    },
    xaxis: {
        categories: ['M', 'T','W','T','F', 'S', 'S','M', 'T', 'W'],
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: colors,
                fontSize: '12px'
            }
        }
    }
    }
  }

  // Radial Bar Chart
  private _radialbarChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.radialbarChart = {
      series: [44, 55, 67],
      chart: {
        height: 260,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          },
    
          hollow: {
            margin: 4,
            size: '14%',
          },
          track: {
            strokeWidth: '60%',
            opacity: 1,
            margin: 16,
          },
        }
      },
      stroke: {
        lineCap: 'round'
      },
      colors: colors,
      labels: ['Productive', 'Neutral', 'Unproductive'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: -24,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function (seriesName:any, opts:any) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 5
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    }
  }

}
