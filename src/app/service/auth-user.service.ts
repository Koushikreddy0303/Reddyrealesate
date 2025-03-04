import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }
  authUser(user:any){
    let userarray=[];
    if(localStorage.getItem('users')){

      userarray=JSON.parse(localStorage.getItem('users')!);


    }
    return userarray.find((item: any)=>item.email===user.email && item.password===user.password);

  }
}
