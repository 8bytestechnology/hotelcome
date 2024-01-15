import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent {

   // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  ngOnInit(): void {
    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Starter', active: true }
    ];
  }
}
