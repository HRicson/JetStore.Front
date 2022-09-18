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

  produtoService: ProdutoService;

  constructor(private router: Router) {
    this.produtoService = new ProdutoService();
  }

  ngOnInit(): void {
    this.produtoList = this.produtoService.consultarListaProduto();
  }

  excluir(id: string) {
    this.produtoService.excluir(id);
  }

  pesquisa(textoPesquisa: any) {
    this.produtoPesquisa = textoPesquisa.value;
  }

  pesquisarProduto() {
    this.produtoList = this.produtoService.produtos.filter(x => x.nome.includes(this.produtoPesquisa))
  }
}
