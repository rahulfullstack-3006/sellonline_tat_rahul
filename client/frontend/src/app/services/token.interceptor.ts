import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("request",request);
    
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjMzMzMzMzMiLCJlbWFpbCI6InNlbGxvbmxpbmUxMjM0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJVbm5zRk4vY0tMUk9pZ3FaYWo4VHV6emFET2lUcjFiT3puWFU4M2l3NzNPbjhwd2JnL2dtIiwiaWF0IjoxNjc5ODM4NjkwLCJleHAiOjE2Nzk5MjUwOTB9.T-36llG9HdJ05fqGJ_IP75jzwwly5w6KptWMZfHy-g4';
    if(token){
      request=request.clone({headers:request.headers.set('Authorization', 'Bearer ' + token)})//you cannot change the original request that's why we clone the request
    }
    console.log("token after set on headers",token,request);
    return next.handle(request).pipe(
      tap({
        next: (event:HttpEvent<any>) => {          
          console.log("event after server sends response",event);
          
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error:HttpErrorResponse) => {
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));

  }
}
