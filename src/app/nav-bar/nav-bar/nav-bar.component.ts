import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  username!:string;

loggedin(){
  this.username=localStorage.getItem('token')!;
  this.username=this.username?.slice(0,this.username.indexOf(' '));
  return this.username;
}
logout(){
  localStorage.removeItem('token');
}
}
