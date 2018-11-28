import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'stringEmoji',
})
export class StringEmojiPipe implements PipeTransform {
	transform(value: string, args?: any): any {
		if (value === 'happy') {
			return '🙂';
		} else if (value === 'sad') {
			return '😭';
		}
		return '🤑';
	}
}
