import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  addUserAPI(user:userModel){
    return this.http.post(`${this.serverURL}/users`,user)
  }
  getAllUsersAPI(){
    return this.http.get(`${this.serverURL}/users`)
  }
  getsingleUserAPI(userId:any){
    return this.http.get(`${this.serverURL}/users/${userId}`)
  }

  editUserAPI(user:userModel){
    return this.http.put(`${this.serverURL}/users/${user.id}`,user)
  }

  removeUserAPI(userId:any){
    return this.http.delete(`${this.serverURL}/users/${userId}`)
  }
}
