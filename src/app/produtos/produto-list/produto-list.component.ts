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

  mensagemTitulo: string = '';
  mensagem: string = '';

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
    this.atualizarMensagem(false);

    try {
      this.produtoService.excluir(id)
        .subscribe((produtosResposta) => {
          this.produtoList = this.produtoList.filter(x => x.id != id);
          this.atualizarMensagem(true);
        });
    } catch (error) {
      this.atualizarMensagem(false);
    }
  }

  pesquisa(textoPesquisa: any) {
    this.produtoPesquisa = textoPesquisa.value;
  }

  pesquisarProduto() {
    this.produtoList = this.produtoService.produtosTempList.filter(x => x.nome.includes(this.produtoPesquisa))
  }

  atualizarMensagem(sucesso: boolean) {
    if (sucesso) {
      this.mensagemTitulo = 'Sucesso'
      this.mensagem = 'Produto excluído com sucesso!'
    } else {
      this.mensagemTitulo = 'Falha'
      this.mensagem = 'Falha ao excluir produto!'
    }
  }
}
