# Asure UI Engineer Coding Exercise

Make sure you read this document carefully and follow the guidelines we've provided.

## Context

At Asure, we love tacos but we need help finding taco restaurants. We'd like you to use HTML, CSS, and JavaScript (React) to implement a web app for listing taco restaurants in any given US city. You will need to use Yelp's API for taco restaurant data to fill in the details and functionality as described below.

## Requirements

### Yelp API

Yelp's API does not allow CORS so we've set up a proxy with CORS support using glitch.me to return data from two of Yelp's endpoints:

#### Business Search:
https://colorful-halibut.glitch.me/api/v1/businesses/search

When provided with the correct query parameters, this endpoint will return a list of restaurants in a given city.

For example: https://colorful-halibut.glitch.me/api/v1/businesses/search?location=austin&term=tacos

For a list of supported query parameters, please refer to the [Yelp API documentation for business search](https://www.yelp.com/developers/documentation/v3/business_search) 

#### Detailed Business Search:
https://colorful-halibut.glitch.me/api/v1/businesses/{id}

When provided with an ID, this endpoint will return the details for a given search result.

For example: https://colorful-halibut.glitch.me/api/v1/businesses/g6B2TZYS7JKKpNWPwVnwqw

### Functionality
- Yelp's `/businesses/search` endpoint requires a `location`. Your UI should support searching for tacos in any city.
- By default, the endpoint returns 20 results. Please handle pagination in a way that you feel provides the best user experience.
- Help us find the best tacos by allowing the user to sort results based on rating, ascending and descending.
- Unless on mobile, the user should be presented with 4-6 items per row depending on viewport size.

### Tech stack

- JavaScript
  - Use React.
  - Use Create React App or create your project from scratch, but please don't use any other boilerplate or starter project.
- Use a preprocessor like SASS/SCSS/Less, a CSS in JSS library like styled-components, a design system, or anything else you see fit to style your interface.

### Bonus
- Add support for a details view using the [Detailed Business Search](#detailed-business-search).
  - Support viewing multiple images of delicious tacos in a details view.
- Make your UI responsive.
- Elegantly handle loading states.
- Write clear documentation on how the app was designed and how to run the code.
- Write unit tests.
- Create your components in [Storybook](https://storybook.js.org) with tests.
- Provide an online demo of the application.
- Include subtle animations to focus attention.
- Describe optimization opportunities when you conclude.

## What matters in this exercise

Use any libraries you would normally use if this were a real production App. Note: we're interested in your code & the way you solve the problem, not how well you can use a particular library or feature.
*Due to the open-ended nature of this exercise, we don't expect you to complete it.* We're interested in your method and how you approach the problem just as much as we're interested in the end result.

Here's what you should strive for:

- Good use of current HTML, CSS, JavaScript, and performance best practices.
- Solid testing approach.
- Extensible code.
- Have fun.
- Able to explain your architectural decisions.
- Demonstrate good git hygiene.


## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you're done.

> What if I have a question?

Create a new issue in this repo and we will respond and get back to you quickly.
