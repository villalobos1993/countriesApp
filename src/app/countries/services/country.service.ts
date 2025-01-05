
import { catchError, map, Observable, of, tap, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country';
import { Region } from './../interfaces/region.type';


@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion:  { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) {
    this.loadToLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem( 'cacheStore', JSON.stringify(this.cacheStore) );
  }

  private loadToLocalStorage(){
    if( !localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).
                pipe(
                  catchError( () => of([]) ),
                  //delay(2000)
                );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.httpClient
                .get<Country[]>(url)
                .pipe(
                  map( countries => countries.length > 0 ? countries[0]: null),
                  catchError(() => of(null))
                );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
               .pipe(
                  tap( countries => this.cacheStore.byCapital = { term: term, countries: countries } ),
                  tap( () => this.saveToLocalStorage() )
               );
  }

  searchRegion(term: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url)
               .pipe(
                 tap( countries => this.cacheStore.byRegion = { region: term, countries: countries } ),
                 tap( () => this.saveToLocalStorage() )

               );


  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
               .pipe(
                 tap( countries => this.cacheStore.byCountry = { term: term, countries: countries } ),
                 tap( () => this.saveToLocalStorage() )
               );
  }

}
