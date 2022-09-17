import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

@NgModule({
  declarations: [
    ProdutoDetailComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    ProdutoDetailComponent,
    ProdutoListComponent
  ]
})
export class ProdutosModule { }
