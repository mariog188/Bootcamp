import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
	featureImage;
	images = [
		'https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=3640f6095bfdd67944705454459725a9',
		'https://media.giphy.com/media/yjGdFXjeQsDqJNSzE4/giphy.gif',
		'https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif',
	];

	showImage(featureImage) {
		this.featureImage = featureImage;
	}

	constructor() {}

	ngOnInit() {}
}
