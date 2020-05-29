import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Product } from "../types.ts";

let products: Product[] = [{
  "id": "40fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Brown eggs",
  "type": "dairy",
  "description": "Raw organic brown eggs in a basket",
  "price": 28.1,
  "rating": 4,
}, {
  "id": "64d77c2a-850e-4ce5-b944-b65eeb7a36e6",
  "title": "Sweet fresh strawberry",
  "type": "fruit",
  "description": "Sweet fresh strawberry on the wooden table",
  "price": 29.45,
  "rating": 4,
}, {
  "id": "ae6085ff-359c-4e43-9823-68c8f4337262",
  "title": "Green smoothie",
  "type": "dairy",
  "description":
    "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
  "price": 17.68,
  "rating": 4,
}, {
  "id": "15f49fd7-f60d-482f-9201-d4ecd90707f8",
  "title": "Raw legums",
  "type": "vegetable",
  "description": "Raw legums on the wooden table",
  "price": 17.11,
  "rating": 2,
}, {
  "id": "50fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Baking cake",
  "type": "dairy",
  "description":
    "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
  "price": 11.14,
  "rating": 4,
}, {
  "id": "60fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Pesto with basil",
  "type": "vegetable",
  "description": "Italian traditional pesto with basil, chesse and oil",
  "price": 18.19,
  "rating": 2,
}, {
  "id": "70fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Hazelnut in black ceramic bowl",
  "type": "vegetable",
  "description":
    "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
  "price": 27.35,
  "rating": 0,
}, {
  "id": "80fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Fresh strawberry",
  "type": "fruit",
  "description": "Sweet fresh strawberry on the wooden table",
  "price": 28.59,
  "rating": 4,
}, {
  "id": "90fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Lemon and salt",
  "type": "fruit",
  "description": "Rosemary, lemon and salt on the table",
  "price": 15.79,
  "rating": 5,
}, {
  "id": "41fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Homemade bread",
  "type": "bakery",
  "description": "Homemade bread",
  "price": 17.48,
  "rating": 3,
}, {
  "id": "42fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Legums",
  "type": "vegetable",
  "description": "Cooked legums on the wooden table",
  "price": 14.77,
  "rating": 0,
}, {
  "id": "43fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Fresh tomato",
  "type": "vegetable",
  "description": "Fresh tomato juice with basil",
  "price": 16.3,
  "rating": 2,
}, {
  "id": "44fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Healthy breakfast",
  "type": "fruit",
  "description": "",
  "price": 13.02,
  "rating": 2,
}, {
  "id": "45fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Green beans",
  "type": "vegetable",
  "description": "Raw organic green beans ready to eat",
  "price": 28.79,
  "rating": 1,
}, {
  "id": "46fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Baked stuffed portabello mushrooms",
  "type": "bakery",
  "description":
    "Homemade baked stuffed portabello mushrooms with spinach and cheese",
  "price": 20.31,
  "rating": 1,
}, {
  "id": "47fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Strawberry jelly",
  "type": "fruit",
  "description": "Homemade organic strawberry jelly in a jar",
  "price": 14.18,
  "rating": 1,
}, {
  "id": "48fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Pears juice",
  "type": "fruit",
  "description": "Fresh pears juice on the wooden table",
  "price": 19.49,
  "rating": 4,
}, {
  "id": "49fdc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Fresh pears",
  "type": "fruit",
  "description": "Sweet fresh pears on the wooden table",
  "price": 15.12,
  "rating": 5,
}, {
  "id": "400dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Caprese salad",
  "type": "vegetable",
  "description":
    "Homemade healthy caprese salad with tomato mozzarella and basil",
  "price": 16.76,
  "rating": 5,
}, {
  "id": "401dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Oranges",
  "type": "fruit",
  "description":
    "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
  "price": 21.48,
  "rating": 4,
}, {
  "id": "402dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Vegan food",
  "type": "vegetable",
  "description": "Concept of vegan food",
  "price": 29.66,
  "rating": 4,
}, {
  "id": "403dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Breakfast with muesli",
  "type": "dairy",
  "description": "Concept of healthy breakfast with muesli",
  "price": 22.7,
  "rating": 2,
}, {
  "id": "404dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Honey",
  "type": "bakery",
  "description": "Honey and honeycell on the table",
  "price": 17.01,
  "rating": 2,
}, {
  "id": "405dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Breakfast with cottage",
  "type": "fruit",
  "description": "Healthy breakfast with cottage cheese and strawberry",
  "price": 14.05,
  "rating": 1,
}, {
  "id": "406dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Strawberry smoothie",
  "type": "fruit",
  "description":
    "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
  "price": 28.86,
  "rating": 2,
}, {
  "id": "407dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Strawberry and mint",
  "type": "fruit",
  "description": "Homemade muesli with strawberry and mint",
  "price": 26.21,
  "rating": 4,
}, {
  "id": "408dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Ricotta",
  "type": "dairy",
  "description": "Ricotta with berry and mint",
  "price": 27.81,
  "rating": 5,
}, {
  "id": "409dc545-8182-4c7c-bfd8-193859ee314a",
  "title": "Granola",
  "type": "dairy",
  "description":
    "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
  "price": 29.97,
  "rating": 3,
}, {
  "id": "40f0c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Smoothie with chia seeds",
  "type": "fruit",
  "description":
    "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
  "price": 25.26,
  "rating": 5,
}, {
  "id": "40f1c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Yogurt",
  "type": "dairy",
  "description": "Homemade yogurt with raspberry and mint",
  "price": 27.61,
  "rating": 4,
}, {
  "id": "40f2c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Sandwich with salad",
  "type": "vegetable",
  "description": "Vegan sandwich with salad, tomato and radish",
  "price": 22.48,
  "rating": 5,
}, {
  "id": "40f3c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Cherry",
  "type": "fruit",
  "description": "Cherry with sugar on old table",
  "price": 14.35,
  "rating": 5,
}, {
  "id": "40f4c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Raw asparagus",
  "type": "vegetable",
  "description": "Raw fresh asparagus salad with cheese and dressing",
  "price": 22.97,
  "rating": 4,
}, {
  "id": "40f5c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Corn",
  "type": "vegetable",
  "description": "Grilled corn on the cob with salt and butter",
  "price": 13.55,
  "rating": 2,
}, {
  "id": "40f6c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Vegan",
  "type": "vegan",
  "description": "Concept of healthy vegan eating",
  "price": 28.96,
  "rating": 5,
}, {
  "id": "40f7c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Fresh blueberries",
  "type": "fruit",
  "description":
    "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
  "price": 21.01,
  "rating": 4,
}, {
  "id": "40f8c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Smashed avocado",
  "type": "fruit",
  "description":
    "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
  "price": 25.88,
  "rating": 0,
}, {
  "id": "40f9c545-8182-4c7c-bfd8-193859ee314a",
  "title": "Italian ciabatta",
  "type": "bakery",
  "description":
    "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
  "price": 15.18,
  "rating": 1,
}, {
  "id": "40fd0545-8182-4c7c-bfd8-193859ee314a",
  "title": "Rustic breakfast",
  "type": "dairy",
  "description":
    "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
  "price": 21.32,
  "rating": 0,
}, {
  "id": "40fd1545-8182-4c7c-bfd8-193859ee314a",
  "title": "Sliced lemons",
  "type": "fruit",
  "description": "",
  "price": 27.14,
  "rating": 2,
}, {
  "id": "40fd2545-8182-4c7c-bfd8-193859ee314a",
  "title": "Plums",
  "type": "fruit",
  "description": "Yellow and red sweet plums",
  "price": 19.18,
  "rating": 1,
}, {
  "id": "40fd3545-8182-4c7c-bfd8-193859ee314a",
  "title": "French fries",
  "type": "bakery",
  "description": "Homemade oven baked french fries with ketchup",
  "price": 18.32,
  "rating": 3,
}, {
  "id": "40fd4545-8182-4c7c-bfd8-193859ee314a",
  "title": "Strawberries",
  "type": "fruit",
  "description": "",
  "price": 15.13,
  "rating": 3,
}, {
  "id": "40fd5545-8182-4c7c-bfd8-193859ee314a",
  "title": "Ground beef meat burger",
  "type": "meat",
  "description":
    "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
  "price": 11.73,
  "rating": 5,
}, {
  "id": "40fd6545-8182-4c7c-bfd8-193859ee314a",
  "title": "Tomatoes",
  "type": "fruit",
  "description": "Organic tomatoes made with love",
  "price": 26.03,
  "rating": 4,
}, {
  "id": "40fd7545-8182-4c7c-bfd8-193859ee314a",
  "title": "Basil",
  "type": "vegetable",
  "description": "Concept of vegan food with basil",
  "price": 15.19,
  "rating": 4,
}, {
  "id": "40fd8545-8182-4c7c-bfd8-193859ee314a",
  "title": "Fruits bouquet",
  "type": "fruit",
  "description": "Abstract citrus fruits bouquet on blue background",
  "price": 18.18,
  "rating": 1,
}, {
  "id": "40fd9545-8182-4c7c-bfd8-193859ee314a",
  "title": "Peaches on branch",
  "type": "fruit",
  "description":
    "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
  "price": 25.62,
  "rating": 3,
}];

// @desc    Get all products
// @route   GET /api/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc    Get a single product
// @route   GET /api/products/:id
const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found!",
    };
  }
};

// @desc    Add a product
// @route   POST /api/products
const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data!",
    };
  } else {
    // Get the product from the request body
    const product: Product = body.value;
    // insert a new uuid for the product
    product.id = v4.generate();
    products.push(product);
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    const body = await request.body();
    const updateData: {
      title?: string;
      type?: string;
      description?: string;
      price?: number;
      rating?: number;
    } = body.value;
    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );
    response.status = 200;
    response.body = {
      success: true,
      data: products,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found!",
    };
  }
};

// @desc    Delete a product
// @route   Delete /api/products/:id
const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    data: products,
  };
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
