import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //test user avant connexion au front a delete plus tard
  /*
  user:object = new Object({"fName":"Thomas","lName":"Boston","birth":"1999-02-01","email":"thomas.boston972@gmail.com","hPswd":"1234"});
  fName:String;
  lName:String;
  birth:String;
  email:String;
  hpswd:String;

*/
  constructor() { 
    //var currentUser=this.loadUser();
    //this.fName=currentUser.value.fName
  }
   

  ngOnInit(): void {
  }
  /*
  loadUser():Object{
    //return this.user
  }
  */
}
