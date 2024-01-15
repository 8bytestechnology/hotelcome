import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    
    // Follow Unfollow Button Toggle
    togglebtn(event: any) {
      var followbtn = event.target.closest('.custom-toggle') as any;
      if (followbtn.classList.contains("active")) {
        followbtn.classList.remove('active')
      } else {
        followbtn.classList.add('active')
      }
    }
}
