import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

 // public userSubject = new Subject<boolean>();
 url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  public getUserList(){
    return this.http.get(this.url)
  }
}

export interface Users{
  userId:number;
  id:number;
  title:any;
  body:any;
}
