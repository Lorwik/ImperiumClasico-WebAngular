import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticias } from '../interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //url: string = 'http://192.168.1.5/news/';
  url: string = 'https://api.comunidadwinter.com.ar/news/';

  public noticias: Noticias[] = [];

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  obtenernoticias(){
    return this.http.get<Noticias[]>(`${this.url}news.php?n=impc`)
    .subscribe((resp) => {
      this.noticias = resp;
    });
  }

}
