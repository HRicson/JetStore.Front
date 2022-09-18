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

  quantidade: number = 0;
  id: string = '';
  inscricao: Subscription = new Subscription();
  produto?: Produto;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params
      .subscribe((params: any) => {
        this.id = params['id']
        this.consultarProduto(this.id);
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  consultarProduto(id: string) {
    this.produtoService.consultarProduto(id)
      .subscribe(
        (produtosResposta) => (this.produto = produtosResposta.data)
      );
  }

  adicionar() {
    this.quantidade++;
  }

  subtrair() {
    if (this.quantidade > 0)
      this.quantidade--
  }
}
