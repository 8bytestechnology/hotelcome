import { Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { circle, latLng, tileLayer } from 'leaflet';


// Data Get
import { chatlist, chatMessagesData, recentchat } from './data';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  recentChat: any;
  chatlist: any;
  Profile: any;
  name: any;
  revenuChart: any;
  multipleRadialChart: any;
  chatMessagesData!: any;
  submitted = false;
  isreplyMessage = false;
  emoji = '';
  formData!: UntypedFormGroup;

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView:3
  };

  @ViewChild('scrollRef') scrollRef: any;
  @ViewChild('usefulSwiper') usefulSwiper?: SwiperComponent;

  constructor(private datePipe: DatePipe, public formBuilder: UntypedFormBuilder) {
  }
  ngOnInit(): void {
    this.recentChat = chatlist
    this.chatlist = recentchat
    this.chatMessagesData = chatMessagesData

    // Chart Color Data Get Function
    this._revenuChart('["--tb-dark", "--tb-primary", "--tb-secondary"]');
    this._multipleRadialChart('["--tb-primary", "--tb-info", "--tb-success", "--tb-secondary"]');

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 300;
    this.onListScroll();
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = this.scrollRef.SimpleBar.getScrollElement().scrollHeight;
      }, 500);
    }
  }
  next(){
    this.usefulSwiper?.swiper.slideNext();
  }
  previous(){
    this.usefulSwiper?.swiper.slidePrev();
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
  * stack column Chart
  */
  private _revenuChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.revenuChart = {
      series: [{
        name: "Orders",
        type: "area",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
      },
      {
        name: "Earnings",
        type: "bar",
        data: [
          89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
          88.51, 36.57,
        ],
      },
      {
        name: "Refunds",
        type: "line",
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
      },
      ],
      chart: {
        height: 290,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "straight",
        dashArray: [0, 0, 8],
        width: [0.1, 0, 2],
      },
      fill: {
        opacity: [0.03, 0.9, 1],
      },
      markers: {
        size: [0, 0, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 15,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 10,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
          barHeight: "100%",
          borderRadius: [8],
        },
      },
      colors: colors,
      tooltip: {
        shared: true,
        y: [{
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
        {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return "$" + y.toFixed(2) + "k";
            }
            return y;
          },
        },
        {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Sales";
            }
            return y;
          },
        },
        ],
      }
    };
  }

  private _multipleRadialChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.multipleRadialChart = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w: any) {
                return 249
              }
            }
          }
        }
      },
      labels: ['Fashion', 'Electronics', 'Groceries', 'Others'],
      colors: colors,
      legend: {
        show: true,
        fontSize: '16px',
        position: 'bottom',
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
      },
    };
  }

  // open chat detail
  openDetail(id: any) {
    document.querySelector('.layout-rightside')?.classList.add('show')
    this.Profile = this.recentChat[id].img
    this.name = this.recentChat[id].name
  }

  // close chat detail
  closeDetail() {
    document.querySelector('.layout-rightside')?.classList.remove('show')
  }

  /**
  * Save the message in chat
  */
  messageSave() {
    const message = this.formData.get('message')!.value;
    if (this.isreplyMessage == true) {
      var itemReplyList: any = document.getElementById("users-chat")?.querySelector(".chat-conversation-list");
      var dateTime = this.datePipe.transform(new Date(), "h:mm a");
      var chatReplyUser = (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name") as HTMLAreaElement).innerHTML;
      var chatReplyMessage = (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0") as HTMLAreaElement).innerText;

      this.chatMessagesData.push({
        align: 'right',
        name: 'Marcus',
        replayName: chatReplyUser,
        replaymsg: chatReplyMessage,
        message,
        time: dateTime,
      });
      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
      this.isreplyMessage = false;

    }
    else {
      if (this.formData.valid && message) {
        // Message Push in Chat
        this.chatMessagesData.push({
          align: 'right',
          name: 'Marcus',
          message,
          time: this.datePipe.transform(new Date(), "h:mm a"),
        });
        this.onListScroll();
        // Set Form Data Reset
        this.formData = this.formBuilder.group({
          message: null,
        });
      }
    }
    document.querySelector('.replyCard')?.classList.remove('show');
    this.emoji = '';

    this.submitted = true;
  }

  // Contact Search
  ContactSearch() {
    var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
    input = document.getElementById("searchResultList") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".chat-panel-list");
    ul.forEach((item: any) => {
      li = item.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        // a = li[i].getElementsByTagName("p")[0];
        a = li[i].getElementsByTagName("h6")[0];
        txtValue = a?.innerText;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    })

  }

  /**
 * Sale Location Map
 */
  choropleth = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w", {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      })
    ],
    zoom: 1.1,
    center: latLng(28, 1.5)
  };
  choroplethLayers = [
    circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
  ];

  // Delete Message
  DeleteMsg(id: any) {
    this.chatMessagesData.splice(id, 1)
  }
}
