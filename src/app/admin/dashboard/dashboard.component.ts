import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   module;
   ngo;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.admin.getModule().subscribe(res=>{
      console.log(res)
      this.module=res['modules']
      console.log(this.module)
    })
    this.admin.pending().subscribe(res=>{
      console.log(res)
      this.ngo=res['beneficiaries']
      console.log(this.ngo)
    })
  }



}
