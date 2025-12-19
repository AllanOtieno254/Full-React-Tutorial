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



import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
          <Home />
        </div>
    </div>
  );
}

export default App;

