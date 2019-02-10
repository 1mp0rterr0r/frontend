import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NgoVerificationService {

  constructor(private http:HttpClient,private auth:AuthenticateService) { }

  sendNgoData(value){
    let type= this.auth.currentUser().module
    return this.http.post("https://qmk21872.pythonanywhere.com/"+type+"/verify",value)
  }

  


}
