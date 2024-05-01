import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MovieDetail() {
    const location = useLocation();

  //   const abc=JSON.parse(localStorage.getItem('genres'));
  // console.log(abc)
    return (
        <div>
            <h2>Movie Detail</h2>
            {/* <p>Genres: {genres.join(", ")}</p> */}
            
        </div>
    );
}