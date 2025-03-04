import { IPropertyBase } from 'src/app/model/ipropertybase';
import { ActivatedRoute } from '@angular/router';
//import { IProperty } from './../property/IProperty.Interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';



@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient,private activateroute:ActivatedRoute) {}
  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map((propertiesArray:Property[]) => {
        return propertiesArray.find(p => p.Id === id) as Property;

      // Since find can return `undefined`, you can add a fallback here if you want to handle it

      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
  return this.http.get('data/properties.json').pipe(
    map(data => {
      const propertiesArray: Property[] = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp') || '[]'); // Default to empty array if null

      // Handle localStorage data (assumed to be an array or an object)
      if (localProperties && Array.isArray(localProperties)) {
        for (const prop of localProperties) {
          if (SellRent) {
            if (prop.SellRent === SellRent) {
              propertiesArray.push(prop);
            }
          }
          else{
            propertiesArray.push(prop);
          }
        }
      }

      // Handle API response data (assumed to be an array)
      if (Array.isArray(data)) {
        for (const prop of data) {
          if (SellRent) {
            if (prop.SellRent === SellRent) {
              propertiesArray.push(prop);
            }
          }else{
            propertiesArray.push(prop);
          }
        }
      }

      return propertiesArray;
    })
  );
}


    addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp alreay exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp')!)];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
