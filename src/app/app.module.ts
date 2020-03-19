import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardGuard } from './products/product-guard.guard';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacePipe, StarComponent, 
    ProductDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot([
      { path:'products', component: ProductListComponent},
      { path:'products/:id', canActivate: [ProductGuardGuard], component: ProductDetailComponent},
      { path:'welcome', component: WelcomeComponent},
      { path:'', redirectTo: 'welcome', pathMatch: 'full'},
      { path:'**', redirectTo: 'welcome', pathMatch: 'full'}])
  ],
  bootstrap: [AppComponent], 
  providers: [ProductService]
})
export class AppModule { }
