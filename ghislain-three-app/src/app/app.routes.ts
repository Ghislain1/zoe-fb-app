import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path: '',
        loadChildren: './home/index#HomeModule'
    },

    {
        path: 'user',
        loadChildren: './user/index#UserModule',
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'album',
        loadChildren: './product/index#AlbumModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }
];