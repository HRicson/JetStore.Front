import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { utilsBr } from 'js-brasil';

import { Produto } from '../model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtoForm!: FormGroup;
  produto: Produto = new Produto();
  imagemProduto: any;
  fromResult: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      status: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      estoque: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  salvarProduto() {

    // Atribuir valores individualmente ao objeto, utilizar o service para enviar para a api

    // COM ID - UPDATE

    // SEM ID - CREATE

    this.produto = Object.assign({}, this.produto, this.produtoForm.value);
    this.produto.imagemBase64String = this.imagemProduto.split(',')[1];
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
