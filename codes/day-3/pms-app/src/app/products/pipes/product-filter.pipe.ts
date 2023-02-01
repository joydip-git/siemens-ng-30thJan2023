import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product.model";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        const filterText = args[0]
        if (value.length > 0 && filterText !== '') {
            return value.filter(
                (p) => {
                    return p.productName
                        .toLocaleLowerCase()
                        .indexOf(filterText.toLocaleLowerCase()) !== -1
                }
            )
        } else
            return value
    }
}