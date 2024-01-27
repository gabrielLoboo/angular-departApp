import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Departamento, Funcionario } from '../models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  departamentos: Departamento[] = [];
  novoDepartamento: Departamento = new Departamento();
  novoFuncionario: Funcionario = new Funcionario();
  erro: any;
  f: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getter();
  }

  getter(): void {
    this.crudService.getDepartamento().subscribe(
      (data: Departamento[]) => {
        this.departamentos = data;
      },
      (error: any) => {
        this.erro = error;
        console.log("ERROR: ", error);
      }
    );
  }

  postDepartamento(): void {
    this.crudService.postDepartamento(this.novoDepartamento).subscribe(
      (response) => {
        console.log("Novo departamento criado com sucesso!", response);
        this.getter();
        
        this.novoDepartamento = new Departamento();
      },
      (error: any) => {
        console.error("ERROR: ", error);
      }
    );
  }

  postFuncionario(): void {
    this.crudService.postFuncionario(this.novoFuncionario).subscribe(
      (response) => {
        console.log("Novo funcionário criado com sucesso!", response);
        this.getter();
        
        this.novoFuncionario = new Funcionario();
      },
      (error: any) => {
        console.error("ERROR: ", error);
      }
    );
  }

  deleteDepartamento(id: number): void {
    const confirmacao = confirm("Tem certeza que deseja excluir este departamento?");
    if (confirmacao) {
      this.crudService.deleteDepartamento(id).subscribe(
        () => {
          console.log("Departamento excluído com sucesso!");
          this.getter(); 
        },
        (error) => {
          console.error("ERROR: ", error);
        }
      );
    }
  }

  deleteFuncionario(id: number): void {
    const confirmacao = confirm("Tem certeza que deseja excluir este funcionário?");
    if (confirmacao) {
      this.crudService.deleteFuncionario(id).subscribe(
        () => {
          console.log("Funcionário excluído com sucesso!");
          this.getter(); // Atualize a lista de departamentos após a exclusão bem-sucedida
        },
        (error) => {
          console.error("Erro ao excluir funcionário:", error);
        }
      );
    }
  }
}