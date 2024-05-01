This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run the project locally

1. Clone the repo
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To run the project in production

1. Run `npm run build` to build the project
2. Run `npm run start` to start the production server
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

1. Next.js
2. React.js
3. TypeScript
4. Styled Components
5. Cypress

## Logic for the app

1. First page load preload the cart with 2 items
2. User can change the quantity of the item in the cart
3. User can remove the item from the cart
4. if the cart is empty, show a message that the cart is empty and disabe the `Buy now` button and if user click the `Continue Shopping` button the page will refresh back to the start
5. If products and user click the `Buy now` button, a simulate a Ajax call to show the data pushed on the json format

## Basket component logic

1. Interface `Product` is used to define the product object
2. Interface `StyledButtonProps` is used to define the button styles props
3. Initial products in basket is defined in `initialProducts` array
4. Function `handleQuantityChange` is used to handle the quantity change of the product, it's using the `useCallback` hook to memorize the function
5. Function `handleDelete` is used to handle the delete of the product, it's using the `useCallback` hook to memorize the function
6. Function `handleBuyNow` is used to handle the buy now button click to simulate the ajax call
7. Function `handleRefreshPage` is used to handle the continue shopping button click
8. Logic to calculate `subtotal` and `total` of the products in the basket

## Cypress Test

1. Run `npm run cypress:open` to open the cypress test runner
2. Click on the test file to run the test
3. Unit test file is located at `cypress/e2e/app.cy.ts`
