import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

    authenticate(username2:string,password2:string){

         if(username2=='admin'&&password2=='admin1234'){

             sessionStorage.setItem('username2',username2);
             return true
         }
         else{
          return false
         }
    }


    isUserLoggedIn(){

        console.log("user login zala ahe..!")
       let user= sessionStorage.getItem('username2');

       return !(user==null)

    }

    logout(){

        console.log("logout zala ahe..!")
         sessionStorage.removeItem('username2');
    }
    
    

  }
