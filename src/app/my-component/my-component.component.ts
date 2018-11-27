import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-component',
	templateUrl: './my-component.component.html',
	styleUrls: [ './my-component.component.css' ],
})
export class MyComponentComponent implements OnInit {
	name = 'Mario';
	count = 0;
	imageSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
	disabled = true;
	constructor() {}

	ngOnInit() {}
}
