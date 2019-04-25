// https://api-v2v3search-0.nuget.org/query


export interface Context {
   vocab: string;
   base: string;
}

export interface Version {
  version: string;
  downloads: number;
   id: string;
}

export interface Datum {
   type: string;
  registration: string;
  id: string;
  version: string;
  description: string;
  summary: string;
  title: string;
  iconUrl: string;
  licenseUrl: string;
  projectUrl: string;
  tags: string[];
  authors: string[];
  totalDownloads: number;
  verified: boolean;
  versions: Version[];
}

export interface RootObject {
   context: Context;
  totalHits: number;
  lastReopen: Date;
  index: string;
  data: Datum[];
}



// @Ghislain:If you call (Get https://api.nuget.org/v3/index.json) this you get this structure:




