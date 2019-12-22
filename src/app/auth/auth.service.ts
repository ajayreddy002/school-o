import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    constructor(private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userData')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    isLoggedIn = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    public login(data: any) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userData')));
        // localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['/app/homework']);
    }
    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }
    logout(): void {
        localStorage.clear();
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }
}