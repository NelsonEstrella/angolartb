import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-reservareporte',
  templateUrl: './reservareporte.component.html',
  styleUrls: ['./reservareporte.component.css']
})
export class ReservareporteComponent implements OnInit {

    reportes:any=[];

  constructor(private reporteService:ReporteService) {
        reporteService.reporte()
        .subscribe((res)=>{
            this.reportes = res["objects"];
        }, (err)=>{

        });
   }

  ngOnInit(): void {
  }

}
