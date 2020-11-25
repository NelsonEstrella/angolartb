import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from '../services/habitacion.service';
import { ContratoService } from '../services/contrato.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {



  habitaciones:any;
  formDisponible:any=[];


  constructor(private router: Router, 
    private habitacionService:HabitacionService, 
    private contratoService:ContratoService,
    public formBuilder:FormBuilder) { 

      this.formDisponible = this.formBuilder.group({
        'fecha_ingreso' : '',
        'fecha_salida' : ''
      });

 /* this.habitacionService.index().subscribe((res)=> {
  
            this.habitaciones = res ['objects'];

          }, (err)=>{

          });
    */

  } 
  

  onSubmit() { 
    if (this.formDisponible.value.fecha_salida > this.formDisponible.value.fecha_ingreso) {
    this.contratoService.indexfechas(
      this.formDisponible.value.fecha_ingreso,
      this.formDisponible.value.fecha_salida)
      .subscribe((res)=>{
         this.habitaciones = res['objects'];
      },(err)=>{

      });
      
    }
    else {
      alert("La fecha de Salida debe de ser mayor a la fecha de Ingreso");
    }
  }
  /*reservar(habitacionId) {
    this.habitacionService.show(habitacionId).subscribe((res)=>{
      alert(res["object"]["tipo"]);
    }, (err)=>{

    });
  }*/

  ngOnInit(): void {
    
  }


}
