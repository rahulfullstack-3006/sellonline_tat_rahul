import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  APIURL=`${environment.apiUrl}`;
  constructor(private http:HttpClient) { }

  public login(url:any,body:any,header:any){
  var headers=header || {};
  return this.http.post(this.APIURL + url,body,{headers:headers});
  }
}
