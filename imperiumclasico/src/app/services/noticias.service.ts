import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticias } from '../interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //apiurl: string = 'http://192.168.1.5/news/';
  apiurl: string = 'https://api.comunidadwinter.com.ar/news/';

  public noticias: Noticias[] = [];

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  obtenernoticias(){
    return this.http.get<Noticias[]>(`${this.apiurl}news.php?n=impc`)
    .subscribe((resp) => {
      this.noticias = resp;
    });
  }

}
