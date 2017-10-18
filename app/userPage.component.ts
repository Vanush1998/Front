import {Component, OnInit} from '@angular/core';
import {User} from './User';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {ActiveUserService} from './activeUser.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './userPage.component.template.html',
})
export class UserPageComponent implements OnInit {
    activeUser: User;

    constructor(private http: Http, private router: Router, private activeUserService: ActiveUserService) {
        this.activeUser = this.activeUserService.get();
        if (this.activeUserService.get() == null) {
            this.router.navigate(['/SignInPage']);
        }
    }

    editProfile(): void {

    }

    ngOnInit(): void {


    }
}
