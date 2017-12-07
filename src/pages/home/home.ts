import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  potos:object;

  constructor(private http: HttpClient,public navCtrl:NavController) {

  }
  ngOnInit() {
    //  this.http.get("https://angular-http-guide.firebaseio.com/courses.json")
    //     .map(data => _.values(data))
    //     .do(console.log);
    // this.http.get("http://jsonplaceholder.typicode.com/photos").subscribe(
    //   date => {
    //     this.potos=date;
    //     console.log(this.potos);
    //   }
    // );
    this.potos=[
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "http://placehold.it/600/24f355",
        "thumbnailUrl": "http://placehold.it/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "http://placehold.it/600/d32776",
        "thumbnailUrl": "http://placehold.it/150/d32776"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "http://placehold.it/600/f66b97",
        "thumbnailUrl": "http://placehold.it/150/f66b97"
      }]
  }

  AddTime(){
    this.navCtrl.push('SettingPage');
  }



}
