import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { post} from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-api-data',
  templateUrl: './web-api-data.component.html',
  styleUrls: ['./web-api-data.component.css']
})
export class WebApiDataComponent implements OnInit {
 // variables
 posts;
//  _url: string = `https://dog.ceo/api/breed/affenpinscher/images`;
 _url: string =  `http://jsonplaceholder.typicode.com/photos`;
//  name;
 
 getHeroes() {
   return this.http.get(this._url);
 }
 
 ngOnInit() {
   // console.log('get heroes');
   // this.heroes = this.getHeroes();
 }
 
 constructor(private http: HttpClient) {
   this.posts = this.getHeroes(); 
   console.log('constructor'); 
 }

 // Get data function
//  onChange(deviceValue) {
//    this.name = deviceValue;
//    this._url = `https://dog.ceo/api/breed/${this.name}/images`;

//    this.heroes = this.getHeroes();
//  }
}
