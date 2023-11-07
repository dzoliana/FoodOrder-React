<h1 align="center">Food Order App</h1>

- got a list of meals we can choose
- add meals to the cart, also change their amounts and add them multiple times
- view what's in the cart
- click order (for now that won't do anything - just add a little output in the console)

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

## Deployed site

- [Food order app](https://food-order-app-adz.netlify.app/ "food-order-app-adz")

## Workflow

<details>
           <summary>Available Meals</summary>
           <ul>
                <li>remove DUMMY_MEALS</li>
                <li>adding useEffect() for fetch()</li>
                <li>responseData will be object with id as key and data as neasted object</li>
                <li>adding const loadedMeals for converting object to array through for loop</li>
                <li>using 'CartProvider' component to wrap all components that need access to the cart (all components that are displayed in  component)</li>
            </ul>
</details>
