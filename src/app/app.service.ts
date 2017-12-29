import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService implements HttpInterceptor {

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('x-apikey', '5a444763a7cfcd381491015b') });
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('cache-control', 'no-cache') });
    
    return next.handle(req);
  }
}
