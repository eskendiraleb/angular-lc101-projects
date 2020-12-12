import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My besties';
  image1 = 'https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2020/03/28104151/when-can-you-take-a-puppy-home.jpg';
  image2 = 'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg';
  image3 = 'https://www.womansworld.com/wp-content/uploads/2019/09/bunny-photos.jpg?w=1024';

  constructor() { }

  ngOnInit() {
  }

}