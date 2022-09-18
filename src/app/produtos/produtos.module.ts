import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBrazil, } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import ptBr from '@angular/common/locales/pt';

import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoStoreDetailsComponent } from './produto-store-details/produto-store-details.component';
import { ProdutoStoreListComponent } from './produto-store-list/produto-store-list.component';
import { Routing } from '../app.routes';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoListComponent,
    ProdutoStoreDetailsComponent,
    ProdutoStoreListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    NgBrazil,
    Routing
  ],
  exports: [
    ProdutoComponent,
    ProdutoListComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" }
  ]
})
export class ProdutosModule { }
