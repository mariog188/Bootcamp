import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgModule } from '@angular/core';
import { MyHighlightDirective } from './my-highlight.directive';
import { ArrayLengthPipe } from './array-length.pipe';
import { StringEmojiPipe } from './string-emoji.pipe';

@NgModule({
	declarations: [
		AppComponent,
		MyComponentComponent,
		DashboardComponent,
		CardComponent,
		MyHighlightDirective,
		ArrayLengthPipe,
		StringEmojiPipe,
	],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
