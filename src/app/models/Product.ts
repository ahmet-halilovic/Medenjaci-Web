export class Product {
  id: number;
  name: string;
  price: number;
  picture: string;
  description: string;
  manual: string;
  category: string;


  constructor(id: number, name: string, price: number, picture: string, description: string, manual: string, category: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.description = description;
    this.manual = manual;
    this.category = category;
  }
}
