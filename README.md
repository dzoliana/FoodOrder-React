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

## Workflow

<p align="center">
    <img width="200" height="200" src="/src/assets/workflow.png" >
</p>

<details>
           <summary>App</summary>
           <ul>
                <li>components 'Header' and 'Meals'</li>
                <li>'useState' for evaluating dinamic expression and rendering component 'Cart'</li>
                <li>using 'CartProvider' component to wrap all components that need access to the cart (all components that are displayed in  component)</li>
            </ul>
</details>

<details>
    <summary>Layout</summary>
        <ul>
        <li>Header
            <ul>
            <li>2 blocks: header toolbar and image below the header</li>
            </ul>
        </li>
        <li>HeaderCartButton
            <ul>
                <li>button (with icon, text and number)</li>
            </ul>
        </li>
        </ul>
</details>

<details>
    <summary>Cart</summary>
        <ul>
        <li>CartIcon
            <ul>
            <li>icon cart</li>
            </ul>
        </li>
        <li>Cart
            <ul>
                <li>display Cart in form of a modal, so return 'Modal' inside which I render 'cartItems'</li>
                <li>2 div: with total amount and with cart actions (close and order button)</li>
                <li>'cartItems' - map all cart items to cartItem JSX elements</li>
                <ul>
                    <li>map to this array of objects {[ ]}</li>
                    <li>print the list item (li) with 'item.name'</li>
                    <li>wrap it with an unordered list (ul)</li>
                </ul>
            </ul>
        </li>
        </ul>
</details>

<details>
    <summary>Meals</summary>
        <ul>
        <li>Meals
            <ul>
            <li>components 'MealsSummary' and 'AvailableMeals'</li>
            </ul>
        </li>
        <li>MealsSummary
            <ul>
                <li>title and summary description</li>
            </ul>
        </li>
        <li>AvailabeleMeals
            <ul>
            <li>dummy meals data</li>
            <li>rendering data from js object to array of jsx elements</li>
            <li>pass 'DUMMY_MEALS' through 'map' method and insert the 'MealItem' component</li>
            </ul>
        </li>
        <li>MealItem
            <ul>
                <li>card layout containing details about each item including name, description, price per unit, quantity available</li>
                <li>2 div el: first with title, description and ssecond with price and form that allow user to enter the amount of food he wants in the basket (form component 'MealItemForm'</li>
            </ul>
        </li>
        <li>MealItemForm
            <ul>
                <li>'Input' and 'button' inside rendered 'form'</li>
                <li>'Input' component (inside the UI) contains a label prop and an input prop that with an JS object - type, min and max for amount limit</li>
            </ul>
        </li>
        </ul>
</details>

<details>
    <summary>UI</summary>
        <ul>
        <li>Card
            <ul>
            <li>crating wrapper component for every meal</li>
            <li>return a div that wraps children props so that anything passed between the opening and closing brackets of the Card component ends up being used inside the Card</li>
            </ul>
        </li>
        <li>Input
            <ul>
                <li>return a label and input inside div</li>
            </ul>
        </li>
        <li>Modal
            <ul>
            <li>using React 'Portal' for our background (behind a modal layer that blocks interaction with the rest of the page), and render modal overlay itself with React Portal</li>
            <li>creating 'Backdrop' and 'ModalOverlay' components</li>
            <li>return some markup where are backdrop and an overlay one to the other ('Fragment' wrap Backdrop and ModalOverlay)</li>
            <li>to make sure that the HTML code is not thrown around, we use Portals - output 2 dynamic expressions { }{ } inside Fragment and call the 'createPortal' method</li>
                <ul>
                    <li>'portalElement' is constant that accesses 'document.getElementById('overlays')' selected div from the index.html public file</li>
                    <li>pass that portalElement as the second argument to both create portal calls</li>
                    </ul>
            </ul>
        </li>
        </ul>
</details>

<details>
    <summary>Store</summary>
        <ul>
        <li>cart-context
            <ul>
                <li>'React.createContext'</li>
                <li>aray of items for managing several items in the cart</li>
                <li>'totalAmount' is zero initially</li>
                <li>two functions that update context -> 'addItem' function that receives the item to be added and the 'removeItem' function that receives the ID to identify the item that should be removed from the cart</li>
            </ul>
        </li>
        <li>CartProvider
            <ul>
                <li>contain a CartProvider component that receives props and will manage the current data context and provide that context to all components that want access to it</li>
                <li>import 'CartContext' from 'cart-context' and return the JSX code by 'CartContext.Provider'</li>
                <li>Passing props.children between CartContext.Provider. This allows us to wrap all the components that should get access to this context with CartProvider component. Also add all the logic for managing the context data to this component, so that everything is contained in one component and no other component has to deal with it.</li> 
                <li>helper 'cartContext' constant is simply an object with totalAmount, items, addItem, removeItem.</li>
                <ul>
                    <li>'addItem' and 'removeItem' in 'cartContext' object point to 'addItemToCartHandler' and 'removeItemFromCartHandler' functions</li>
                    <li>'cartContext' object is set as the value for the value prop on the 'CartContext.Provider'</li>
                </ul>
                <li>Once a Provider (with the requested value) is used, that Provider no longer has access to the set default content within createContext</li>
            </ul>
        </li>
        </ul>
</details>
