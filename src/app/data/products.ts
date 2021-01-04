import {Product} from '../models/Product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Livadski med',
    price: 999,
    picture: 'https://lh3.googleusercontent.com/proxy/JyTEdxdVsjhkugG7TkJLcVI6iLmvORAcvYlxKs0hpUu7ASxpLtNf6WxO2CogbyfnS7wU6_AITNSTv7eolTnraLLaU0pqhRILWk2fQt6ul6c9ISAxGfRwTzyuQj4r',
    description: 'Domaci livadski med.',
    manual: 'Koristiti svako jutro uz caj.',
    category: 'Med'
  },
  {
    id: 2,
    name: 'Bagremov med',
    price: 1199,
    picture: 'https://lh3.googleusercontent.com/proxy/61G2Vp6VDDnVJFqAQeqcujRkgxn1jd8IIYl0dSOb8TNGBQpRPG66AxlUHPxuh3gkELgye_A4dhixRBHkOKUyatJfC-ET5Ma8_ZbWEznd7fmdoSmV-M4EXUFaHdPZ',
    description: 'Bagremov med je monofloralni med koji potiče od nektara cveta bagrema.',
    manual: 'Normalne dnevne količine meda su:\n' +
      'za odrasle: 60-100g, podeljene u 3-4 doze u toku dana;\n' +
      'za decu: 30-50g, 3-4 puta u toku dana.\n' +
      '\n' +
      'Med i preparati sa medom koriste se tako što se što duže drže u ustima dok se ne rastope. Ili mogu da se rastope u mlakoj vodi i potom popiju.\n' +
      '\n' +
      'Potrebno je da se posebno istakne da je najgori način uzimanja meda, kao i preparata sa medom, kada se med proguta i zatim popije hladna voda.',
    category: 'Med'
  }
];
