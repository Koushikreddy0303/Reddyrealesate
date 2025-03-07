import { IPropertyBase } from 'src/app/model/ipropertybase';
// import { IProperty } from './../IProperty.Interface';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property!:IPropertyBase;
  @Input() hideIcons!: boolean;
}
