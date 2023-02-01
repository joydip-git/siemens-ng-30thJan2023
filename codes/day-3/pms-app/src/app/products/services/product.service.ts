import { products } from "src/data/products";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../models/api-response.model";
import { Product } from "../models/product.model";
import { PRODUCT_URL_TOKEN } from "src/constants/app-constants";

@Injectable()
export class ProductService {
    // private url = 'http://127.0.0.1:3003/products'
    constructor(
        private http: HttpClient,
        @Inject(PRODUCT_URL_TOKEN) private url: string
    ) {

    }
    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(this.url)
        //const obs: Observable<Object> = this.http.get(this.url)
        // const ob: Observable<ApiResponse<Product[]>> =
        //     obs.pipe(
        //         map(
        //             (resp: any): ApiResponse<Product[]> => {
        //                 return <ApiResponse<Product[]>>resp
        //                 // return {
        //                 //     message: resp.message,
        //                 //     data: resp.data
        //                 // }
        //             }
        //         )
        //     )
        //return [...products]
    }
    getProductById(id: number): Observable<ApiResponse<Product>> {
        // const found = products.find(
        //     (p) => {
        //         return p.productId === id
        //     }
        // )
        // return { ...found }
        return this.http.get<ApiResponse<Product>>(`${this.url}/${id}`)
    }
}