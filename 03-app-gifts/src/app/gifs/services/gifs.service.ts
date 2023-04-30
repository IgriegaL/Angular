import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'tuYipcGShTyYa0xbu2b8CZB1q13Wsudo';
  private serviceURl: string = "http://api.giphy.com/v1/gifs/search";
  public gifList: Gif[] = [];
  public tag0:string = "";

  // Constructor - HttpClient - para hacer llamadas
  constructor(
    private http: HttpClient
    ) {
      // Para que funcione debemos activar nuestro llamado
      this.loadLocalStorage();
      console.log('Gifs service Ready');
     }

  get tagHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      // Solo los diferentes los dejará pasar
      //this._tagsHistory.filter(oldTag => oldTag !== tag )
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);

    }
    // insertamos al inicio el tag
    this._tagsHistory.unshift(tag);
    //que no muedes mas de 10
    this._tagsHistory = this._tagsHistory.splice(0,10);
    // Mandamos a guardar el local Storage
    this.saveLocalstorage();
  }
  // Guardamos en el local Storage el historial
  private saveLocalstorage():void{
    localStorage.setItem("history", JSON.stringify(this._tagsHistory))
  }
  // local que contiene history, pero puede devolver nullo o string
  private loadLocalStorage():void {
    //  Si no tenemos data, no devolvemos nada
    if(!localStorage.getItem("history")) return;

    console.log(localStorage.getItem("history"));

    // JSON.parse para transformar el history que obtenemos
    this._tagsHistory = JSON.parse( localStorage.getItem("history")! );

    // Buscar si el length === 0 retorna nada
    if (this._tagsHistory.length === 0) return;
    // se llama al search a la historia en 0
    this.searchTag(this._tagsHistory[0]);

  }

  public searchTag( tag:string):void{
    if (tag === "") return;
    this.organizeHistory(tag);
      // api.giphy.com/v1/gifs/search?api_key=tuYipcGShTyYa0xbu2b8CZB1q13Wsudo&q=valorant&limit=10
      // localhost:4200/api.giphy.com/v1/gifs/search?api_key=tuYipcGShTyYa0xbu2b8CZB1q13Wsudo&q=valorant&limit=10 404 (N

    // Invocamos el params de JS y le damos nuestros parámetros:
    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", tag)
      .set("limit", "10")

    // GEt es un tipo genérico y se le puede traer la interfaz que queremos susbcribir.
    this.http.get<SearchResponse>(`${this.serviceURl}`,{params})
    .subscribe(
      resp =>  {
        this.gifList = resp.data;
        console.log({ gif: this.gifList });
      }
    );
    // fetch();
  }


}
