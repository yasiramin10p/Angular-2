import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';
import {Router} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId:module.id,
    templateUrl: 'countrydetail.html',
})

export class CountryDetailComponent implements OnInit{
    // Constructor with injected service
    constructor(
        private countryService: CountryService,
        private routeACTIVE: ActivatedRoute
        ){}
    // Local properties
    comments: any[]=[];


    details: any[]=[];
    
    neighbour: any[]=[];

     countryCode : any;
     geoNameId : any;

    loadComments(){
        // Get all comments
        

    }

    ngOnInit(){
        this.routeACTIVE.params.subscribe(params=>{
        this.countryCode=params['id'];
        this.countryService.countryDetails(this.countryCode).subscribe((res)=>{
                     this.details=res;
                     this.geoNameId = res.geonames[0].geonameId;

                     this.countryService.NeighbourDetails(this.geoNameId).subscribe((res)=>{

                     this.neighbour=res;
        
                           }); 
                           }); 

        }

                 
            // Load Countries

    }
    
    
 }
