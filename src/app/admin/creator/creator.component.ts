import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Service/admin.service';
import { AuthenticateService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor(private admin:AdminService,private auth:AuthenticateService) { }

  ngOnInit() {
  }
   
  onSubmit(value:NgForm){
    this.admin.module(value).subscribe(res=>{console.log(res),console.log(this.auth.currentUser())})

  }


}
