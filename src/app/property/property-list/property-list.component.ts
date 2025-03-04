import { ActivatedRoute } from '@angular/router';
//import { IProperty } from './../IProperty.Interface';
import { HousingService } from './../../service/housing.service';
import { Component, Input, OnInit } from '@angular/core';
import { SelectorListContext } from '@angular/compiler';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  propertyList:IPropertyBase[]=[];
  SellRent = 1;
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private housingservice:HousingService,private activatedRoute:ActivatedRoute){
  }
  ngOnInit():void{
    if(this.activatedRoute.snapshot.url.toString()){
     this.SellRent=2;
    }

    this.housingservice.getAllProperties(this.SellRent).subscribe(
      (data:IPropertyBase[]) =>
       this.propertyList = data
       );
  }
  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
