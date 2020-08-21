import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    
    getUser() {
        return JSON.parse(localStorage.getItem('currentUser')).firstName;
    }
}