// @Ghislain https://api.nuget.org/v3/index.json


export interface Resource {
  // tslint:disable-next-line: no-unused-expression
  id: string;
// tslint:disable-next-line: no-unused-expression
  type: string;
  comment: string;
  clientVersion: string;
}

export interface Context {
  vocab: string;
  comment: string;
}

export interface RootResource {
  version: string;
  resources: Resource[];
  // tslint:disable-next-line: no-unused-expression
  context: Context;
}


