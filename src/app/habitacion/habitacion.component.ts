import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from '../services/habitacion.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {
  habitaciones:any = [];

  constructor(private router: Router, 
    private habitacionService:HabitacionService) {

          this.habitacionService.index().subscribe((res)=> {
            this.habitaciones = res ['objects'];

          }, (err)=>{

          });
  }
  reservar(habitacionId) {
    this.habitacionService.show(habitacionId).subscribe((res)=>{
      alert(res["object"]["tipo"]);
    }, (err)=>{

    });
  }

  ngOnInit(): void {
  }

}
