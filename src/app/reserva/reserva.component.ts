import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../services/habitacion.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContratoService } from '../services/contrato.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {


  habitacion:any;
  habitaciones:any[];
  formDisponible:any=[];
  formReservar:any=[];
  total;
  ingreso;
  salida;
  dias;
  monto;
  id;
  confirmar;
  dni;
  nombre;
  apellido;
  fechaingreso;
  fechasalida;

   constructor(private habitacionService : HabitacionService,
    private activatedRoute: ActivatedRoute, router : Router,
    private contratoService:ContratoService,
    public formBuilder:FormBuilder) { 

      var id : number = parseInt( this.activatedRoute.snapshot.paramMap.get("id")); 

      
      this.salida = new Date (this.activatedRoute.snapshot.params.fecha_salida);
      this.ingreso = new Date (this.activatedRoute.snapshot.params.fecha_ingreso);
      this.total = this.salida - this.ingreso;
      if (this.total > 0) {
      this.dias = Math.floor(this.total / (1000 * 60 * 60 * 24));
    } else {

    }
    this.habitacion = {
      'tipo': ''
      }

    if( id > 0){
        if ( this.dias > 0 ) {
        this.habitacionService.show(id)
        .subscribe((res)=> {
          this.habitacion.id = res ["object"] ["id"];
          this.habitacion.tipo = res["object"]["tipo"]; 
          this.habitacion.precio = res["object"] ["precio"];
          this.habitacion.estado = res ["object"] ["estado"];
          this.monto = this.habitacion.precio * this.dias;
          this.confirmar = this.monto / 2; 
        }, (err)=>{
        })  
      }else{
        
      }
    } else {

    }
      this.formDisponible = this.formBuilder.group({
        'fecha_ingreso' : '',
        'fecha_salida' : ''
      }); 

     

      this.formReservar = this.formBuilder.group({
        'habitacion' : '',
        'dni': '',
        'fecha_ingreso': this.activatedRoute.snapshot.params.fecha_ingreso,
        'fecha_salida': this.activatedRoute.snapshot.params.fecha_salida,
        'primer_nombre' : '', 
        'segundo_nombre' : '',
        'correo': '',
        'numero_celular': '',
        'monto_total': '',

          
      })
      
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

    } else {
      alert("La fecha de Salida debe de ser mayor a la fecha de Ingreso");
    }
  }

  onPost() {
    if (this.habitacion.estado == "Disponible") {
    this.dni = this.formReservar.value.dni;
    this.nombre = this.formReservar.value.primer_nombre;
    this.apellido = this.formReservar.value.segundo_nombre;
    this.fechaingreso = this.formReservar.value.fecha_ingreso;
    this.fechasalida = this.formReservar.value.fecha_salida;
     this.contratoService.nuevocontrato(
     this.formReservar.value.dni,
     this.formReservar.value.fecha_ingreso,
     this.formReservar.value.fecha_salida,
     this.formReservar.value.primer_nombre,
     this.formReservar.value.segundo_nombre,
     this.formReservar.value.correo,
     this.formReservar.value.numero_celular,
     this.formReservar.value.monto_total,
     this.formReservar.value.habitacion,)
     .subscribe((res)=>{
      alert("Reserva registrada");
    }, (err)=>{
      alert("Fechas o Datos Incorrectos")
    })
  }else {
    alert("Habitacion no disponible")
  }
}

  ngOnInit(): void {
  }

}
