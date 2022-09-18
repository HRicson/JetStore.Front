import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from './../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtoPesquisa: string = '';
  produtoList: Produto[] = [];

  constructor(private router: Router, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.consultarProdutos()
  }

  consultarProdutos() {
    this.produtoService.consultarLista()
      .subscribe(
        (produtosResposta) => {
          this.produtoList = produtosResposta.data;
          this.produtoService.produtosTempList = this.produtoList;
        }
      );
  }

  excluir(id: string) {
    let removido: boolean;

    this.produtoService.excluir(id)
      .subscribe(
        (produtosResposta) => {
          removido = produtosResposta.success;
          this.produtoList = this.produtoList.filter(x => x.id != id);
        }
      );
  }

  pesquisa(textoPesquisa: any) {
    this.produtoPesquisa = textoPesquisa.value;
  }

  pesquisarProduto() {
    this.produtoList = this.produtoService.produtosTempList.filter(x => x.nome.includes(this.produtoPesquisa))
  }
}
