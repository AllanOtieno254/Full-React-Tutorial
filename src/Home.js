// const Home = () => {

// import { useEffect } from "react"
// import BlogList from "./BlogList"

//   const handleClick = (e) => {
//     console.log('hello ninjas', e);
//   }

//   const handleClickAgain = (name, e) => {
//     console.log('hello ' + name, e.target);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
//     </div>
//   );
// }
 
// export default Home;



// import { useState } from "react";

// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     // name = 'luigi';
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
 
// export default Home;


// import { useState } from "react";
// const Home = () => {
// const[blogs,setBlogs]= useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   return (
//     <div className="home">
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
 
// export default Home;



// import { useState } from "react";
// import BlogList from "./BlogList";
// const Home = () => {
// const[blogs,setBlogs]= useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   return (
//     <>
//       <BlogList blogs={blogs} title="All Blogs" />
//       <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />
//     </>
//   );
// }

// export default Home;




// import { useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//     </div>
//   );
// }
 
// export default Home;



//USE EFFECT HOOK

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   const [name, setName] = useState('mario');

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }

//   useEffect(() => {
//     console.log('use effect ran');
//     console.log(blogs);
//   }, [name])

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//       <button onClick={() => setName('luigi')}>change name</button>
//     </div>
//   );
// }
// export default Home;



//USING JASON SERVER

// ENDPOINTS USED IN useEffect TO FETCH DATA
// Activate 1st db by using this command to get the fetch api: npx json-server --watch data/db.json --port 8000
// output: http://localhost:8000/blogs

// ENDPOINTS
// /blog           GET  Fetch all Blogs
// /blogs/{id}     GET  Fetch single blog by id
// /blogs          POST  Add a new blog
// /blogs/{id}     DELETE  Delete a blog by id


// FETCHING DATA FROM JSON SERVER WITH useEffect

// import {useEffect, useState} from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null)

//   useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         setBlogs(data);
//       });
//   },[])

//   return (
//     <div className="home">
//       {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
//     </div>
//   );
// }
// export default Home;


// Conditional Loading Message

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isPending, setIsPending] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setBlogs(data);
//       })
//     }, 1000);
//   }, [])

//   return (
//     <div className="home">
//       { isPending && <div>Loading...</div> }
//       {blogs && <BlogList blogs={blogs} />}
//     </div>
//   );
// }



// export default Home;


// Handling Fetch Errors

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setBlogs(data);
//         setError(null);
//       })
//       .catch(err => {                    // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//     }, 1000);
//   }, [])

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> }
//     </div>
//   );
// }
 
// export default Home;




// custom hooks

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> }
//     </div>
//   );
// }
 
// export default Home;

