# Creating a Frontend with React + Vite

## Introduction

### First off, what is React?

[React](https://react.dev/) is a library created by Meta (formerly Facebook) for JavaScript that allows developers to create user interfaces out of modularized code objects called Components. While most javascript files end in the file extnesion ".js", React apps use the extension ".jsx". React supports the use of HTML-like syntax through this extension, making the gap between HTML web pages to React pages very easy to bridge. If you need some foundational information on HTML, check out this [tutorialspoint](https://www.tutorialspoint.com/html/index.htm) site.

### What is Vite?

[Vite](https://vitejs.dev) is a build tool for React (and other JavaScript frontend libraries) that allows for fast, lightweight development. As of March 2023, the formerly standard way of creating React applications through Node called CRA (create-react-app) is completely deprecated, but that's okay, because Vite has its own build options for React, and is in most ways completely superior to the "old way."

## Getting Started

Using Node Package Manager, you can easily instantiate a new Vite-React project through Vite by using this command: \
 `npm create vite@latest`

- You will be prompted to install the latest version of Vite. Press "Y" and then enter.
- Then, you will be prompted to name the project. The default name is fine, so just press enter.
- Next, you will be prompted to select a framework. Use the arrow keys to select "React", then press enter.
- Finally, you will be prompted to select a variant. Again use the arrow keys to select "Javascript" (NOT Javascript + SWC), then press enter.
  Now you should have a folder in your current directory with the name of your React project.

In your terminal, change directory to your project root and use the following commands: \

```
npm install
npm i axios
npm run dev
```

This will install the dependencies required for Vite and React, and then deploy your project locally on your machine. We will explain axios a little bit later. Your terminal should give you a link that you can visit in your web browser to see the project for yourself. What you see should be the Vite logo, the React logo, and a button that counts up every time you click it. If you look at the src/assets folder, you can take a look at the code that makes this work. If you want to close the application running on your local machine, input CTRL + C in the terminal, and then confirm by entering "Y".

## File Structure

You will notice that the current directory contains a couple of folders: node_modues (which we will not mess with), public (which is typically used to store image files), and src (source), which is mostly where we will be tinkering around. There are also some standalone files that have been generated directly in the root, some of which we have seen in Node projects before. We won't concern ourselves with these files much either.

The src folder should contain several types of files, including some styling (.css) files and some component files (.jsx). If you look at `main.jsx`, you should see something that looks like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

What this code does is create the root of the React project. For those of you with experience in C-like languages, think of this file as the "main method" of React coding. In the case of this project, the only thing being rendered is the object file for `App.jsx`, as can be seen by the self-closing tag that says `<App />`. This means that the majority of the coding we will do for this project will be done in the `App.jsx` file. In order to do that, we're going to need to learn how to utilize React component structure.

Start by <b>deleting everything in the App.jsx file.</b> We're going to be starting fresh, so replace the code found in App.jsx with this:

```jsx
import "./App.css";

function App() {
  return;
  <>
    <h1>Bible Verse Generator</h1>
  </>;
}

export default App;
```

## Components and How to Use Them

### The App component

As you can see from the code we just pasted, it's pretty bare. The top line imports the styling we want to use, and there is a single function by which everything else will be encapsulated. Like most functions, the `App()` function returns something: in the case of React components, the thing that gets exported is the HTML-like code that determines how a component looks and functions. Notice the open and close brackets (`<>` & `</>`) which are commonly associated with HTML. We are going to create our component (mostly) within these two brackets. You can add standard HTML tags like `<h1>`, `<p>`, and `<table>` to include more typical features, but we can use component structure to make much more customizable features.

For an extensive list of all of the HTML tags you can use, here's a comprehensive reference from [W3Schools](https://www.w3schools.com/tags/default.asp).

It is best practice to have only the bare essentials within the App.jsx file, having your user-created components do most of the heavy lifting. Normally when developing a React project, it's best practice to create a folder called "components" within your src folder. All of the components you create should be named using Camel Case staring with a capital letter (e.g. "MyNewComponent").

### Creating a New Component - Random Button

In our newly created components folder, let's create a file called `RandomButton.jsx`. This will serve as our tutorial for how to create nearly any component in JSX. \
Here's some basic code to start out with:

```jsx
function RandomButton() {
  return (
    <>
      <h2>{displayText}</h2>
      <p>Press the "Random" button to generate a random verse.</p>
      <form onSubmit={(event) => callAPIRandom(event)}>
        <input type="submit" name="rand" value="Random" />
      </form>
    </>
  );
}

export default RandomButton;
```

When including this component in the `App.jsx` file, make sure to import the RandomButton component file. This will make it so that you can use the RandomButton component like a traditional HTML tag. If we want to reference a component we have created within the App.jsx file, we do that very simply using HTML-like structure. This is what the whole file should look like:

```jsx
import "./App.css";
import RandomButton from "./components/RandomButton";

function App() {
  return (
    <>
      <h1>Bible Verse Generator</h1>
      <RandomButton/>
    </>;
  );
}

export default App;
```

Now we have a complete react component. It doesn't do anything functional, so our next step will be giving it the ability to do something.

## Making Calls to APIs

In order for us to be able to make an API call, we first need to understand a couple of fundamental concepts of React programming: hooks and the axios library.

Hooks allow us to keep track of our react app's state, among other features. It is state that allows us to update components without refreshing the page. For more information on React hooks, here's a link to the [W3Schools page](https://www.w3schools.com/react/react_hooks.asp).

[Axios](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/) is a library we included earlier during the creation of our React application. It allows us to easily interact with APIs using a syntax similar to traditional API phrasing. There are functions that support "get," "post," etc.

### The useState Hook

The useState hook will allow us keep track of a component's state and update the React application if it changes. This will make it so that we don't have to refresh the page every time something gets updated. You have to import useState into your .jsx files from react in order to use it. useState works like this: you have a variable which references the current state of an object, and you have a function that is called to update that state.

```jsx
const [name, setName] = useState("John");
```

In this example, the current state is held in the "name" variable, the "setName" variable can be called later to update the state, and the default state of name is "John".

### Implementation of Hooks

Having learned exactly what useState hooks are and how they work, let's implement one in our RandomButton.jsx file. We want to be able to display the text that we acquire by calling the API, so we can store that in our h2 header that currently says "Placeholder Text." Before the return begins, we need to create a useState hook, which we can write like this:

```jsx
const [displayText, setDisplayText] = useState("Placeholder Text");
```

And then later, we can reference this in our h2 header by writing something like this:

```html
<h2>{ displayText }</h2>
```

We can write up a quick function to call the API. We'll start with the random verse call since it will likely be easier to implement.

```jsx
const callAPIRandom = async (event) => {
  /* Prevent default form submission behavior */
  event.preventDefault();
  /* Attempt to make a GET request */
  try {
    const response = await axios.get(
      "http://labs.bible.org/api/?passage=random&formatting=plain"
    );
    /* Log the response to the console for debugging purposes*/
    console.log("API Response:", response.data);
    /* Set the display text to the response of the GET */
    setDisplayText(response.data);
    /* If there's an error, report it to the console */
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

In the end, we should have code that looks something like this:

```jsx
/* in App.jsx */
import "./App.css";
import RandomButton from "./components/RandomButton"

function App() {
  return (
    <>
      <h1>Bible Verse Generator</h1>
      <RandomButton/>
    </>
  );
};

export default App;


/* in RandomButton.jsx */
import { useState } from "react";
import axios from "axios";

function RandomButton() {

    const [displayText, setDisplayText] = useState("Placeholder Text");

    const callAPIRandom = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.get(
            "http://labs.bible.org/api/?passage=random&formatting=plain"
        );
        console.log("API Response:", response.data);
        setDisplayText(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    return (
        <>
        <h2>{displayText}</h2>
        <p>Press the "Random" button to generate a random verse.</p>
        <form onSubmit={(event) => callAPIRandom(event)}>
            <input type="submit" name="rand" value="Random" />
        </form>
        </>
    );
};

export default RandomButton;
```

Your goal, now knowing what you know about React, is to create an additional component called "RetreivalButton" which works similarly to the RandomButton, except rather than calling for a random verse from the Bible, this new component should prompt users to enter a book name, and a chapter and verse number and then create a GET request to labs.bible.org using that information. Remember to follow proper conventions, use the resources you have been given, and document your code with meaningful comments. 