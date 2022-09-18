import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { utilsBr } from 'js-brasil';
import { Subscription } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtoForm!: FormGroup;
  produto: Produto = new Produto();
  produtoService: ProdutoService;
  inscricao: Subscription = new Subscription();
  id: string = '';
  imagemProduto: any;
  fromResult: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.produtoService = new ProdutoService();
  }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      status: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      estoque: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(2000)]]
    });

    this.inscricao = this.route.params
      .subscribe((params: any) => {
        this.id = params['id'];

        let produtoResult = this.produtoService.consultarProduto(this.id);
        if (produtoResult)
          this.produto = produtoResult
      });
  }

  ngAfterViewInit() {

  }

  imagemValida = () => this.produto.imagemBase64String != '';

  nomeValido = () => this.produtoForm.get('nome')?.errors ? false : true;

  precoValido = () => this.produtoForm.get('preco')?.errors ? false : true;

  estoqueValido = () => this.produtoForm.get('estoque')?.errors ? false : true;

  descricaoValido = () => this.produtoForm.get('descricao')?.errors ? false : true;

  salvarProduto() {
    if (this.produto.id)
      this.atualizarProduto()
    else
      this.cadastrarProduto()
  }

  atualizarProduto() {
    //DESENVOLVER
  }

  cadastrarProduto() {
    //DESENVOLVER
  }

  carregarImagem(files: any) {
    if (files.lengh === 0 || files[0].type.match(/image\/*/) == null)
      return;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.imagemProduto = reader.result
      this.produto.imagemBase64String = this.imagemProduto.split(',')[1];
    };
  }
}
