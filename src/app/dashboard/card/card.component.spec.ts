import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';
import { DebugElement } from '@angular/core';
/* tslint:disable:no-unused-variable */
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing';


describe('CardComponent', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CardComponent ],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
