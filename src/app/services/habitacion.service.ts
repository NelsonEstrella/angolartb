import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable ({ 
    providedIn: 'root'
})
 export class HabitacionService {
    api = "https://127.0.0.1:8000/";
    constructor(private http: HttpClient) {

    }
    index () {
        return this.http.get(this.api + "api/auth/habitacions")
    }   
    show (id:number) {
        return this.http.get(this.api + "api/auth/habitacions/" + id, {});
    }
    showBetweenDates(){
    }
 }