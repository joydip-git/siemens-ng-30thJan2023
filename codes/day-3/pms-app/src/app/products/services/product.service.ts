import { products } from "src/data/products";

export class ProductService {
    getProducts() {
        return [...products]
    }
    getProductById(id: number) {
        const found = products.find(
            (p) => {
                return p.productId === id
            }
        )
        return { ...found }
    }
}