import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reginal',
  templateUrl: './reginal.component.html',
  styleUrls: ['./reginal.component.css']
})
export class ReginalComponent implements OnInit {
  reg:Array<any>=[];

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getreg().then(res=>{
      this.reg=res.data.regional;
    })
  }

}
