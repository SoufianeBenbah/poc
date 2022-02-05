import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  connectUrl="http://localhost:8080/login";

  constructor(private http: HttpClient) { }
  
  connect(email:any,password:any){
    var parameted_url=this.connectUrl+'?email='+email+'&password='+password;
    
    return this.http.get(<any>(parameted_url));
  }
}
