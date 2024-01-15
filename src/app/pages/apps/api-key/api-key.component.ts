import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { apikeyData } from './data';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApikeyService } from './apikey.service';
import { Observable } from 'rxjs';
import { ApikeyModel } from './apikey.model';

// Sweet Alert
import Swal from 'sweetalert2';
import { DecimalPipe } from '@angular/common';
import { ApiSortEvent, NgbdApikeySortableHeader } from './apikey-sortable.directive';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss'],
  providers: [ApikeyService, DecimalPipe]
})
export class ApiKeyComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apikeydata: any;
  masterSelected!: boolean;
  hoursSpentChart: any;

  // Form
  ApiForm!: UntypedFormGroup;
  submitted = false;
  apikeyField: any;
  apiname: any;
  EditedData: any;

  // Table data
  ApikeyList!: Observable<ApikeyModel[]>;
  total: Observable<number>;

  
  @ViewChildren(NgbdApikeySortableHeader) headers!: QueryList<NgbdApikeySortableHeader>;
  @ViewChild('createApiKeyModal', { static: false }) createApiKeyModal?: ModalDirective;
  @ViewChild('deleteApiKeyModal', { static: false }) deleteApiKeyModal?: ModalDirective;

  constructor(public formBuilder: UntypedFormBuilder,
    public service: ApikeyService) {
    this.ApikeyList = service.countries$;
    this.total = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'api key', active: true }

    ];

    this._hoursSpentChart('["--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary","--tb-primary", "--tb-primary"]')

    // Fetch Data
    setTimeout(() => {
      this.ApikeyList.subscribe(x => {
        this.apikeydata = Object.assign([], x);
      });

      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)
  }

  openModal() {
    this.createApiKeyModal?.show()
  }

  // Check Box Checked Value Get
  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.apikeydata.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.apikeydata.length; i++) {
      if (this.apikeydata[i].state == true) {
        result = this.apikeydata[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("remove-actions") as HTMLElement).style.display = "block" : (document.getElementById("remove-actions") as HTMLElement).style.display = "none";

  }
  isAllChecked() {
    return this.apikeydata.every((_: { state: any; }) => _.state);
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.apikeydata.length; i++) {
      if (this.apikeydata[i].state == true) {
        result = this.apikeydata[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("remove-actions") as HTMLElement).style.display = "block" : (document.getElementById("remove-actions") as HTMLElement).style.display = "none";
  }

  // Create New Api
  createApi() {
    if (this.apiname) {
      document.getElementById("api-key-error-msg")?.classList.add('d-none');
      (document.getElementById('apikey-element') as HTMLElement).style.display = 'block'

      this.apikeyField = this.generateApiID()
      document.getElementById("createApi-btn")?.classList.add('d-none')
      document.getElementById("add-btn")?.classList.remove('d-none')
    } else {
      document.getElementById("api-key-error-msg")?.classList.remove('d-none');
    }
  }

  // Add Api
  addApi() {
    const name = this.apiname
    const apiKey = this.apikeyField
    this.service.products.push({
      id: this.apikeydata.length + 1,
      name,
      createdBy: 'Michael Morris',
      apiKey,
      status: 'Active',
      createDate: '24 Sep 2022',
      expirydate: '24 Jan 2023'
    });
    let timerInterval: any;
    this.createApiKeyModal?.hide()
    Swal.fire({
      icon: 'success',
      text: 'Application inserted succefully!',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    })
  }

  // Rename Api key
  RenameModal(id: any) {
    this.createApiKeyModal?.show()
    var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modelTitle.innerHTML = 'Rename API name';
    document.getElementById('createApi-btn')?.classList.add('d-none');
    document.getElementById('edit-btn')?.classList.remove('d-none');
    (document.getElementById('apikey-element') as HTMLElement).style.display = 'block'
    this.apikeyField = this.apikeydata[id].apiKey;
    this.apiname = this.apikeydata[id].name
    this.EditedData = this.apikeydata[id]
  }

  // Edit Api
  editApi() {
    var params = {
      id: this.EditedData.id,
      name: this.apiname,
      createdby: this.EditedData.createdby,
      key: this.apikeyField,
      status: this.EditedData.status,
      color: this.EditedData.color,
      create_date: this.EditedData.create_date,
      expiry_date: this.EditedData.expiry_date
    }
    this.service.products = this.apikeydata.map((data: { id: any; }) => data.id === this.EditedData.id ? { ...data, ...params } : data)
    this.createApiKeyModal?.hide()
  }

  // generateApiID
  generateApiID() {
    var d = new Date().getTime();

    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  }

  /**
  * Delete Model Open
  */
  deleteId: any;
  confirm(id: any) {
    this.deleteId = id;
    this.deleteApiKeyModal?.show();
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      document.getElementById('a_' + id)?.remove();
    }
    this.checkedValGet.forEach((item: any) => {
      document.getElementById('a_' + item)?.remove();
      this.masterSelected = false;
    });
    this.deleteApiKeyModal?.hide();
    let timerInterval: any;
    Swal.fire({
      title: 'Deleted!',
      text: 'Your data has been deleted.',
      icon: 'success',
      confirmButtonColor: '#299cdb',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
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


  // Hours Spent Chart
  _hoursSpentChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.hoursSpentChart = {
      series: [{
        name: 'API Key',
        data: [7, 11, 15, 20, 18, 23, 20]
      }],
      chart: {
        toolbar: {
          show: false,
        },
        height: 90,
        type: 'bar',
        events: {
          click: function (chart: any, w: any, e: any) {
          }
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
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
        categories: ['Monday', 'Tuesday', 'W', 'T', 'F', 'S', 'S'],
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

    /**
 * Sort table data
 * @param param0 sort the column
 *
 */
    onSort({ column, direction }: ApiSortEvent) {
      // resetting other headers
      this.headers.forEach(header => {
        if (header.apisortable !== column) {
          header.direction = '';
        }
      });
  
      this.service.sortColumn = column;
      this.service.sortDirection = direction;
    }
  
}
