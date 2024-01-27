import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento, Funcionario } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(private http: HttpClient) { }
  public getDepartamento():Observable<any> {
    return this.http.get('http://localhost:5085/api/departamento/selecionarTodos')
  }

  public getFuncionario():Observable<any>{
    return this.http.get('http://localhost:5085/api/departamento/selecionarFuncionarios')
  }

  public postDepartamento(departamento: Departamento): Observable<any> {
    return this.http.post('http://localhost:5085/api/departamento/cadastrardepartamento', departamento);
  }

  public postFuncionario(funcionario: Funcionario): Observable<any> {
    return this.http.post('http://localhost:5085/api/departamento/cadastrarfuncionario', funcionario);
  }

  public deleteDepartamento(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5085/api/departamento/${id}`);
  }

  public deleteFuncionario(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5085/api/departamento/func${id}`);
  }
}   

