export interface RoomModel {
  id: number;
  img: string;
  roomno: number;
  accesstoken: number;
  checkin: Date;
  checkout: Date;
  occupied: boolean;
  guestid: number;
  devices:Devices[];
}
export interface Devices{
  id:number;
  name:string;
  accesstoken:string;
  isonline:boolean;
}
