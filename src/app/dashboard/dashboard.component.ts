import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
	featureImage;

	showImage(featureImage) {
		this.featureImage = featureImage;
	}

	constructor() {}

	ngOnInit() {}
}
