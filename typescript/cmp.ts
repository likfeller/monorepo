export enum Domain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

export interface Intern {
  name: string;
  age: number;
  skills: string[];
}

export interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: Date;
  domain: Domain;
}

export interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}
