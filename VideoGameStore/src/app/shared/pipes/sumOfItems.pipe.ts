import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: "sumOfItems"
})
export class SumOfItemsPipe implements PipeTransform {
    transform(value: Product[]): number {
        return value.reduce((a, b) => a + (b.price*b.quantity), 0)

    }
}