import { Component, OnInit } from '@angular/core';

interface IPessoa {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  url: string = 'http://www.google.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/400/200'

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';


  nomedoCurso: string = 'Angular';

  pessoa: IPessoa = {
    nome: 'guilherme',
    idade: 22
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true
  }

  handleClickButton() {
    alert('oi')
  }

  handleKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  handleSalveValue(valor) {
    this.valorSalvo = valor;
  }

  handleMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento) {
    console.log(evento.novoValor)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
