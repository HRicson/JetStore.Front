import { Routes } from '@angular/router'
import { ProdutoDetailComponent } from './produtos/produto-detail/produto-detail.component'
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component'

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produto-detalhes', component: ProdutoDetailComponent },
  { path: 'produtos', component: ProdutoListComponent }
]
