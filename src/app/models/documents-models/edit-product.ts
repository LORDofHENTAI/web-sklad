import { PlacesModel } from "./new-add-product";

export class EditProductModel {
    constructor(
        public token: string,
        public id: number,
        public article: string,
        public barcode: string,
        public name: string,
        public price: string,
        public imgUrl: string,
        public ukz: string,
        public places: PlacesModel[],
        public numb: number,
    ) { }
}