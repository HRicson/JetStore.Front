import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoDetailComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProdutoDetailComponent,
    ProdutoListComponent
  ]
})
export class ProdutosModule { }
