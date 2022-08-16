import './App.css';
import React, { useState, useEffect } from 'react';
// import { DropdownList } from "./components/DropdownList";
// import '@progress/kendo-theme-default/dist/all.css';
import { Intro } from "./components/Intro";
import { About } from "./components/About"; 
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";

function App() {
  useEffect(() => {
    document.title = "Oscar"
  }, [])
  const [pageNum, setCount] = useState(0)
  var content;
  if (pageNum === 0) {
    content = <Intro />
  } else if (pageNum === 1) {
    content = <About />
  } else if (pageNum === 2) {
    content = <Work />
  } else if (pageNum === 3) {
    content = <Projects />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
              <div className="logo">
                  <img src={require("./assets/logo-transparent.png")} onClick={() => setCount(0)} className='fav' alt='icon'></img>
              </div>
              <div className="buttons">
                  <button class="button-27" onClick={() => setCount(0)}>Home</button>
                  <button class="button-27" onClick={() => setCount(1)}>About</button>
                  <button class="button-27" onClick={() => setCount(2)}>Work</button>
                  <button class="button-27" onClick={() => setCount(3)}>Projects</button>
              </div>
          </div>
          <div className="content">
            {content}
          </div>
      </header>
    </div>
  );
}

export default App;
