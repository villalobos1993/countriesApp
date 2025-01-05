import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  //injectamos el servicio
  constructor(private countriesServices: CountriesService){}
  ngOnInit(): void {
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
  }


  searchByRegion( term: Region):void {
    this.selectedRegion = term;
    //subscrimimos al service
    this.countriesServices.searchRegion(term).subscribe( countries => {
      this.countries = countries;
    } );
  }

}
