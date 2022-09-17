import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { rootRouterConfig } from './app.routes';
import { ProdutosModule } from './produtos/produtos.module';
import { PrincipalComponent } from './principal/principal.component';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    ProdutosModule,
    NgxMaskModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
