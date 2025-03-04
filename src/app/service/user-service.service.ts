import { Injectable } from '@angular/core';
import *  as alertify from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  addUser(user: any) {
    let Users: any[] = []; // Ensure Users is an array

    // Retrieve existing users from localStorage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        try {
            Users = JSON.parse(storedUsers);
            if (!Array.isArray(Users)) {
                Users = []; // If parsed value is not an array, reset it
            }
        } catch (error) {
            console.error("Error parsing users from localStorage:", error);
            Users = []; // Reset to empty array if parsing fails
        }
    }

    // Add the new user to the array
    Users.unshift(user);

    // Store the updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(Users));
}



  alertifySuccess(message:string){
    alertify.success(message);
  }
  alertifyError(message:string){
    alertify.error(message);
  }
  alertifyWarning(message:string){
    alertify.warning(message);
  }

}
