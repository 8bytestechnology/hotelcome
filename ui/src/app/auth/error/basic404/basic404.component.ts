import { Component } from '@angular/core';

@Component({
  selector: 'app-basic404',
  templateUrl: './basic404.component.html',
  styleUrls: ['./basic404.component.scss']
})
export class Basic404Component {

  
  // set the currenr year
  year: number = new Date().getFullYear();
  
}
