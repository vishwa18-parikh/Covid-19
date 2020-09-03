import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
selector: 'app-summary',
templateUrl: './summary.component.html',
styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
summary:{};

constructor(private service: DataService) { }

ngOnInit() {
this.service.getsummary().then(res=>{
this.summary = res.data.summary;
//console.log(this.summary)
})

}
}
