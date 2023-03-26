import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,NEVER, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjAwMDAwMDAiLCJlbWFpbCI6InNlbGxvbmxpbmUxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkOTZjMDhnSmZ1a3JrNGVSeWN0U245LlZRTk9zVllRRkp4NnFrMWFoU2EuV3dNemQwM0gvS2kiLCJpYXQiOjE2Nzk2NzI5NzgsImV4cCI6MTY3OTc1OTM3OH0.ubd1Me5bVm4sEsZwtxnePcAO_-xcVvEk_qW-Sg0fiUU';
    if(token){
      req=req.clone({headers:req.headers.set('Authorization', 'Bearer ' + token)})
    }
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
    // return next.handle(req).pipe(
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {

    //     }
    //     return event;
    //   }),
    //   error:(err)=>{
    //            if(err instanceof HttpErrorResponse){
    //     if(err.status === 401){
    //       return NEVER
    //     }else{
    //       return err;
    //     }
    //    }
    //   }
    //   catchError((err:any)=>{
    //    console.log("err",err);
    //    if(err instanceof HttpErrorResponse){
    //     if(err.status === 401){
    //       return NEVER
    //     }else{
    //       return err;
    //     }
    //    }
       
    //   })
    // )
  }
}
