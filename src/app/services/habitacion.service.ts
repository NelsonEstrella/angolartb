import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable ({ 
    providedIn: 'root'
})
 export class HabitacionService {
     api = "https://shrouded-woodland-47734.herokuapp.com/";
    constructor(private http: HttpClient) {

    }
    index () {
        return this.http.get(this.api + "api/auth/ambientes")
    }   
    show (id:number) {
        return this.http.get(this.api + "api/auth/ambientes/" + id, {})
    }
 }