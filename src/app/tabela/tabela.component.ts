import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { IAlunos } from '../alunos';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{
  alunos : IAlunos[]=[];
  calouro : IAlunos= {
    id: 0,
    nome: '',
    nota1: 0,
    nota2: 0,
    situacao:''
  };
  nome =''
  nota1 = 0;
  nota2 = 0;
  situacao='';

  constructor(
    private listaServico:ListaService
  ){}

  adicionarAluno(){
    this.situacao = this.nota1 +this.nota2 < 7 ? 'Reprovado' : 'Aprovado'
    this.calouro = {id:0,nome:this.nome,nota1:this.nota1,nota2:this.nota2,situacao:this.situacao} 
    // alert(this.calouro)
    this.listaServico.adicionarAluno(this.calouro)
  }

  removerAluno(idRemove:number){
    this.alunos = this.alunos.filter(item => item.id !== idRemove);
    this.listaServico.removerAluno(idRemove);
    this.listaServico.pegarTodosAlunos();
  }

  ngOnInit(): void {

    this.alunos=this.listaServico.pegarTodosAlunos()
    this.alunos=this.listaServico.lista

  }

}
