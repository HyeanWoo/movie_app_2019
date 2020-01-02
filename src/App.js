import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "mina1",
    image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99814B3A5BA06B1A33"
  
  },
  {
    id:2,
    name: "mina2",
    image: "https://t1.daumcdn.net/cfile/tistory/99A183425DB047C813",
    rating: 4.8
  },
  {
    id:3,
    name: "mina3",
    image: "https://t1.daumcdn.net/cfile/tistory/993F8E375DD7988B26",
    rating: 3.7
  },
  {
    id:4,
    name: "mina4",
    image: "https://t1.daumcdn.net/cfile/tistory/998798425DB047CC0A",
    rating: 4.3
  },
  {
    id:5,
    name: "mina5",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjFfNyAg/MDAxNDg1MDAxODk5NDQ0.gSFM1znAEe6zdc2hz9qJjQ2NtvmhOLY0CqapkuVp_akg.dLX9eKeSOEw6MDcougW6qnkctyf2USM9_dlrXHzxjKkg.GIF.mi-me/%EB%A1%9C%EC%8A%A4%ED%8A%B8%ED%83%80%EC%9E%84-3%ED%99%94--2%3D-.gif?type=w800",
    rating: 3.9
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
