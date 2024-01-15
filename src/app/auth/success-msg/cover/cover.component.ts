import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {

   // set the currenr year
  year: number = new Date().getFullYear();
  
}
