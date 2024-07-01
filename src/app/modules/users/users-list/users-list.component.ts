import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userModel } from '../user-model';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  allUsers:userModel[]=[]
  serchKey:string = ""
  p: number = 1;

constructor(private api:ApiService){}
ngOnInit(): void {
  this.getAllUser()
}
getAllUser(){
  this.api.getAllUsersAPI().subscribe((result:any)=>{
    this.allUsers = result.filter((user:any)=>user.id!="1")
    console.log(this.allUsers);
    
  })
}
removeUser(userId:any){
  this.api.removeUserAPI(userId).subscribe((result:any)=>{
    this.getAllUser()
  })
}
sortById(){
  this.allUsers.sort((user1:any,user2:any)=>user1.id.localeCompare(user2.id))
}
sortByName(){
  this.allUsers.sort((user1:any,user2:any)=>user1.name.localeCompare(user2.name))

}
generatePDF(){
  let pdf = new jspdf()
  let head = [['ID','NAME','EMAIL','STATUS']]
  let body:any = []
  this.allUsers.forEach((item)=>{
    body.push([item.id,item.name,item.email,item.status=="1"?"Active":"InActive"])
  })
  pdf.setFontSize(16)
  pdf.text("All Users List",10,10)
  autoTable(pdf,{
    head,body
  })
  pdf.output('dataurlnewwindow')
  pdf.save("all-user-list.pdf")
}
}
