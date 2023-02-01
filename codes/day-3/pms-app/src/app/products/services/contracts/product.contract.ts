import { Observable } from "rxjs";
import { ApiResponse } from "../../models/api-response.model";

export interface IService<T, TInput> {
    getAll(): Observable<ApiResponse<T>>;
    get(): Observable<ApiResponse<T>>;
    add(data: TInput): Observable<ApiResponse<T>>;
    add(data: TInput): Observable<ApiResponse<T>>;
    delet(id: number): Observable<ApiResponse<T>>;
}