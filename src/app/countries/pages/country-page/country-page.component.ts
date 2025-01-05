import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country, Translation } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  standalone: false,

  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
bre: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ) { }


  get translations(){
    return Object.values(this.country!.translations);
  }

  ngOnInit(): void {
    this.activatedRoute.params.
      pipe(
        switchMap( ({ id })=> this.countriesService.searchCountryByAlphaCode( id ))
      ).
      subscribe( country => {
        if (!country){
          return this.router.navigateByUrl('');
        }
        return this.country = country;

      });
  }


}
