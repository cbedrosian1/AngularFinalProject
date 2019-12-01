import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: "countOfList"
})
export class CountOfListPipe implements PipeTransform {
    transform(value: Product[]): number {
        return value.reduce((a, b) => a + (b.quantity), 0)

    }
}