import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {
  SIGNUP_URL: any = "http://52.88.66.164:8080/signup";
  constructor(public http: HttpClient) {
    console.log("Hello MyProvider Provider");
  }

  signup(data) {
    return this.http.post(this.SIGNUP_URL, data).toPromise();
  }
}
