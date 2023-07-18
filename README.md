<h1 align="center">Food Order App</h1>

- got a list of meals from which we can choose
- add meals to the cart, also change their amounts and add them multiple times
- view what's in the cart
- click order, though for the moment that won't do anything (just add a little output in the console)

<p>
    <img src="/src/assets/meals1.png" hspace="10" >
    <img src="/src/assets/meals2.png" hspace="10" >
</p>

## Getting started

This project was bootstrapped with **Create React App**.

1. Clone/Download the repo.
2. Run `npm install`.
3. Run `npm start` to spin the up the local dev server port 3000. [http://localhost:3000](http://localhost:3000/ "http://localhost:3000")
4. Make required changes to suit your needs.

## Workflow

<details>
           <summary>App</summary>
           <p>- components `Header` and `Meals`
</p>
</details>

<details>
    <summary>Layout</summary>
    <p>
    - Header
        - 2 blocks: header toolbar and image below the header
    - HeaderCartButton
        - button (with icon, text and number)
    </p>
</details>

### App

- components `Header` and `Meals`

### Layout

- Header

  - 2 blocks: header toolbar and image below the header

- HeaderCartButton
  - button (with icon, text and number)

### Cart

- CartIcon

  - icon cart

- Cart
  - display Cart in form of a modal, so currently we return a div inside which I render 'cartItems', later we will convert the div into a modal
  - 2 div: with total amount and with cart actions (close and order button)
  - 'cartItems' - map all cart items to cartItem JSX elements
    - map to this array of objects {[ ]}
    - print the list item (li) with 'item.name'
    - wrap it with an unordered list (ul)

### Meals

- Meals

  - components `MealsSummary` and `AvailableMeals`

- MealsSummary

  - title and summary description

- AvailableMeals

  - dummy meals data
  - rendering data from js object to array of jsx elements
  - pass `DUMMY_MEALS` through `map` method and insert the `MealItem` component

- MealItem

  - card layout containing details about each item including name, description, price per unit, quantity available
  - 2 div el: first with title, description and ssecond with price and form that allow user to enter the amount of food he wants in the basket (form component `MealItemForm`)

- MealItemForm

  - `Input` and `button` inside rendered `form`
  - `Input` component (inside the UI) contains a label prop and an input prop that with an JS object - type, min and max for amount limit

### UI

- Card

  - crating wrapper component for every meal
  - return a div that wraps children props so that anything passed between the opening and closing brackets of the Card component ends up being used inside the Card

- Input

  - return a label and input inside div

- Modal
  - using React `Portal` for our background (behind a modal layer that blocks interaction with the rest of the page), and render modal overlay itself with React Portal
  - creating `Backdrop` and `ModalOverlay` components
  - return some markup where are backdrop and an overlay one to the other (`Fragment` wrap Backdrop and ModalOverlay)
  - to make sure that the HTML code is not thrown around, we use Portals - output 2 dynamic expressions { }{ } inside Fragment and call the `createPortal` method
    - `portalElement`is constant that accesses `document.getElementById('overlays')` selected div from the index.html public file
    - pass that portalElement as the second argument to both create portal calls
