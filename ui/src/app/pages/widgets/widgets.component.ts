import { Component } from '@angular/core';
import { latLng, tileLayer, circle } from 'leaflet';
import { otherWidgetsModel, latestSalesModel, widgetsActivitiesModel, widgetsTasksModel, HotproductModel, BankModel, CandidateModel } from './widgets.model';
import { otherWidgets, latestsales, widgetsActivities, widgetsTasks, hotproducts, candidate, bank } from './data';

var series =
{
  "monthDataSeries1": {
    "prices": [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85
    ],
    "dates": [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  },
  "monthDataSeries2": {
    "prices": [
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9040.85,
      8340.7,
      8165.5,
      8122.9,
      8107.85,
      8128.0
    ],
    "dates": [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  },
  "monthDataSeries3": {
    "prices": [
      7114.25,
      7126.6,
      7116.95,
      7203.7,
      7233.75,
      7451.0,
      7381.15,
      7348.95,
      7347.75,
      7311.25,
      7266.4,
      7253.25,
      7215.45,
      7266.35,
      7315.25,
      7237.2,
      7191.4,
      7238.95,
      7222.6,
      7217.9,
      7359.3,
      7371.55,
      7371.15,
      7469.2,
      7429.25,
      7434.65,
      7451.1,
      7475.25,
      7566.25,
      7556.8,
      7525.55,
      7555.45,
      7560.9,
      7490.7,
      7527.6,
      7551.9,
      7514.85,
      7577.95,
      7592.3,
      7621.95,
      7707.95,
      7859.1,
      7815.7,
      7739.0,
      7778.7,
      7839.45,
      7756.45,
      7669.2,
      7580.45,
      7452.85,
      7617.25,
      7701.6,
      7606.8,
      7620.05,
      7513.85,
      7498.45,
      7575.45,
      7601.95,
      7589.1,
      7525.85,
      7569.5,
      7702.5,
      7812.7,
      7803.75,
      7816.3,
      7851.15,
      7912.2,
      7972.8,
      8145.0,
      8161.1,
      8121.05,
      8071.25,
      8088.2,
      8154.45,
      8148.3,
      8122.05,
      8132.65,
      8074.55,
      7952.8,
      7885.55,
      7733.9,
      7897.15,
      7973.15,
      7888.5,
      7842.8,
      7838.4,
      7909.85,
      7892.75,
      7897.75,
      7820.05,
      7904.4,
      7872.2,
      7847.5,
      7849.55,
      7789.6,
      7736.35,
      7819.4,
      7875.35,
      7871.8,
      8076.5,
      8114.8,
      8193.55,
      8217.1,
      8235.05,
      8215.3,
      8216.4,
      8301.55,
      8235.25,
      8229.75,
      8201.95,
      8164.95,
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2
    ],
    "dates": [
      "02 Jun 2017",
      "05 Jun 2017",
      "06 Jun 2017",
      "07 Jun 2017",
      "08 Jun 2017",
      "09 Jun 2017",
      "12 Jun 2017",
      "13 Jun 2017",
      "14 Jun 2017",
      "15 Jun 2017",
      "16 Jun 2017",
      "19 Jun 2017",
      "20 Jun 2017",
      "21 Jun 2017",
      "22 Jun 2017",
      "23 Jun 2017",
      "27 Jun 2017",
      "28 Jun 2017",
      "29 Jun 2017",
      "30 Jun 2017",
      "03 Jul 2017",
      "04 Jul 2017",
      "05 Jul 2017",
      "06 Jul 2017",
      "07 Jul 2017",
      "10 Jul 2017",
      "11 Jul 2017",
      "12 Jul 2017",
      "13 Jul 2017",
      "14 Jul 2017",
      "17 Jul 2017",
      "18 Jul 2017",
      "19 Jul 2017",
      "20 Jul 2017",
      "21 Jul 2017",
      "24 Jul 2017",
      "25 Jul 2017",
      "26 Jul 2017",
      "27 Jul 2017",
      "28 Jul 2017",
      "31 Jul 2017",
      "01 Aug 2017",
      "02 Aug 2017",
      "03 Aug 2017",
      "04 Aug 2017",
      "07 Aug 2017",
      "08 Aug 2017",
      "09 Aug 2017",
      "10 Aug 2017",
      "11 Aug 2017",
      "14 Aug 2017",
      "16 Aug 2017",
      "17 Aug 2017",
      "18 Aug 2017",
      "21 Aug 2017",
      "22 Aug 2017",
      "23 Aug 2017",
      "24 Aug 2017",
      "28 Aug 2017",
      "29 Aug 2017",
      "30 Aug 2017",
      "31 Aug 2017",
      "01 Sep 2017",
      "04 Sep 2017",
      "05 Sep 2017",
      "06 Sep 2017",
      "07 Sep 2017",
      "08 Sep 2017",
      "11 Sep 2017",
      "12 Sep 2017",
      "13 Sep 2017",
      "14 Sep 2017",
      "15 Sep 2017",
      "18 Sep 2017",
      "19 Sep 2017",
      "20 Sep 2017",
      "21 Sep 2017",
      "22 Sep 2017",
      "25 Sep 2017",
      "26 Sep 2017",
      "27 Sep 2017",
      "28 Sep 2017",
      "29 Sep 2017",
      "03 Oct 2017",
      "04 Oct 2017",
      "05 Oct 2017",
      "06 Oct 2017",
      "09 Oct 2017",
      "10 Oct 2017",
      "11 Oct 2017",
      "12 Oct 2017",
      "13 Oct 2017",
      "16 Oct 2017",
      "17 Oct 2017",
      "18 Oct 2017",
      "19 Oct 2017",
      "23 Oct 2017",
      "24 Oct 2017",
      "25 Oct 2017",
      "26 Oct 2017",
      "27 Oct 2017",
      "30 Oct 2017",
      "31 Oct 2017",
      "01 Nov 2017",
      "02 Nov 2017",
      "03 Nov 2017",
      "06 Nov 2017",
      "07 Nov 2017",
      "08 Nov 2017",
      "09 Nov 2017",
      "10 Nov 2017",
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017"
    ]
  }
}

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  hotproducts!: HotproductModel[];
  candidates!: CandidateModel[];
  otherWidgets!: otherWidgetsModel[];
  latestSales!: latestSalesModel[];
  widgetsActivities!: widgetsActivitiesModel[];
  widgetsTasks!: widgetsTasksModel[];
  bankcardlist!: BankModel[];

  basicAreaChart: any;
  simpleDonutChart: any;
  barchartCountries: any;
  stackcolumnChart: any;
  locationsChart: any;
  portfolioChart: any;
  heatmapChart: any;
  candidatedetail: any;
  bankcards: any;

  ngOnInit(): void {
    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Hybrix' },
      { label: 'Widgets', active: true }
    ];

    // Fetch Data
    this.otherWidgets = otherWidgets;
    this.latestSales = latestsales;
    this.widgetsActivities = widgetsActivities;

    // Chart Color Data Get Function
    this._basicAreaChart('["--tb-success"]');
    this._simpleDonutChart('["--tb-info", "--tb-danger", "--tb-warning", "--tb-success"]');
    this._barchartCountries('["--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-danger", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info"]');
    this._stackcolumnChart('["--tb-primary", "--tb-danger"]');
    this._locationsChart('["--tb-light"]');
    this._portfolioChart('["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]');
    this._heatmapChart('["--tb-success", "--tb-info", "--tb-primary", "--tb-warning", "--tb-secondary"]');
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
 * Series Data
 */
  private generateData(count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }


  /**
  * stack column Chart
  */
  private _stackcolumnChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.stackcolumnChart = {
      series: [{
        name: 'Avg Earning',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Total Customer',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'Total Orders',
        data: [11, 17, 15, 15, 21, 14]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
          '01/05/2011 GMT', '01/06/2011 GMT'
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      colors: colors
    };
  }

  /**
 * Locations Chart
 */
  private _locationsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.locationsChart = {
      map: 'us_merc_en',
      selector: "#sales-by-locations",
      regionStyle: {
        initial: {
          stroke: "#9599ad",
          strokeWidth: 0.25,
          fill: colors,
          fillOpacity: 1,
        },
      },
      zoomOnScroll: false,
      zoomButtons: false,
    }
  }

  /**
  * Portfolio Chart
  */
  private _portfolioChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.portfolioChart = {
      series: [19405, 40552, 15824, 30635],
      labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
      chart: {
        type: "donut",
        height: 210,
      },

      plotOptions: {
        pie: {
          size: 100,
          offsetX: 0,
          offsetY: 0,
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                offsetY: -5,
              },
              value: {
                show: true,
                fontSize: '20px',
                color: '#343a40',
                fontWeight: 500,
                offsetY: 5,
                formatter: function (val: any) {
                  return "$" + val
                }
              },
              total: {
                show: true,
                fontSize: '13px',
                label: 'Total value',
                color: '#9599ad',
                fontWeight: 500,
                formatter: function (w: any) {
                  return "$" + w.globals.seriesTotals.reduce(function (a: any, b: any) {
                    return a + b
                  }, 0)
                }
              }
            }
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return "$" + value;
          }
        }
      },
      stroke: {
        lineCap: "round",
        width: 2
      },
      colors: colors
    };
  }

  /**
 * Basic Area Charts
 */
  private _basicAreaChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.basicAreaChart = {
      series: [{
        name: "Total Income",
        data: series.monthDataSeries1.prices
      }],
      chart: {
        type: 'area',
        height: 325,
        offsetX: 0,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      labels: series.monthDataSeries1.dates,
      legend: {
        horizontalAlign: 'left'
      },
      colors: colors
    }
  }

  /**
 * Simple Donut Chart
 */
  private _simpleDonutChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.simpleDonutChart = {
      series: [55, 49, 18, 34],
      labels: ["Marketing", "Offline", "Direct Sales", "Others"],
      chart: {
        height: 270,
        type: 'donut',
      },
      legend: {
        position: 'bottom',
        show: false
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        }
      },
      colors: colors
    };
  }

  /**
 * Basic countries Chart
 */
  private _barchartCountries(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.barchartCountries = {
      series: [{
        data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
        name: 'Sessions',
      }],
      chart: {
        type: 'bar',
        height: 436,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          distributed: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      colors: colors,
      dataLabels: {
        enabled: true,
        offsetX: 32,
        style: {
          fontSize: '12px',
          fontWeight: 400,
          colors: ['#adb5bd']
        }
      },

      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: ['India', 'United States', 'China', 'Indonesia', 'Russia', 'Bangladesh', 'Canada', 'Brazil', 'Vietnam', 'UK'],
      },
    }
  }

  /**
* Heatmap Chart
*/
  private _heatmapChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.heatmapChart = {
      series: [{
        name: 'Jan',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Feb',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Mar',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Apr',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'May',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Jun',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Jul',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Aug',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Sep',
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      }
      ],
      chart: {
        height: 310,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false,
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [{
              from: -30,
              to: 5,
              name: 'Youtube',
              color: colors[0]
            },
            {
              from: 6,
              to: 20,
              name: 'Meta',
              color: colors[1]
            },
            {
              from: 21,
              to: 45,
              name: 'Google',
              color: colors[2]
            },
            {
              from: 46,
              to: 55,
              name: 'Medium',
              color: colors[3]
            },
            {
              from: 36,
              to: 40,
              name: 'Other',
              color: colors[4]
            }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      title: {
        style: {
          fontWeight: 500,
        },
      },
    }
  }

  // Follow Unfollow Button Toggle
  togglebtn(event: any) {
    var followbtn = event.target.closest('.custom-toggle') as any;
    if (followbtn.classList.contains("active")) {
      followbtn.classList.remove('active')
    } else {
      followbtn.classList.add('active')
    }
  }

  /**
   * Sale Location Map
   */
  options = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      )
    ],
    zoom: 13,
    center: latLng(51.505, -0.09)
  };

  /**
  * Custom Map
  */
  custom = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
    ],
    zoom: 13,
    center: latLng(51.5, -0.09)
  };

}
