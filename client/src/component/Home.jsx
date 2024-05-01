
import React, { useState, useEffect,useContext } from 'react';
import moviesData from '../assets/movies-filter-react.json';
import homePhoto from '../assets/netflixteaser.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import hoMe from '../component css/Home.module.css'
import infoState from '../context/infoState';
import infoContext from '../context/infoContext';
export default function Home() {
    const [film, setFilm] = useState([]);
    // const {val}=useContext(infoContext)
    // console.log(val)
    useEffect(() => {

        setFilm(moviesData);
    }, []);

    return (
        <div className={hoMe.container}>
            <div className={hoMe.homimg}>
                {/* <img src={homePhoto} alt="" srcset="" width='100%' height='600px' className={hoMe.homimg}/> */}
                <div className={hoMe.text}>
                    <h1>Unlimited movies,Tv <br />
                        shows, and more.</h1>
                    <h4>Watch Anywhere,Cancel Anytime</h4>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                </div>
                <div className={hoMe.search}>
                    <input type="text" name="" id="" /><button className={hoMe.searchbtn}>Search</button>
                </div>
            </div>
            <h1 style={{ textAlign: 'center' }}>Movie List</h1>
            <div className={hoMe.box}>
                {film.map((item, index) => (
                    <>
                        <div key={index} className={hoMe.item}>
                            {console.log(index)}
                            <img src={item.moviemainphotos[0]} alt={item.movietitle} style={{ width: "250px" }} className={hoMe.moviephoto} />
                            {index == 8 ?
                                <div className={hoMe.hori}>
                                    {film.map((item, index) => (
                                        <div className={hoMe.horizontal} style={{ display: 'flex' }}>
                                            <img src={item.moviemainphotos[0]} alt={item.movietitle} style={{ width: "250px" }} className={hoMe.moviephoto} />
                                        </div>))}
                                </div> : ""}
                            <h2>{item.movietitle}</h2>
                            {/* <p>Languages: {item.movielanguages.join(", ")}</p> */}
                            <p>Genres: {item.moviegenres.join(", ")}</p>
                            {localStorage.setItem('genres', JSON.stringify(item.moviegenres))}
                            <Link to='/detail'
                                className={hoMe.view}>View More</Link>
                            
                        </div>

                    </>

                ))}
            </div>
        </div>
    );
}
