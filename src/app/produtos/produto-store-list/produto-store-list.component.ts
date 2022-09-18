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

  constructor(private router: Router, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.consultarProdutosLoja();
  }

  consultarProdutosLoja() {
    this.produtoService.consultarLoja()
      .subscribe(
        (produtosResposta) => {
          this.produtoLojaList = produtosResposta.data;
          this.produtoService.produtosTempList = this.produtoLojaList;
        }
      );
  }

  pesquisaLoja(textoPesquisa: any) {
    this.produtoLojaPesquisa = textoPesquisa.value;
  }

  pesquisarProdutoLoja() {
    this.produtoLojaList = this.produtoService.produtosTempList.filter(x => x.nome.includes(this.produtoLojaPesquisa));
  }
}
