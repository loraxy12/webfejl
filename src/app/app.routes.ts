import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EkszerekComponent } from './pgs/ekszerek/ekszerek.component';
import { HomeComponent } from './pgs/home/home.component';
import { LoginComponent } from './pgs/login/login.component';
import { ProfilComponent } from './pgs/profil/profil.component';
import { RegistComponent } from './pgs/regist/regist.component';
import { AuthGuard } from './guards/auth.guard';
import { KosarComponent } from './pgs/kosar/kosar.component';


export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'ekszerek',component: EkszerekComponent},
    {path:'login',component: LoginComponent},
    {path:'regist',component: RegistComponent},
    {path:'profil',component: ProfilComponent,canActivate: [AuthGuard]},
    { path: 'kosar', component: KosarComponent, canActivate: [AuthGuard] },
    {path:'**',component: HomeComponent}

 ];
