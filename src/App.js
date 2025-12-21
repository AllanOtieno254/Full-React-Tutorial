// import './App.css';

// function App() {
//   const title = "Welcome to the Dojo Blog";
//   const likes = 50;
//   const isPending = false;
//   const person = { name: 'Jane', age: 32 };
//   const link = "http://www.google.com";

//   return (
//     <div className="App">
//         <div className="content">
//           <h1>{title}</h1>
//           <p>Likes: {likes}</p>
//           <p>{isPending ? 'Loading...' : 'Data loaded'}</p>
//           <p>{person.name} is {person.age} years old.</p>
//           <a href={link}>Google</a>
//           <p>{"Hello world"}</p>
//           <p>{[1,2,3,4]}</p>
//           <p>{Math.floor(Math.random()*5)}</p>
//           <h2>App component</h2>
//         </div>
//     </div>
//   );
// }

// export default App;



// import Navbar from './Navbar';
// import Home from './Home';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//         <div className="content">
//           <Home />
//         </div>
//     </div>
//   );
// }

// export default App;



// routes
// The React Router. To link different pages together
// version installed 5 : npm install react-router-dom@5
// import Navbar from './Navbar';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Create from './Create';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/create">
//               <Create />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



// ROUTE PARAMETERS
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;