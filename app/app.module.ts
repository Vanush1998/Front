import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SignInComponent} from './signIn.component';
import {UserPageComponent} from './userPage.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SignUpComponent} from './signUp.component';
import {HashService} from './hashService.service';
import {ActiveUserService} from './activeUser.service';
import {Md5} from 'ts-md5/dist/md5';

const appRoutes: Routes = [
    {path: '', redirectTo: 'SignInPage', pathMatch: 'full'},
    {path: 'SignInPage', component: SignInComponent},
    {path: 'UserPage', component: UserPageComponent},
    {path: 'SignUpPage', component: SignUpComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, UserPageComponent, SignInComponent, SignUpComponent],
    bootstrap: [AppComponent],
    providers: [Md5, HashService, ActiveUserService]
})
export class AppModule {
}
