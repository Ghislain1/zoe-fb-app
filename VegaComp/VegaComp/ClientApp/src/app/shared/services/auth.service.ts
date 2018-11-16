import { Injectable } from '@angular/core';
// import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profile: any;
  private roles: string[] = [];

  // Configure Auth0
  // lock = new Auth0Lock('RfRu3un13aOO73C7X2mH41qxfHRbUc33', 'vegaproject.auth0.com', {});

  constructor() {
    this.readUserFromLocalStorage();

    //this.lock.on("authenticated", (authResult) => this.onUserAuthenticated(authResult));
  }

  private onUserAuthenticated(authResult) {
    localStorage.setItem('token', authResult.accessToken);

    // this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
    //   if (error)
    //     throw error;

    //   localStorage.setItem('profile', JSON.stringify(profile));

    //   this.readUserFromLocalStorage();
    // });
  }

  private readUserFromLocalStorage() {
    // this.profile = JSON.parse(localStorage.getItem('profile'));

    // var token = localStorage.getItem('token');
    // if (token) {
    //   var jwtHelper = new JwtHelper();
    //   var decodedToken = jwtHelper.decodeToken(token);
    //   this.roles = decodedToken['https://vega.com/roles'] || [];
    // }
    this.profile = { "OK": "OK" };
  }

  public isInRole(roleName) {
    return this.roles.indexOf(roleName) > -1;
  }

  public login() {
    // Call the show method to display the widget.
    // this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'token'
    // return tokenNotExpired('token');
    return "OK";
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.profile = null;
    this.roles = [];
  }
}