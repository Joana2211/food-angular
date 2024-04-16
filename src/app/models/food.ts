export class Food{
    name: String;
    price: number;
    favorite: boolean;
    origins: String[];
    cookTime: String;
    stars:number = 0;
    imgUrl:String;

    constructor(name:String, price:number, favorite:boolean, origins:String[], cookTime:String, stars:number, imgUrl:String){
        this.name = name;
        this.price = price;
        this.favorite = favorite;
        this.origins = origins;
        this.cookTime = cookTime;
        this.stars = stars;
        this.imgUrl = imgUrl;
    }
}