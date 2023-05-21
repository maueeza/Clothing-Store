import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //categories for home page
	{
		id: uuid(),
		title: "The Ethnic Image",
		author: "Maueeza",
		price: 599,
		categoryName: "Categories",
		imgSrc: "https://g3fashion.com/blog/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
		type: "ETHNIC WEAR"
	},
	{
		id: uuid(),
		title: "The Western Image",
		author: "Maueeza",
		price: 699,
		categoryName: "Categories",
		imgSrc: "https://images.meesho.com/images/products/46055179/6appp_512.webp",
		type: "WESTERN WEAR"
	},
	{
		id: uuid(),
		title: "The Sleepwear Image",
		author: "Maueeza",
		price: 449,
		categoryName: "Categories",
		imgSrc: "https://m.media-amazon.com/images/I/71dVOLsuJeS._UY550_.jpg",
		type: "SLEEP WEAR"
	},
	{
		id: uuid(),
		title: "The Casual-wear Image",
		author: "Maueeza",
		price: 550,
		categoryName: "Categories",
		imgSrc: "https://images.unsplash.com/photo-1618554754947-e01d5ce3c549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzdWFsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80",
		type: "CASUAL WEAR"
	}
];
