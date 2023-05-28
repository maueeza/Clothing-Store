import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //categories for home page
	{
		id: uuid(),
		brand : "Dove",
		productName: "Dove Hairfall Rescue shampoo",
		type: "Shampoos",
		price: 563,
		olderPrice : 999,
		inStock : true,
		rating : 4.4,
		discount : 44,
		volume : "1 Ltr",
		image : "https://m.media-amazon.com/images/I/41kH7QfPnOL._SL1000_.jpg",
		
	},
	{
		id: uuid(),
		brand : "Love Beauty and Planet",
		productName: "Love Beauty and planet argan oil and lavender shampoo",
		type: "Shampoos",
		price: 245,
		olderPrice : 350,
		inStock : true,
		rating : 4.1,
		discount : 30,
		volume : "200 ml",
		image : "https://m.media-amazon.com/images/I/51Hh3AFFKKL._SL1000_.jpg",
	},
	{
		id: uuid(),
		brand : "Khadi",
		productName: "Khadi Natural Amla and Bringraj Shampoo",
		type: "Shampoos",
		price: 181,
		olderPrice : 299,
		inStock : true,
		rating : 4.1,
		discount : 39,
		volume : "200 ml",
		image : "https://m.media-amazon.com/images/I/512MLOxX0EL._SL1080_.jpg",
	},
	{
		id: uuid(),
		brand : "Khadi",
		productName: "Khadi Natural Amla & Bhringraj Hair Conditioner",
		type: "Conditioners",
		price: 147,
		olderPrice : 210,
		inStock : true,
		rating : 4.2,
		discount : 30,
		volume : "200 ml",
		image : "https://m.media-amazon.com/images/I/61H309OpXqL._SL1080_.jpg",
	},
	{
		id: uuid(),
		brand : "Love Beauty and Planet",
		productName: "Love Beauty & Planet Argan Oil and Lavender Conditioner",
		type: "Conditioners",
		price: 240,
		olderPrice : 400,
		inStock : true,
		rating : 4.2,
		discount : 40,
		volume : "200 ml",
		image : "https://m.media-amazon.com/images/I/51dGwy3zbJL._SL1000_.jpg",
	},
	{
		id: uuid(),
		brand : "St.Botanica",
		productName: "St.Botanica Moroccan Argan Hair Conditioner",
		type: "Conditioners",
		price: 329,
		olderPrice : 549,
		inStock : true,
		rating : 4.1,
		discount : 40,
		volume : "300 ml",
		image : "https://m.media-amazon.com/images/I/61xwnXKq0gL._SL1200_.jpg",
	},
];
