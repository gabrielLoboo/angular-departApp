import { Component} from '@angular/core';
import { Funcionario } from '../models/placeholder.model';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  funcionario: Funcionario = new Funcionario();

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  editFuncionario(): void {
    
    this.crudService.editFuncionario(this.funcionario).subscribe(
      (response) => {
        console.log("Funcionário editado com sucesso!", response);
      },
      (error: any) => {
        console.error("ERROR: ", error);
      }
    );
  }
}
