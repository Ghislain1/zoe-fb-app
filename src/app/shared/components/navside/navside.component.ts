import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../models/app-user';

@Component({
    selector: 'app-navside',
    templateUrl: './navside.component.html',
    styleUrls: [ './navside.component.css' ]
})
export class NavsideComponent implements OnInit {
    navRoutes: Object[] = [
        { name: 'Home', path: 'home', mobile: false, icon: 'home' },
        { name: 'Package', path: 'package', mobile: false, icon: 'packageGhislainIcon' }
        // { name: 'Termine', path: 'events', mobile: true, icon: 'event' },
        // { name: 'Mails', path: 'mails', mobile: true, icon: 'mail' },
        // { name: 'Abosystem', path: 'subscriptions', mobile: false, icon: 'group' },
        // { name: 'Einstellungen', path: 'settings', mobile: true, icon: 'settings' },
        //  { name: 'Abmelden', path: 'logout', mobile: false, icon: 'exit_to_app' }
    ];
    selected = 'Package';
    user: AppUser;

    constructor(private router: Router, private auth: AuthService) {
        this.user = this.auth.user;
        const ss = JSON.stringify(this.user, null, 3);
    }

    ngOnInit() {
        this.router.events.subscribe(() => {
            const url = this.router.url;
            for (let i = 0; i < this.navRoutes.length; i++) {
                if ('/' + this.navRoutes[i]['path'] === url) {
                    this.selected = this.navRoutes[i]['name'];
                }
            }
        });
    }

    navigate(e: MouseEvent, route: Object): void {
        console.log('Click:', route['name'], route['path']);
        this.selected = route['name'];
        this.router.navigateByUrl('/' + route['path']);
    }
}
