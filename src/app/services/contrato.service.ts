import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable ({ 
    providedIn: 'root'
})
 export class ContratoService {
  api = "https://127.0.0.1:8000/";

    constructor(private http: HttpClient) {

    }
    private headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-Urlencoded',
    })

    getFormUrlEncoded(toConvert) {
        const formBody = [];
        for (const property in toConvert) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(toConvert[property]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
      }
    indexfechas (fecha_ingreso:string, fecha_salida:string) {
        return this.http.get(this.api + "api/auth/contratos/fechas", {
            params: {'fecha_ingreso': fecha_ingreso,
                        'fecha_salida': fecha_salida}
                        
        });     
    } 

    nuevocontrato(dni:string, fecha_ingreso:string, fecha_salida:string,
        primer_nombre:string, segundo_nombre:string, correo:string, numero_celular:string,
        monto_total:string, habitacion:number) {
        return this.http.post(this.api + "api/auth/contratos/nuevo", 
          this.getFormUrlEncoded({
            'dni' : dni,
            'fecha_ingreso': fecha_ingreso,
            'fecha_salida' : fecha_salida,
            'primer_nombre' : primer_nombre,
            'segundo_nombre' : segundo_nombre,
            'correo' : correo,
            'numero_celular' : numero_celular,
            'monto_total' : monto_total,
            'habitacion': habitacion
          }), {'headers': this.headers});
      }
 }