
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlashComponent } from './flash/flash.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    {path: '', component: LoginComponent, title: "login"},
    {path: 'flash', component: FlashComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];


export default routes;

