import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';


@Component({
  selector: 'app-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = "";
  //injectamos el servicio
  constructor(private countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountry.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountry.term;
  }


  searchByPais( term: string):void {
    this.isLoading = true;
    //subscrimimos al service
    this.countriesServices.searchCountry(term).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    } );
  }

}
