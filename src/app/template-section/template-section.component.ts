import { Component, Input, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong,faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

import { Product } from 'models/product';
@Component({
  selector: 'app-template-section',
  templateUrl: './template-section.component.html',
  styleUrls: ['./template-section.component.css']
})
export class TemplateSectionComponent implements OnInit {
// icon
  faHeart=faHeart
  faArrowRight =faArrowRightLong
  faArrowLeft=faArrowLeftLong

  @Input() title:string;
  @Input() des:string;
  @Input() products:Array<any>=[]

// arrProduct :Array<any> =[]

  constructor() { }
  ngOnInit(): void {


  }



}
