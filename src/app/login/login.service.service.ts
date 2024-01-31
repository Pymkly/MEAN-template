import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, Routes } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router
  ) { }
  login = (user={email : '',password : ''}, onError = (err) => {}) => {
    let url = 'http://localhost:3000/user/login'
    this.call(url, user, (data) => {
      this.router.navigate(['/client'])
    }, onError)
  }

  call = (url:string, data, onSuccess = (data) => {}, onError=(err) => {}) => {
    this.http.post(url, data).subscribe({
      next : data => {
        onSuccess(data)
      },
      error : e => {
        onError(e)
      }
    });
    
  }
}
