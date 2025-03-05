import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtService } from '../services/jwt.service';
import { Observable } from 'rxjs';

export const JwtInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const jwtService = inject(JwtService);
    const token = jwtService.getToken();

    if (token) {
        const handledReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json, text/plain, */*',
                Accept: 'application/json, text/plain, */*',
            },
        });
        return next(handledReq);
    }

    return next(req);
};
