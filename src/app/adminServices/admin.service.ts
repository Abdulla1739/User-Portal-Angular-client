import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = "https://user-portal-server-l60a.onrender.com";
  
  constructor(private http: HttpClient, private router: Router) { }

  loginAPI(email: any, password: any) {
    this.http.get(`${this.serverUrl}/users/1`).subscribe((result: any) => {
      if (email === result.email && password === result.password) {
        sessionStorage.setItem("admin", JSON.stringify(result));
        alert("Login Success");
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Invalid Email/Password!!!");
      }
    });
  }

  getAdminDetailsApi() {
    return this.http.get(`${this.serverUrl}/users/1`);
  }
  editADminAPI(adminDetails:any){
    return this.http.put(`${this.serverUrl}/users/1`, adminDetails);
  }
  isLoggedin(){
   return !!sessionStorage.getItem("admin")
  }
}
