import { Component } from '@angular/core';
import { RoomService } from './pages/rooms/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelcom';
  constructor(private rooms:RoomService){}
  
}
