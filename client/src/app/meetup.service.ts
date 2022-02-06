import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  MeetUpsUrl="http://localhost:8080/meetups";
  addGuestUrl="http://localhost:8080/addGuest?id=";

  constructor(private http: HttpClient) {}
  getMeetUps(){
    return this.http.get<any>(this.MeetUpsUrl)
  }

  createMeetUp(id:any,infos:any){
    var parametedUrl=this.MeetUpsUrl+'?id='+id;
    return this.http.post<any>(parametedUrl,infos);
  }

  getMeetUpById(id:any){
    return this.http.get<any>(this.MeetUpsUrl,{params:{id}})
  }

  addGuest(guestId:any,MeetUpId:any){
    var parametedUrl =this.addGuestUrl+MeetUpId;
    return this.http.put<any>(parametedUrl,guestId);
  }
}
