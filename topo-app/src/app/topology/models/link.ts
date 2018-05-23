export interface Link {

    id: string;
    type: string;
  
    //standart properties
    from: string;
    to: string;
    fromPort: string;
    toPort: string;
    linkColor?: string;
  
  }