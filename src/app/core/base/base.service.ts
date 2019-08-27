import { BaseModel } from './base.model';
import { HttpClient } from '@angular/common/http';
export abstract class BaseService<T extends BaseModel> {

    private url;
    protected httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public create(object: T) {
        return this.httpClient.post(this.url, object);
    }

    public update(object: T) {
        return this.httpClient.patch(`${this.url}/${object.id}`, object);
    }


}
