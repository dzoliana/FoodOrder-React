<h1 align="center">Food Order App</h1>

- got a list of meals from which we can choose
- add meals to the cart, also change their amounts and add them multiple times
- view what's in the cart
- click order, though for the moment that won't do anything (just add a little output in the console)

## Workflow

### App

- components Header and Meals

### Layout

- Header

  - 2 blocks: header toolbar and image below the header

- HeaderCartButton

  - button (with icon, text and number)

### Cart

- CartIcon

  - icon cart

### Meals

- MealsSummary

  - title and summary description

- AvailableMeals

  - dummy meals data
  - rendering data from js object to array of jsx elements

- Meals

  - components MealsSummary and AvailableMeals

- MealItem

  - card layout containing details about each item including name, description, price per unit, quantity available

### UI

## Getting started

This project was bootstrapped with **Create React App**.

1. Clone/Download the repo.
2. Run `npm install`.
3. Run `npm start` to spin the up the local dev server port 3000. [http://localhost:3000](http://localhost:3000/ "http://localhost:3000")
4. Make required changes to suit your needs.
