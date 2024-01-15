import {
    ApexAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexTooltip
} from "ng-apexcharts";
  
export type ChartOptions = {
    series?: ApexAxisChartSeries | any;
    chart?: ApexChart;
    colors?: string[];
    stroke?: ApexStroke;
    tooltip?: ApexTooltip;
  };