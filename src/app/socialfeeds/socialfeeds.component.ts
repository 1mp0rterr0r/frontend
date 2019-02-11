import { Component, OnInit } from '@angular/core';
import { SocialfeedsService } from '../Service/socialfeeds.service';

@Component({
  selector: 'app-socialfeeds',
  templateUrl: './socialfeeds.component.html',
  styleUrls: ['./socialfeeds.component.css']
})
export class SocialfeedsComponent implements OnInit {

  constructor(private social:SocialfeedsService) { }
  feeds;
  ngOnInit() {
    this.social.getAll().subscribe(res=>{
      console.log(res)
      this.feeds=res['events']
    })
  }

}
