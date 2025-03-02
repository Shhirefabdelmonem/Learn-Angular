import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from "./components/order/order.component";
import { NotFoundComponent } from './components/not-found/not-found.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ProductsComponent, OrderComponent,NotFoundComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-Test';
}
