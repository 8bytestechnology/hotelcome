import { Component } from '@angular/core';

@Component({
  selector: 'app-cover404',
  templateUrl: './cover404.component.html',
  styleUrls: ['./cover404.component.scss']
})
export class Cover404Component {

  
  // set the currenr year
  year: number = new Date().getFullYear();
  
}
