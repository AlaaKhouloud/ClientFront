import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
      this.http = http;
  }

  loginUser(user: any): Observable<any>{
    const requestHeaders  = new HttpHeaders().set('Content-Type', 'text');
    requestHeaders .append("Authorization", "Basic " + btoa(user.email+":"+user.password ));
    requestHeaders .append("Content-Type", "application/x-www-form-urlencoded");
    requestHeaders.append('Access-Control-Allow-Origin','*');
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    //return this.http.post("http://localhost:5454/login",user, {headers: headers});
    const req = new HttpRequest('POST', "http://localhost:5454/login" ,null, {
      reportProgress: true,
      headers:requestHeaders,
      responseType: 'json',
      params: new HttpParams().set('email', user.email.toString()).set('password', user.password.toString())
    });
    return  this.http.request<any>(req);
  }
 
}
