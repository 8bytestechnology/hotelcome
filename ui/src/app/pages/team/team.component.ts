import { Component, ViewChild } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component'; // Import CheckoutComponent

// Data Get
import { teamList } from './data';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TeamService } from './team.service';
import { DecimalPipe } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { TeamModel } from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamService, DecimalPipe]
})
export class TeamComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  teamlists: any;
  memberForm!: UntypedFormGroup;
  submitted = false;

  // Table data
  teamdata!: Observable<TeamModel[]>;
  total: Observable<number>;

  @ViewChild('memberOverview', { static: false }) memberOverview?: NgxAsideComponent;
  @ViewChild('addmemberModal', { static: false }) addmemberModal?: ModalDirective;
  @ViewChild('removeMemberModal', { static: false }) removeMemberModal?: ModalDirective;
  @ViewChild(CheckoutComponent, { static: false }) checkoutComponent?: CheckoutComponent;
  teammember: any;
  econtent: any;
  deleteID!: any;

  constructor(private formBuilder: UntypedFormBuilder,
    public service: TeamService) {
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
    this.teamlists = teamList

  }

  handleCheckout(): void {
    this.checkoutComponent?.checkout();
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
        this.service.products = teamList.map((order: { id: any; }) => order.id === this.memberForm.get('_id')?.value ? { ...order, ...this.memberForm.value } : order);
      }

      else {
        const name = this.memberForm.get('name')?.value;
        const designation = this.memberForm.get('designation')?.value;

        teamList.push({
          id: this.teamlists.length + 1,
          name,
          designation,
          img: 'assets/images/users/avatar-1.jpg',
          atname: '@' + name,
          contact: '',
          email: '',
          progressrate: 0,
          project: '0',
          overdue: '0',
          task: '0'
        })
      }
      this.memberForm.reset();
      this.addmemberModal?.hide()
      console.log(teamList)
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
    teamList.splice(this.deleteID, 1)
    this.removeMemberModal?.hide()
  }
}
