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
                <li>adding isLoading state</li>
                <li>handling errors by adding httpError state</li>
                <li>creating Checkout component to Order button for sending order to the backend</li>
                <ul><li>form for Name, Adress, Postal code and City</li>
                <li>Confirm and Cancel buttons</li></ul>
                <li>adiing Checkout to Cart component</li>
                <li>importing useRef for reading form values</li>
                <li>adding form validation</li>
                <ul>
                    <li>adding helper functions isEmpty and isNotFiveChars in Checkout for checking is value empty and is postal code equal 5 digits</li>
                    <li>adding const formIsValid as main validation</li>
                    <li>create useState with object (name, street, city, postalCode)</li>
                    <li>adding css class for invalid input</li>
                </ul>
            </ul>
</details>
