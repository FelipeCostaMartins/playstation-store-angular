import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { BannersComponent } from "./components/banners/banners.component";
import { BigCardsComponent } from "./components/big-cards/big-cards.component";
import { ProductCategoryComponent } from "./components/product-category/product-category.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavigationBarComponent, MenuBarComponent, BannersComponent, BigCardsComponent, ProductCategoryComponent]
})
export class AppComponent {
  title = 'playstation-store-angular';
}
