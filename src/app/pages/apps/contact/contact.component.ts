import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from './contact.model';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ContactService } from './contact.service';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { contactData } from './data';
import { NgbdContactSortableHeader, SortEvent } from './contact-sortable.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService, DecimalPipe]
})
export class ContactComponent {

  // Table data
  contactList!: Observable<ContactModel[]>;
  total: Observable<number>;
  contacts: any;
  contactDetail: any;

  contactForm!: UntypedFormGroup;
  submitted: any;
  deleteID: any;

  @ViewChildren(NgbdContactSortableHeader) headers!: QueryList<NgbdContactSortableHeader>;
  @ViewChild('viewContactoffcanvas', { static: false }) viewContactoffcanvas?: NgxAsideComponent;
  @ViewChild('removeContactModal', { static: false }) removeContactModal?: ModalDirective;
  @ViewChild('addContactModal', { static: false }) addContactModal?: ModalDirective;


  constructor(public service: ContactService, private formBuilder: UntypedFormBuilder, private datePipe: DatePipe) {
    this.contactList = service.countries$;
    this.total = service.total$;
  }

  ngOnInit() {

    /**
    * fetches data
    */
    setTimeout(() => {
      this.contactList.subscribe(x => {
        this.contacts = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1500)

    /**
    * Form Validation
    */
    this.contactForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      label: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });

  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = (event.target as HTMLInputElement);
    let file: File = fileList.files[0];
    document.getElementById('')
    this.contactForm.patchValue({
      image_src: file.name
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      (document.getElementById('contact-img') as HTMLImageElement).src = this.imageURL;
    }
    reader.readAsDataURL(file)
  }

  /**
   * Form data get
   */
  get form() {
    return this.contactForm.controls;
  }

  // open offcanvas
  viewDetail(id: any) {
    this.contactDetail = this.contacts[id]
    this.viewContactoffcanvas?.show()
  }

  openModal() {
    this.addContactModal?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Add Contact'
    var modalbtn = document.getElementById('addNewContact') as HTMLAreaElement
    modalbtn.innerHTML = 'Add Contact'
  }

  // Edit Data
  editMemberList(id: any) {
    this.addContactModal?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Edit Contact'
    var modalbtn = document.getElementById('addNewContact') as HTMLAreaElement
    modalbtn.innerHTML = 'Save'

    var editData = this.contacts[id]

    var img_data = document.getElementById('contact-img') as HTMLImageElement;
    img_data.src = editData.img

    this.contactForm.controls['id'].setValue(editData.id);
    this.contactForm.controls['name'].setValue(editData.name);
    this.contactForm.controls['email'].setValue(editData.email);
    this.contactForm.controls['phone'].setValue(editData.phone);
    this.contactForm.controls['country'].setValue(editData.country);
    this.contactForm.controls['label'].setValue(editData.label);
    this.contactForm.controls['img'].setValue(editData.img);

  }

  // Save Contact
  saveContact() {
    if (this.contactForm.valid) {
      if (this.contactForm.get('id')?.value) {
        this.service.products = contactData.map((order: { id: any; }) => order.id === this.contactForm.get('id')?.value ? { ...order, ...this.contactForm.value } : order);
      }
      else {
        const name = this.contactForm.get('name')?.value;
        const email = this.contactForm.get('email')?.value;
        const phone = this.contactForm.get('phone')?.value;
        const country = this.contactForm.get('country')?.value;
        const label = this.contactForm.get('label')?.value;
        const img = this.contactForm.get('img')?.value;

        contactData.push({
          id: this.contacts.length + 1,
          name,
          email,
          img: "",
          phone,
          country,
          label,
          tab: ''
        })
      }
      this.contactForm.reset();
      this.addContactModal?.hide()
    
    }
    setTimeout(() => {
      this.contactForm.reset();
    }, 2000);
    this.submitted = true
    console.log(contactData)
  }

  // Delete Contact
  removeItem(id: any) {
    this.deleteID = id
    this.removeContactModal?.show()
  }

  confirmDelete() {
    contactData.splice(this.deleteID, 1)
    console.log(contactData)
    this.removeContactModal?.hide()
  }

  /**
 * Sort table data
 * @param param0 sort the column
 *
 */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  // Filter by Label
  labelFilter(label: any) {
    const ul = document.querySelectorAll('.contact-menu-list');
    ul.forEach((item: any) => {
      var el = item.querySelectorAll('a')
      el.forEach((item: any) => {
        item.classList.remove("active");
      })
    });
    this.service.tab = ''
    this.service.label = label
  }

  // Filter by Tab
  tabFilter(tab: any, event: any) {
    this.service.label = ''
    const ul = document.querySelectorAll('.contact-menu-list');
    ul.forEach((item: any) => {
      var el = item.querySelectorAll('a')
      el.forEach((item: any) => {
        item.classList.remove("active");
      })
    });
    event.target.closest('a').classList.add('active')
    this.service.tab = tab
  }


}
