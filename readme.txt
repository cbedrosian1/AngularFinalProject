The different features I implemented were: 

I used modals to display details on the list pages and as a confirmation on the shopping cart page.
I used reactive forms/validation on the checkout page and the quantity on the shopping cart page is a reactive form as well.
I display the active link in the navbar.
I used a carousel on the home page.
The cart list and cart item components have different html templates depending on the screen size.

When a user checks out it deletes all items out of the cart, which is stored on the server. Unfortunately this causes json-server to crash.
I looked for hours for a fix, but it seems its just an issue with json-server when calls are made too quickly together. I tried setting timeouts,
but nothing worked. So after checkout json-server will need to be started back up.