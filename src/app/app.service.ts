import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

declare const Pusher: any;

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

@Injectable()
export class PusherService {
  public pusher: any;
  public notificationChannel: any;

  constructor () {
    Pusher.logToConsole = true;

    this.pusher = new Pusher(environment.pusher.key, {
      authEndpoint: 'http://localhost:4201/',
      cluster: 'us2',
      encrypted: true
    });

    this.notificationChannel = this.pusher.subscribe('private-notification-channel');
  }
}