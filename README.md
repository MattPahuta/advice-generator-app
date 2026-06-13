# Advice Generator - A Frontend Mentor Design Challenge

![project screenshot]()

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Links](#links)
  - [Tech Stack](#tech-stack)
- [Architecture & Key Decisions](#architecture--key-decisions)
  - [State Management](#state-management)
  - [Accessibility](#accessibility)
- [Author](#author)

## Overview

A simple web app to quickly retrieve a bit of random advice. Built with React and styled with Tailwind CSS.

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects. The challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

### Features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon button

### Links

- [Frontend Mentor Solution URL]()
- [live demo site]()


### Tech Stack

| Layer      | Tech or Tool                         |
| ---------- | ------------------------------------ |
| UI Library | React 19                             |
| Build Tool | Vite                                 |
| Styling    | Tailwind CSS                         |
| Font       | Google Fonts (Manrope)               |
| Data       | Advice Slip JSON API (REST, no auth) |

## Architecture & Key Decisions

It's a simple app with only an AdviceCard and Loader component to keep the presentation isolated. The custom hook handles all API interaction, exposing a consistent interface to the web app.

```js
const { advice, loading, error, refetch } = useAdvice();
```

Some pretty standard `useEffect` code deals with the initial fetch request to the Advice Slip API, but I decided to go with a dedicated `useCallback` for the method to pass the fetch logic to the AdviceCard component, preventing the function from being recreated every render.

Executing a standard fetch request via the button often appears to do nothing at all because of the Advice Slip caching. The `Date.now()` addition for the URL addresses this.

```js
const fetchAdvice = useCallback(async () => {
  try {
    setAdvice(null);
    setLoading(true);
    setError("");

    const response = await fetch(
      `${BASE_URL}?timestamp=${Date.now()}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch advice.");
    }

    const result = await response.json();
    setAdvice(result.slip);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}, []);
```

### State Management

**`useAdvice` custom hook** owns:
- `advice` — the object returned from API, initially null 
- `loading` — boolean value, true while requests are in flight
- `error` — error message string

### Accessibility

It's a simple enough app, but I made a few accessibility mistakes when I originally completed this challenge several years ago. 

Most notably, the 'dice' button needs to be a `<button>` with proper focus styles (I originally made it an anchor tag for some reason).

With a simple component like this, it's sometimes tricky to determine what constitutes an actual heading. Do I reach for the most prominent text on the screen (the actual quote), or go with adding a hidden h1 with the app's descriptive title (Advice Generator App)? In the end, tried not to overthink it and just made the Advice ID the heading. It more or less describes the content coming after, and I wanted to ensure I used the `<q>` tag for the quote, something I failed to do in the first iteration of this challenge.

The rest is fairly standard A11Y fundamentals: Applying proper aria attributes to the SVG images, button, and the loading spinner, and making sure to include the motion-safe variant of Tailwind's spin animation.

## Author

- Website - [Matt Pahuta](https://www.mattpahuta.dev)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)
