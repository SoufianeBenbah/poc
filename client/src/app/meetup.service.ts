import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  getMeetUpsUrl="";
  getMeetUpsLightUrl="";
  constructor(private http: HttpClient) {}
  getMeetUps(){
    return this.http.get<any>(this.getMeetUpsUrl)
  }

  getMeetUpsLight(){
    return this.http.get<any>(this.getMeetUpsLightUrl)
  }

  getMeetUpById(id:any){
    return this.http.get<any>(this.getMeetUpsUrl,{params:{id}})
  }
}
