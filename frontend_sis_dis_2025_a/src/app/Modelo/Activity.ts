export interface ProductDto {
  id?: number;
  name: string;
}

export interface ActivityDto {
    id?:number;
    activityCatalogId:number;
    activityCatalogName?: string;
    weeklyHours:number;
    semesterHours:number;
    description:string;
    product: ProductDto[];
    status:boolean;
    subcategoryId: number;
    subcategoryName?: string;

}