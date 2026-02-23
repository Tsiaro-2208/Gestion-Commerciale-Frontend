import { BaseService } from "./base.service";
import { Category } from "./category.service";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: Category;
    categoryId: string;
    image: string;
    type: ProductType;
    createdAt: Date;
    updatedAt: Date;
}

export enum ProductType {
    RAW_MATERIAL="RAW_MATERIAL",
    FINISHED_GOOD="FINISHED_GOOD",
    BOTH="BOTH"
}

export class ProductService extends BaseService<Product> {
    constructor() {
        super("/product");
    }
}