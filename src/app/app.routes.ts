import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'login',  
        title : 'login|TodoApp',
        loadComponent : () => import ('./Components/Auth/login.component'),
    
    },
    {
        path : 'register',  
        title : 'register|TodoApp',
        loadComponent : () => import ('./Components/Auth/register.component'),
    
    },
    {
        path : 'todos',  
        title : 'todos|TodoApp',
        loadComponent : () => import ('./Components/todo/todo.component'),
    },
    {
        path : '',  
        redirectTo : 'todos',
        pathMatch : 'full',
    },
    {
        path : '**',  
        redirectTo: 'todos',
        pathMatch : 'full',
    }
    
];
