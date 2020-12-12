import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favlinks = ['www.google.com','www.yahoo.com','www.aol.com'];
  constructor() { }

  ngOnInit() {
  }

}
