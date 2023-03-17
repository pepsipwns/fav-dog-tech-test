## Favourite Dogs Technical Test

This is __Anthony Brown__'s submission to the favourite dogs technical test.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is using Tailwind.css for some basic styling!

Using js-cookie to save to cookies if localStorage fails

## Getting Started

After pulling down the repo, first install all project dependencies 

```bash
npm install
```

Then, run the development server:


```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) are handled nicely with Next.js so didn't require react-router, as long as pages are created in pages folder the routes will be automatically created with the same name. So our two available routes here are index (/) and faves (/faves) which are accessible via the basic navigation bar.

## Components

I created a couple basic components to make this easier, the ImageCard being the main component which is reused on both pages. A basic navigation and buttons.

I ensured the button to 'Add a dog to favourites' would be disabled after adding one / loading a new dog, this way we can only add the dog once.

I added some ugly gif from google for loading / success feedback (I'm no designer!)

## Context & Local Storage

I created Context for the wrapped the app in a Provider. This allows the 'favouriteDogs' array to be adjusted and used anywhere in the app.

Combine this with the use of localStorage so it saves the 'favouriteDogs' values in the localStorage of the browser whenever it is adjusted.

This way we can refresh the page, close the page, etc, and come back to our same favourite dogs available.

I added a 'clear all' button that appears when more than 8 dogs are added to easily clear them all. This clears localStorage/context values.

If local storage fails we have a fallback to cookies, this would be when server side rendering of next.js fails to have access to window

## User Stories (BDD)

I used BDD to plan my process of developing the application and created a few basic user stories. This helps to wrap my brain around what exactly is required and ensures nothing is missed (I hope).

### Homepage User Story ###
```bash
As a user,
I want to view a random image of a dog
So that I can add it to my favourites list
Or click to view another random image
```
__Scenario 1:__ Add dog to favourites
```bash
Given that I like the image of the dog
And I click on the button to add the dog to favourites
Then the dog should be added to my favourites list
And be viewable on /faves
```
__Scenario 2:__ View a new dog
```bash
Given that I dont like the image of the dog
And I click on the button to view a new dog
Then a new image of a dog should be presented to me
```

### Favourites Page User Story ###
```bash
As a user,
I want to view my list of favourite dogs
So that I can view my favourites and remove an favourite

```
__Scenario 1:__ Remove dog from favourites
```bash
Given that I am on the favourites page
And I click on the button to remove the dog from favourites
Then the dog should be removed from my favourites list
And no longer be viewable on /faves

```

## Thankyou ##

Thankyou for considering me and I am really excited about the opportunity to potentially join the company.
Anthony Brown

