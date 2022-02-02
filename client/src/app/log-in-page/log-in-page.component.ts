import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
  account={'userID':0}
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(''),
    pswd:new FormControl('')
    
  })
  showPswd:String='password';
  constructor(private accountService:AccountService) {
   }

  ngOnInit(): void {
 
  }
  onShowPswd():void{
    if(this.showPswd=='password'){
      this.showPswd='text';
    }
    else{
      this.showPswd='password';
    }
    console.log(this.showPswd);
  }
  onConnect():void{
    this.accountService.connect('123','456')
    .subscribe((data: Connect) => this.account = {
        userID: data.ID
    });
  }

  onNewAccnt():void{
    console.log('clic sur le bouton new account')
  }

  onFrgtPswd():void{
    console.log('clic sur le bouton forgot password')
  }
}
