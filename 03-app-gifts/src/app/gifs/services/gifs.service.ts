import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'}) // el @provideIn hace que esté disponible en toda la app
export class GifsService {

  private _tagsHistory: string[] = []; // usamos privado para evitar cambios en los tags ingresados
  private apiKey: string = 'tuYipcGShTyYa0xbu2b8CZB1q13Wsudo';
  private serviceURl: string = "http://api.giphy.com/v1/gifs/search";
  // api.giphy.com/v1/gifs/search?api_key=tuYipcGShTyYa0xbu2b8CZB1q13Wsudo&q=valorant&limit=10
  // Traemos de la interfaz el tipo Gif que contendrá nuestros gif
  public gifList: Gif[] = [];

  // Constructor - HttpClient - para hacer llamadas
  constructor(
    private http: HttpClient
    ) { }

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
