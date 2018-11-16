import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SaveModel } from '../../shared/models/model';

@Injectable()
export class ModelService {

  private readonly modelsEndpoint = '/api/models';

  constructor(private httpClient: HttpClient) {


  }

  create(model: SaveModel): any {
    return this.httpClient.post(this.modelsEndpoint, model);
  }

  update(model: SaveModel): any {
    return this.httpClient.put(this.modelsEndpoint + '/' + model.id, model)

  }


  getModel(id: number): any {
    return this.httpClient.get(this.modelsEndpoint + '/' + id)
  }


  getModels(): any {
    return this.httpClient.get(this.modelsEndpoint);
  }


}
