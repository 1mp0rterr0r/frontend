import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private router:Router,public auth:AuthenticateService) { }

  ngOnInit() {
  }

  ngo(){
    this.router.navigate(['/product/ngoform'])
  }

}
