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
	imageSourceAnimal = '';

	disabledClick(event) {
		console.log(event.target.value);
		alert(event.target.value);
		event.target.value = 'ok';
	}
	animalKey(event) {
		switch (event.value) {
			case 'Gato':
				console.log('gato');
				this.imageSourceAnimal =
					'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg';
				break;
			case 'Perro':
				console.log('perro');
				this.imageSourceAnimal =
					'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/cloned_dogs_mdorottya_123rf.png?itok=yiaSkqQA';
				break;
			default:
				console.log('fail');
				this.imageSourceAnimal = '';
				break;
		}
	}

	constructor() {}

	ngOnInit() {}
}
