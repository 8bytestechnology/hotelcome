import { ChartOptions } from "./leaderboards.model";

// Other-1 chart
const Other1Chart: ChartOptions = {
    series: [{
        data: [5, 12, 30, 7, 25, 15]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    // colors: ["--tb-primary"],
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
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
  
// Other-2 chart
const Other2Chart: ChartOptions = {
    series: [{
        data: [22, 7, 18, 7, 17, 8]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    // colors:  ["--tb-primary"],
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
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
  
// Other-3 chart
const Other3Chart: ChartOptions = {
    series: [{
        data: [25, 32, 12, 25, 17, 25]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    // colors:  ["--tb-primary"],
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
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
  
// Other-4 chart
const Other4Chart: ChartOptions = {
    series: [{
        data: [23, 25, 12, 23, 17, 5]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    // colors:  ["--tb-primary"],
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
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
  

// Other-5 chart
const Other5Chart: ChartOptions = {
    series: [{
        data: [23, 25, 12, 23, 17, 5]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    // colors:  "--tb-primary",
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
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
  
const employeList = [
    {
        id: '4',
        name: 'Edward Diana',
        profile: 'assets/images/users/avatar-1.jpg',
        post: 'Founder',
        working_time: '12h 52m',
        accuracy: '452',
        aesthetic: '231',
        point: '5104',
        chart: Other1Chart
    },
    {
        id: '5',
        name: 'Melvin J. Oxford',
        profile: 'assets/images/users/avatar-3.jpg',
        post: 'Product Manager',
        chart: Other2Chart,
        working_time: '10h 23m',
        accuracy: '652',
        aesthetic: '345',
        point: '4163'
    },
    {
        id: '6',
        name: 'Marvin J. Veras',
        profile: 'assets/images/users/avatar-8.jpg',
        post: 'CEO',
        chart: Other3Chart,
        working_time: '4h 12m',
        accuracy: '632',
        aesthetic: '412',
        point: '2361'
    },
    {
        id: '7',
        name: 'Henry S. Carter',
        profile: 'assets/images/users/avatar-9.jpg',
        post: 'Developer',
        chart: Other4Chart,
        working_time: '21h 41m',
        accuracy: '235',
        aesthetic: '124',
        point: '2341'
    },
    {
        id: '8',
        name: 'Branded T-Shirts',
        profile: 'assets/images/users/avatar-10.jpg',
        post: 'Designer',
        chart: Other5Chart,
        working_time: '32h 52m',
        accuracy: '632',
        aesthetic: '423',
        point: '3265'
    }
]

export { employeList }