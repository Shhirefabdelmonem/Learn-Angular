import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderComponent } from './components/order/order.component';
import { not } from 'rxjs/internal/util/not';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'order',component: OrderComponent},
    {path:'products',component:ProductsComponent,canActivate: [authGuard]},
    {path:'details/:id',component:DetailsComponent},
    {path: 'about-us',component: AboutUsComponent, 
        children: [
            // {path:'',component: VisionComponent},
            {path: '', redirectTo: 'vision', pathMatch: 'full'},
            {path: 'vision', component: VisionComponent},
            {path: 'values',component:ValuesComponent}
        ]
    },
    {path:'login', component:LoginComponent},
    {path:'**', component: NotFoundComponent}

];
