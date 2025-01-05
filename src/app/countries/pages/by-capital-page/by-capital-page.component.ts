import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{


  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = "";

  //injectamos el servicio
  constructor(private countriesServices: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }


  searchByCapital( term: string):void {
    this.isLoading = true;
    //subscrimimos al service
    this.countriesServices.searchCapital(term).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    } );
  }

}
