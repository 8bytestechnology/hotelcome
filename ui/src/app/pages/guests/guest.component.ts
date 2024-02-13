import { Component, ViewChild } from '@angular/core';

// Data Get
import { guestList } from './data';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GuestService } from './guest.service';
import { DecimalPipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { GuestModel } from './guest.model';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
  providers: [GuestService, DecimalPipe]
})
export class GuestComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  teamlists: any;
  memberForm!: UntypedFormGroup;
  submitted = false;

  // Table data
  teamdata!: Observable<GuestModel[]>;
  total: Observable<number>;

  @ViewChild('memberOverview', { static: false }) memberOverview?: NgxAsideComponent;
  @ViewChild('addmemberModal', { static: false }) addmemberModal?: ModalDirective;
  @ViewChild('removeMemberModal', { static: false }) removeMemberModal?: ModalDirective;
  teammember: any;
  econtent: any;
  deleteID!: any;

  constructor(private formBuilder: UntypedFormBuilder,
    public service: GuestService) {
    this.teamdata = service.countries$;
    this.total = service.total$;
  }


  ngOnInit(): void {
    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Starter', active: true }
    ];

    /**
     * Form Validation
     */
    this.memberForm = this.formBuilder.group({
      orderId: "#VZ2101",
      // _id: "#1",
      _id: [''],
      name: ['', [Validators.required]],
      designation: ['', [Validators.required]]
    });

    // Fetch Data
    setTimeout(() => {
      this.teamdata.subscribe(x => {
        this.teamlists = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)

    // Fetch Data
    this.teamlists = guestList

  }

  /**
* Form data get
*/
  get form() {
    return this.memberForm.controls;
  }


  // open profile detail
  openDetail(id: any) {
    this.memberOverview?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Add Contact'
    var modalbtn = document.getElementById('addNewContact') as HTMLAreaElement
    modalbtn.innerHTML = 'Add Contact'
  }

  // Edit Member
  editData(id: any) {
    this.addmemberModal?.show()
    var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modelTitle.innerHTML = 'Edit Order';
    var updateBtn = document.getElementById('addNewMember') as HTMLAreaElement;
    updateBtn.innerHTML = "Save";
    
    var econtent = this.teamlists[id];

    var img_data = document.getElementById('member-img') as HTMLImageElement;
    img_data.src = econtent.img

    this.memberForm.controls['_id'].setValue(econtent.id);
    this.memberForm.controls['name'].setValue(econtent.name);
    this.memberForm.controls['designation'].setValue(econtent.designation);
    console.log(econtent)
  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = (event.target as HTMLInputElement);
    let file: File = fileList.files[0];
    document.getElementById('')
    this.memberForm.patchValue({
      image_src: file.name
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      (document.getElementById('member-img') as HTMLImageElement).src = this.imageURL;
    }
    reader.readAsDataURL(file)
  }

  /**
  * Save Member
  */

  saveMember() {
    if (this.memberForm.valid) {
      if (this.memberForm.get('id')?.value) {
        this.service.products = guestList.map((order: { id: any; }) => order.id === this.memberForm.get('_id')?.value ? { ...order, ...this.memberForm.value } : order);
      }

      else {
        const name = this.memberForm.get('name')?.value;
        const designation = this.memberForm.get('designation')?.value;

        //guestList.push({
        //  id: this.teamlists.length + 1,
        //  name,
        //  tag,
        //  img: 'assets/images/users/avatar-1.jpg',
        //  atname: '@' + name,
        //  contact: '',
        //  email: '',
        //  progressrate: 0,
        //  project: '0',
        //  overdue: '0',
        //  task: '0'
        //})
      }
      this.memberForm.reset();
      this.addmemberModal?.hide()
      console.log(guestList)
    }
    setTimeout(() => {
      this.memberForm.reset();
    }, 2000);
    this.submitted = true
  }

  removeData(id: any) {
    this.deleteID = id
    this.removeMemberModal?.show()
  }

  deleteRecord() {
    guestList.splice(this.deleteID, 1)
    this.removeMemberModal?.hide()
  }
}
