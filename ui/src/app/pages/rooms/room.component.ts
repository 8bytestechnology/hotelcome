import { Component, ViewChild } from '@angular/core';
// import { CheckoutComponent } from './checkout/checkout.component'; // Import CheckoutComponent

// Data Get
import { roomList } from './data';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RoomService } from './room.service';
import { DecimalPipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { RoomModel } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [RoomService, DecimalPipe]
})
export class RoomComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  teamlists: any;
  memberForm!: UntypedFormGroup;
  submitted = false;

  // Table data
  teamdata!: Observable<RoomModel[]>;
  total: Observable<number>;

  @ViewChild('memberOverview', { static: false }) memberOverview?: NgxAsideComponent;
  @ViewChild('addmemberModal', { static: false }) addmemberModal?: ModalDirective;
  @ViewChild('removeMemberModal', { static: false }) removeMemberModal?: ModalDirective;
  // @ViewChild(CheckoutComponent, { static: false }) checkoutComponent?: CheckoutComponent;
  teammember: any;
  econtent: any;
  deleteID!: any;

  constructor(private formBuilder: UntypedFormBuilder,
    public service: RoomService) {
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
      roomno: ['', [Validators.required]],
      // designation: ['', [Validators.required]]
    });

    // Fetch Data
    setTimeout(() => {
      this.teamdata.subscribe(x => {
        this.teamlists = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)

    // Fetch Data
    this.teamlists = roomList

  }

  // handleCheckout(): void {
  //   this.checkoutComponent?.checkout();
  // }

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
    this.memberForm.controls['roomno'].setValue(econtent.name);
    this.memberForm.controls['occupied'].setValue(econtent.occupied);
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
        this.service.products = roomList.map((order: { id: any; }) => order.id === this.memberForm.get('_id')?.value ? { ...order, ...this.memberForm.value } : order);
      }

      else {


        roomList.push({
          id: this.teamlists.length + 1,
          roomno:'',
          img: 'assets/images/users/avatar-1.jpg',
          accesstoken: '',
          checkin: '',
          checkout: '0',
          occupied: '1',
          guestid: '0',
          devices:[],
        })
      }
      this.memberForm.reset();
      this.addmemberModal?.hide()
      console.log(roomList)
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
    roomList.splice(this.deleteID, 1)
    this.removeMemberModal?.hide()
  }
}
