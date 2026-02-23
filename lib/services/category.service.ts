import { BaseService } from "./base.service";

export interface Category{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export class CategoryService extends BaseService<Category> {
    constructor() {
        super("/category");
    }
}
