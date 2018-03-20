

export interface IVersion {
  major: IVersion;
  minor: string;
}

export interface IProperty {
  major: IVersion;
  minor: string;
}



export interface IController {
  version: IVersion;
  displayName: string;

  //standart properties
  systemTag: string;
  to: string;
  fromPort: string;
  toPort: string;
  linkColor?: string;

}

export interface IProcessData {
  version: IVersion;
  type: string;
  controller: IController;

  //standart properties
  from: string;
  to: string;
  fromPort: string;
  toPort: string;
  linkColor?: string;

}

