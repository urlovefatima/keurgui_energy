import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from '../interface/infosUser1';
import {Observable} from 'rxjs';
import {infoUser2} from '../interface/infosUser2';

@Injectable({
  providedIn: 'root'
})
export class RegisterStep1Service {
  url : string = "http://localhost:8000/api/register/";
  urlLogin: string = "http://localhost:8000/api/login/";

  constructor(private http: HttpClient ) { }

  registerStep1(infoUser: IUser):Observable<IUser> {
    return this.http.post<IUser>(`${this.url}step1/` , infoUser,{withCredentials: true});
  }

  registerStep2(user : infoUser2):Observable<any> {
    return this.http.post(`${this.url}step2/`, user,{withCredentials: true}
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.urlLogin, {email, password});
  }

}
