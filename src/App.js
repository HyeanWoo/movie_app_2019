import React from 'react';

function Food({ favourite }) {
  return <h1>I like {favourite}</h1>;
}

const foodILike = [
  {
    name: "mina1",
    image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99814B3A5BA06B1A33"
  },
  {
    name: "mina2",
    image: "https://t1.daumcdn.net/cfile/tistory/99A183425DB047C813"
  },
  {
    name: "mina3",
    image: "https://t1.daumcdn.net/cfile/tistory/993F8E375DD7988B26"
  },
  {
    name: "mina4",
    image: "https://t1.daumcdn.net/cfile/tistory/998798425DB047CC0A"
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
