import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    templateUrl: 'country.html',
})

export class CountryListComponent implements OnInit{
    // Constructor with injected service
    constructor(
        private countryService: CountryService
        ,private _router:Router
        ){}
    // Local properties
    comments: any[]=[];


    details: any[]=[];


    loadComments(){
        // Get all comments
         this.countryService.getCountryList()
                           .subscribe((res)=>{
                               this.comments=res;
                           });
    }

    ngOnInit(){
            // Load Countries
            this.loadComments()
    }   
 }
