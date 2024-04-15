Application Structure

The application is built with modules for product listing, product cards, cart management, and order submission.

Product Listing Module: Displays a list of available products.

Product Cards Module: Each product card represents an item in the product list. It includes a buy button to add the item to the cart. After clicking the buy button, it switches to a step with add/subtract buttons to adjust the quantity.
Cart Module: Manages the items added to the cart. It includes a cart list and a form for order submission. If the cart is empty, the form is disabled. After submitting an order, it validates the phone number. If the phone number is valid, the order is submitted.

Running the Application

Clone the application from git@github.com:NarekDanielyan1993/testTask.git
Go the root of the project and run following command:
npm install

add .env.local file in the root directory with the following variable

NEXT_PUBLIC_SERVER_BASE_URL=http://o-complex.com:1337

To run the application in development mode:
npm run dev
To run the application in production mode: 1. npm run build 2. npm start

Usage

Navigate to the product listing page.
Browse through the available products.
Click the buy button on a product card to add it to the cart.
Adjust the quantity using the add/subtract buttons in the cart.
Fill in the phone number in the order form.
Submit the order.
