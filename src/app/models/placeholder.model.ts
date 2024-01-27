
export class Funcionario {
    public id: number = 0;
    public nome: string = '';
    public foto: string = '';
    public rg: string = '';
    public departamentoId: number = 0;
  }
  
  export class Departamento {
    public id: number = 0;
    public nome: string = '';
    public sigla: string = '';
    public funcionarios: Funcionario[] = [];
  }

