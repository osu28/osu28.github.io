import React from "react";
import { useState } from "react";


export const Projects = () => {
  let project;
  let next;
  let back;
  const [count, setCount] = useState(0);
  if (count === 0) {

    next = <button className="button-19" onClick={() => setCount(count + 1)}>Next</button>
    back = <button className="button-19" onClick={() => setCount(count - 1)}>Back</button>
  } else if (count === 1) {

    next = <button className="button-19" onClick={() => setCount(0)}>Next</button>
  }
  return (
    <div className="projects">
      {back}{project}{next}
    </div>
  );
};