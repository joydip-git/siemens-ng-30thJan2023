import { Observable } from "rxjs";
import { ApiResponse } from "../../models/api-response.model";
import { Product } from "../../models/product.model";

export interface IProductService {
    getAll(): Observable<ApiResponse<Product[]>>;
    get(): Observable<ApiResponse<Product>>;
    add(data: Product): Observable<ApiResponse<Product[]>>;
    add(data: Product): Observable<ApiResponse<Product[]>>;
    delet(id: number): Observable<ApiResponse<Product[]>>;
}