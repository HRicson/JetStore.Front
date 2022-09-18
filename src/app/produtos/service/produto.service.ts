import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, take } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutoResposta } from '../model/produtoResposta';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosTempList: Produto[] = [];
  private readonly API = 'https://localhost:44362/api/Produtos';

  constructor(private httpClient: HttpClient) { }

  consultarLoja(): Observable<ProdutoResposta> {
    return this.httpClient.get<ProdutoResposta>(this.API + '/Loja').pipe(take(1));
  }

  consultarLista(): Observable<ProdutoResposta> {
    return this.httpClient.get<ProdutoResposta>(this.API).pipe(take(1));
  }

  consultarProduto(id: string): Observable<ProdutoResposta> {
    return this.httpClient.get<ProdutoResposta>(this.API + '/' + id).pipe(take(1));
  }

  cadastrar(produto: Produto): Observable<ProdutoResposta> {
    if (produto.preco)
      produto.preco = Number.parseFloat(produto.preco.toString().replace(/[^\d,]+/g, '').replace(',', '.'));
    else
      produto.preco = 0

    return this.httpClient.post<ProdutoResposta>(this.API, produto).pipe(take(1));
  }

  alterar(produto: Produto): Observable<ProdutoResposta> {
    if (produto.preco)
      produto.preco = Number.parseFloat(produto.preco.toString().replace(/[^\d,]+/g, '').replace(',', '.'));
    else
      produto.preco = 0

    return this.httpClient.put<ProdutoResposta>(this.API + '/' + produto.id, produto).pipe(take(1));
  }

  excluir(id: string): Observable<ProdutoResposta> {
    return this.httpClient.delete<ProdutoResposta>(this.API + '/' + id).pipe(take(1));
  }
}
