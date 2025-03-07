import { Route, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private housingService: HousingService) { }

    ngOnInit() {
      this.propertyId = +this.route.snapshot.params['id'];


      this.route.params.subscribe(
        (params:any) => {
          this.propertyId = +params['id'];
          this.housingService.getProperty(this.propertyId).subscribe(
            (data: Property) => {
              this.property = data;
            }
          );
        }
      );

      this.galleryOptions = [
        {
          width: '100%',
          height: '465px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: true
        }
      ];

      this.galleryImages = [
        {
          small: 'assets/images/internal-1.jpg',
          medium: 'assets/images/internal-1.jpg',
          big: 'assets/images/internal-1.jpg'
        },
        {
          small: 'assets/images/internal-2.jpg',
          medium: 'assets/images/internal-2.jpg',
          big: 'assets/images/internal-2.jpg'
        },
        {
          small: 'assets/images/internal-3.jpg',
          medium: 'assets/images/internal-3.jpg',
          big: 'assets/images/internal-3.jpg'
        },
        {
          small: 'assets/images/internal-4.jpg',
          medium: 'assets/images/internal-4.jpg',
          big: 'assets/images/internal-4.jpg'
        },
        {
          small: 'assets/images/internal-5.jpg',
          medium: 'assets/images/internal-5.jpg',
          big: 'assets/images/internal-5.jpg'
        }
      ];


    }
  }
