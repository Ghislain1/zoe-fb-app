export interface AppConfig {
  api: Api;
  search: Search;
  ossindex: Ossindex;
  appBaseUrl: string;
  repositoryBaseUrl: string;
  appClassicLookUrl: string;
}

interface Api {
  endpoint: string;
}

interface Search {
  endpoint: string;
}

interface Ossindex {
  resource: Resource;
}

interface Resource {
  endpoint: string;
}
