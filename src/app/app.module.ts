import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { rootRouterConfig } from './app.routes';
import { ProdutosModule } from './produtos/produtos.module';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    ProdutosModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
