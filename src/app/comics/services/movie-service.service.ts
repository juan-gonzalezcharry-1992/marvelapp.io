import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private ts: string = '1';
  private apikey: string = '0f61b6dfd98818e60865b64c3b76f49d';
  private hash: string = 'f39ad2b23da529a9a7bdaf2a1ea21649';
  private url: string = 'https://gateway.marvel.com:443/v1/public/';
  private limit: string = '20'

  constructor(private http: HttpClient) { }
  /** getComics() nos pemite realizar la peticion get a la api relacionada con los comics */
  getComics() {
    const params = new HttpParams()
      .set('ts', this.ts)
      .set('apikey', this.apikey)
      .set('hash', this.hash)
      .set('limit', this.limit)
    return this.http.get<any>(`${this.url}/comics`, { params });
  }
  /**
   * getSeries() nos pemite realizar la peticion get a la api relacionada con las series
   * que se nos muestral al finalizar el loading
   */
  getSeries() {
    const params = new HttpParams()
      .set('ts', this.ts)
      .set('apikey', this.apikey)
      .set('hash', this.hash)
      .set('limit', this.limit)
    return this.http.get<any>(`${this.url}/series`, { params })
  }
  /**
   * getSeriesId(id: number) nos pemite realizar la peticion get a la api relacionada con las series ,
   * pero teniendo encuenta el id para tener una serie en específica
   * que la podremos visualizar al dar clik en la imagen
   */
  getSeriesId(id: number) {

    const params = new HttpParams()
      .set('ts', this.ts)
      .set('apikey', this.apikey)
      .set('hash', this.hash)
      .set('limit', this.limit)
    return this.http.get<any>(`${this.url}/series/${id}`, { params })
  }
}
