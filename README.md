# My Taco

## https://mytacos.netlify.app/

A Frontend ReactJs app created created using Yelp's API to list all the Taco restaurants in a given city and displays the details of a restaurant selected from the list 

Yelp's API does not allow CORS so a proxy with CORS support using glitch.me was set up to return data from two of Yelp's endpoints.

## Pages

The App consists of 3 pages:

- The first page is the search page where the user can input a city name in order to get Restaurants list

<a href="https://imgbb.com/"><img src="https://i.ibb.co/k38r1Bz/My-Taco1.gif" alt="My-Taco1"></a><br /><a target='_blank' href='https://emoticoncentral.com/category/path'>path</a><br />

- The second page will display a list of 20 different Taco restaurants will display if the user typed a valid city in the first page's search box, their is an option for the user to sort the list based on rating either in ascending or descending order.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/dJtXYcM/My-Taco2.gif" alt="My-Taco2"></a>


- The third the page has a card contains the details of the selected restaurant such as (address, telephone number...etc).

<a href="https://imgbb.com/"><img src="https://i.ibb.co/MPVGy6D/My-Taco3.gif" alt="My-Taco3" ></a>


## functionality

- App is fully responsive to different screen sizes including large screen monitors, laptops, Ipad $ smart phones.

- As mentioned earlier the app displays 20 different restaurants that user can sort them by rating.

- Conditional Rendering was added to avoid running into errors if Api response doesn't contain a certain key value pair that supposed to be displayed, for example the restaurant open status doesn't exist for all restaurants 

- The app idea provide adding improvements like using the JS geolocation to provide the user with results related his current city location and showing resturants location on the a map which I am planning to add it also review the UI accessibility 


## Tech stack

- Javascript
- ReactJs with Hooks & Router
- HTML
- Sass













