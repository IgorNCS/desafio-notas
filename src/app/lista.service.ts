import { Injectable } from '@angular/core';
import { IAlunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista: IAlunos[] = [];
  constructor() { }

  adicionarAluno(aluno: IAlunos) {
    aluno.id = this.lista.length;
    this.lista.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(this.lista));

  }
  pegarTodosAlunos() {
    this.lista = JSON.parse(localStorage.getItem("alunos") || "[]");
    return this.lista
  }


  removerAluno(idRemove: number) {
     this.lista = this.lista.filter(function (i) { return i.id !== idRemove; });
     localStorage.setItem("alunos", JSON.stringify(this.lista));
  }
}
