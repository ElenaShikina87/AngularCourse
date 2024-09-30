import { FormControl } from "@angular/forms";

export interface INewAdModel{
    Name: string;
    Description: string;
    Images: any[];
    Cost: number;
    Email: string;
    Phone: string;
    Location:string;
    CategoryId: string;
}

export interface INewAdFormModel{
    Name: FormControl<string> ;
    Description: FormControl<string>;
    Images: FormControl<Array<any>>;
    Cost: FormControl<number>;
    Email: FormControl<string>;
    Phone: FormControl<string>;
    Location: FormControl<string>;
    CategoryId: FormControl<string>;
}