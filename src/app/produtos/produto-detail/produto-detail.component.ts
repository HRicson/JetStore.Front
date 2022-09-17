import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      status: [''],
      nome: [''],
      estoque: [''],
      preco: [''],
      descricao: ['']
    });
  }

  salvarProduto() {
    this.produto = Object.assign({}, this.produto, this.produtoForm.value);
    this.produto.imagemBase64String = this.imagemProduto;
    console.log(this.produto)
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
