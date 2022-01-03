import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signUpForm:FormGroup =new FormGroup({
    fName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    lName:new FormControl(''),
    birth:new FormControl(''),
    email:new FormControl(''),
    pswd:new FormControl(''),
    cnfPswd:new FormControl(''),
    
  })
  showPswd:String='password';

  constructor() { }

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
  
  onSignUp():void{
    var testFilled:Boolean=true;
    var testPswd:Boolean=true;
    var testAge:Boolean=true;
    //testAge=this.checkAge();
    //testFilled=this.checkFields();
    //testPswd=this.checkPswd();
    if(testFilled && testAge && testPswd){
      alert('formulaire rempli correctement \n envoi a implementer \n informations communiquees : '+
      JSON.stringify(this.signUpForm.value));
      console.log('formulaire rempli correctement \n envoi a implementer \n informations communiquees : '+
      JSON.stringify(this.signUpForm.value));
    }
    else if(!testFilled){
      alert('tous les champs doivent êtres remplies');
    }
    else if(!testPswd){
      alert('Le mot de passe et le mot de passe confirme doivent etres identieus');
    }
    else if(!testAge)
    {
      alert("vous n'avez pas 18 ans !");
    }  
    else{
      alert("quelque chose s'est mal passe")
    }
  }

  //verif si les mdp sont les memes
  checkPswd():boolean{
    return this.signUpForm.value.pswd==this.signUpForm.value.cnfPswd;
  }

  //verif si tous les champs sont remplis
  checkFields():boolean{
    for(var i=0;Object.values(this.signUpForm.value)[i]!=undefined;i++){
      if(Object.values(this.signUpForm.value)[i]==""){
        return false;
      }
    }
    return true;
  }

  //verif si le mec est majeur
  checkAge():boolean{
    var today=new Date();
    var birth=new Date(this.signUpForm.value.birth);
    var dif=new Date(today.getTime()-birth.getTime());
    var age=dif.getUTCFullYear()-1970;
    console.log(('age :' +age));
    return age>=18;

  }
}
