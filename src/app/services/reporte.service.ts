import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable ({ 
    providedIn: 'root'
})
 export class ReporteService {
    api = "https://127.0.0.1:8000/";
    constructor(private http: HttpClient) {

    }
    reporte () {
        return this.http.get(this.api + "api/auth/ordendetalles/reservas")
    }   
 }