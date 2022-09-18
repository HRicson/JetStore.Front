
import { RouterModule, Routes } from '@angular/router'

import { ProdutoComponent } from './produtos/produto/produto.component'
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component'
import { ProdutoStoreDetailsComponent } from './produtos/produto-store-details/produto-store-details.component'
import { ProdutoStoreListComponent } from './produtos/produto-store-list/produto-store-list.component'
import { ModuleWithProviders } from '@angular/core'

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/loja', pathMatch: 'full' },
  { path: 'loja', component: ProdutoStoreListComponent },
  { path: 'loja/produto-detalhes/:id', component: ProdutoStoreDetailsComponent },
  { path: 'admin/produto', component: ProdutoComponent },
  { path: 'admin/produto/:id', component: ProdutoComponent },
  { path: 'admin/produtos', component: ProdutoListComponent },
]

export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
