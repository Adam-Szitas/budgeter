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
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return next(handledReq);
    } else {
        const handledReq = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return next(handledReq);
    }
};
