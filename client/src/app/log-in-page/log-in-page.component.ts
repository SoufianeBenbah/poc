import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(''),
    pswd:new FormControl(''),
    
  })
  showPswd:String='password';
  constructor() {
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
    console.log('clic sur le bouton connexion \n pour le compte : '+ JSON.stringify(this.loginForm.value))
    
  }

  onNewAccnt():void{
    console.log('clic sur le bouton new account')
  }

  onFrgtPswd():void{
    console.log('clic sur le bouton forgot password')
  }
}
