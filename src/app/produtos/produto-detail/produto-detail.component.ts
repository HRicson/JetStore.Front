import { Component, Input, OnInit, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produto } from '../model/produto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  produtoForm!: FormGroup;
  produto: Produto = new Produto();
  imagemProduto: any;
  fromResult: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      status: [''],
      nome: ['', Validators.required],
      estoque: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  salvarProduto() {
    this.produto = Object.assign({}, this.produto, this.produtoForm.value);
    this.fromResult = JSON.stringify(this.produtoForm.value) // TESTE
    this.produto.imagemBase64String = this.imagemProduto;
  }

  carregarImagem(files: any) {
    if (files.lengh === 0 || files[0].type.match(/image\/*/) == null)
      return;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.imagemProduto = reader.result
      this.produto.imagemBase64String = this.imagemProduto;
    };
  }
}
