import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'arrayLength',
})
export class ArrayLengthPipe implements PipeTransform {
	// transform(value: any, args?: any): any {
	//   return null;
	// }
	transform(value: any[], args?: any): number {
		return value.length;
	}
}
