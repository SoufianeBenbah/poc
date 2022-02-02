import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  connectUrl="http://localhost:3000/login";

  constructor(private http: HttpClient) { }
  
  connect(email:any,password:any){
    var response=this.http.get<Connect>(this.connectUrl,{observe:'body', responseType:'json'});
    console.log(response);
    return response
    
  }
}
