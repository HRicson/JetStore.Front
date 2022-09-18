import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-store-details.component.html',
  styleUrls: ['./produto-store-details.component.css']
})
export class ProdutoStoreDetailsComponent implements OnInit {

  produtoService: ProdutoService;
  quantidade: number = 0;

  id: string = '';
  inscricao: Subscription = new Subscription();
  produto?: Produto;

  constructor(private route: ActivatedRoute) {
    this.produtoService = new ProdutoService();
    // this.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.inscricao = this.route.params
      .subscribe((params: any) => {
        this.id = params['id']
        this.produto = this.produtoService.consultarProduto(this.id);
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  adicionar() {
    this.quantidade++;
  }

  subtrair() {
    if (this.quantidade > 0)
      this.quantidade--
  }
}
