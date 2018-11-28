import {
	Component,
	Input,
	OnInit,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.css' ],
})
export class CardComponent implements OnInit {
	@Input() image;
	@Output() selectImage = new EventEmitter();

	onSelectImage() {
		this.selectImage.emit(this.image);
	}

	constructor() {}

	ngOnInit() {}
}
