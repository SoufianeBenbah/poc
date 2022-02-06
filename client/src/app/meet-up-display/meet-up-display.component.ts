import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-meet-up-display',
  templateUrl: './meet-up-display.component.html',
  styleUrls: ['./meet-up-display.component.css']
})
export class MeetUpDisplayComponent implements OnInit {
matches:any;
reservedMatch:any;
currentUserId=-1;
  constructor(private meetUpService:MeetupService) { }

  ngOnInit(): void {
  }

  onRefresh():void{
    this.meetUpService.getMeetUps()
    .subscribe((data)=>{
    this.matches=data;
    console.log(data)});
  }

  onReserve(id:number):void{
    this.meetUpService.addGuest(this.currentUserId,id)
    .subscribe((data)=>{
      console.log(data)});
  }

}
