export class Produto {
  id: string = '';
  nome: string = '';
  descricao: string = '';
  estoque?: number;
  status: boolean = false
  preco?: number;
  imagemBase64String: string = '';
}
