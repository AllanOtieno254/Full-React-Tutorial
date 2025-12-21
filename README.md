# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# React Fundamentals – Complete Course Notes 🚀

## 📌 Introduction

React is a JavaScript library developed by Facebook for building fast, interactive, and scalable user interfaces. It uses a **component-based architecture**, allowing developers to build reusable UI components and manage application state efficiently.

This repository documents everything learned from a complete React course, starting from creating a React application to routing, hooks, API interaction, and next steps.

---

## ⚙️ Creating a React Application

To create a new React application, we use **Create React App (CRA)**:

```bash
npx create-react-app dojo-blog
cd dojo-blog
npm start
This sets up:

Webpack & Babel

Development server

Folder structure

Default React configuration

🧩 Components & Templates
React applications are built using components.

Example of a functional component:

jsx
Copy code
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
    </nav>
  );
};

export default Navbar;
Components:

Are reusable

Return JSX

Start with a capital letter

🔁 Dynamic Values in Templates
JSX allows embedding JavaScript expressions using {}.

jsx
Copy code
const title = "Welcome to the Blog";
const likes = 50;

return (
  <div>
    <h1>{title}</h1>
    <p>Likes: {likes}</p>
  </div>
);
🧱 Multiple Components
React apps are made of many components working together.

Example:

Navbar.js

Home.js

BlogList.js

App.js

jsx
Copy code
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
🎨 Adding Styles Using index.js
Global styles are added in index.css and imported in index.js.

js
Copy code
import './index.css';
CSS classes are applied using className.

🖱️ Click Events
React handles events using camelCase syntax.

jsx
Copy code
<button onClick={() => console.log("Clicked!")}>
  Click Me
</button>
🧠 Using State (useState Hook)
State allows components to manage dynamic data.

jsx
Copy code
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
🛠 Intro to React DevTools
React DevTools:

Inspect components

View props & state

Debug re-renders

Available as a browser extension.

📋 Outputting Lists
Lists are rendered using map().

jsx
Copy code
const blogs = [{ id: 1, title: "React Basics" }];

return (
  <div>
    {blogs.map(blog => (
      <h2 key={blog.id}>{blog.title}</h2>
    ))}
  </div>
);
📦 Props
Props allow passing data between components.

jsx
Copy code
const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <h3 key={blog.id}>{blog.title}</h3>
      ))}
    </div>
  );
};
🔄 useEffect Hook Basics
useEffect runs side effects like fetching data.

jsx
Copy code
import { useEffect } from "react";

useEffect(() => {
  console.log("Component rendered");
}, []);
🔗 useEffect Dependencies
Dependencies control when useEffect runs.

jsx
Copy code
useEffect(() => {
  console.log("Runs when name changes");
}, [name]);
🗄️ Using JSON Server
JSON Server simulates a backend API.

bash
Copy code
npm install -g json-server
json-server --watch data/db.json --port 8000
🌐 Fetching Data with useEffect
jsx
Copy code
useEffect(() => {
  fetch("http://localhost:8000/blogs")
    .then(res => res.json())
    .then(data => setBlogs(data));
}, []);
⏳ Conditional Loading Message
jsx
Copy code
{isLoading && <div>Loading...</div>}
{blogs && <BlogList blogs={blogs} />}
❌ Handling Fetch Errors
jsx
Copy code
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw Error("Could not fetch data");
    }
    return res.json();
  })
  .catch(err => setError(err.message));
🧩 Making a Custom Hook
jsx
Copy code
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return { data };
};
🧭 React Router
Install React Router:

bash
Copy code
npm install react-router-dom
Setup routes:

jsx
Copy code
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
🎯 Match Routes
jsx
Copy code
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
</Switch>
🔗 Router Links
jsx
Copy code
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
🧹 useEffect Cleanup
jsx
Copy code
useEffect(() => {
  const abortCont = new AbortController();

  fetch(url, { signal: abortCont.signal });

  return () => abortCont.abort();
}, [url]);
🧾 Route Parameters
jsx
Copy code
<Route path="/blogs/:id">
  <BlogDetails />
</Route>
jsx
Copy code
const { id } = useParams();
♻️ Reusing Custom Hooks
Custom hooks allow sharing logic across components.

jsx
Copy code
const { data, isLoading, error } = useFetch(url);
📝 Controlled Inputs
jsx
Copy code
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
📤 Submit Events
jsx
Copy code
const handleSubmit = (e) => {
  e.preventDefault();
};
📮 Making a POST Request
jsx
Copy code
fetch("http://localhost:8000/blogs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(blog)
});
🔀 Programmatic Redirects
jsx
Copy code
import { useHistory } from "react-router-dom";

const history = useHistory();
history.push("/");
🗑️ Deleting Data
jsx
Copy code
fetch("http://localhost:8000/blogs/" + id, {
  method: "DELETE"
});
📄 Pages and Next Steps
Pages:
Home

Blog Details

Create Blog

404 Not Found

Next Steps:
Context API

Redux / Zustand

Authentication

Deployment (Netlify, Vercel)

TypeScript

Testing (Jest, React Testing Library)

✅ Conclusion
This project demonstrates core React concepts including components, hooks, routing, API interaction, and application structure. It provides a strong foundation for building modern front-end applications using React.

Happy Coding! 🎉⚛️

yaml
Copy code

---

If you want, I can also:
- Turn this into **portfolio-ready documentation**
- Add **screenshots & diagrams**
- Create a **professional GitHub repo structure**
- Help you **deploy this React project**

Just say the word 🔥






