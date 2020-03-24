import { BASE_API_URL } from '../tokens/apiTokens';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptorService implements HttpInterceptor {
    constructor(@Inject(BASE_API_URL) private baseApiUrl: string) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = request.clone({ url: `${this.baseApiUrl}${request.url}` });
        return next.handle(apiReq);
    }
}
