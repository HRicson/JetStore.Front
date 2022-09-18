import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-store-list',
  templateUrl: './produto-store-list.component.html',
  styleUrls: ['./produto-store-list.component.css']
})
export class ProdutoStoreListComponent implements OnInit {

  produtoLojaPesquisa: string = '';
  produtoLojaList: Produto[] = [];
  produtoService: ProdutoService;

  constructor(private router: Router) {
    this.produtoService = new ProdutoService();
  }

  ngOnInit(): void {
    this.produtoLojaList = this.produtoService.consultarProdutoLoja();
    console.log(this.produtoLojaList)
  }

  pesquisaLoja(textoPesquisa: any) {
    this.produtoLojaPesquisa = textoPesquisa.value;
  }

  pesquisarProdutoLoja() {
    this.produtoLojaList = this.produtoService.produtos.filter(x => x.nome.includes(this.produtoLojaPesquisa));
  }
}
