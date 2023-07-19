import React, { useContext, useState, useEffect } from 'react';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//axios
import axios from 'axios';

//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

//slider
import Slider from 'react-slick';

//context
import { MovieContext } from '../context/movie.context';
import { useParams } from 'react-router';



const MoviePage = () => {
    const { movie } = useContext(MovieContext);
    const [cast ,setCast] = useState([]);
    const [similarMovies, setsimilarMovies] = useState([]);
    const [recommendedMovies, setrecommendedMovies] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestsimilarMovies = async () => {
            const getsimilarMovies = await axios.get(`movie/${id}/similar`);
            setsimilarMovies(getsimilarMovies.data.results);
        };

        requestsimilarMovies();

    }, [id]);
    
    useEffect(() => {
        const requestrecommendedMovies = async () => {
            const getrecommendedMovies = await axios.get(`movie/${id}/recommendations`);
            setrecommendedMovies(getrecommendedMovies.data.results);
        };

        requestrecommendedMovies();

    }, [id]);



    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
    };
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
    };
    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
                    <p>{movie.overview}</p>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h1 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h1>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="h-8 w-8">
                                <FaCcVisa className="h-full w-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600">Get Flat 10% festive discount on Visa Cards</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="h-8 w-8">
                                <FaCcApplePay className="h-full w-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">Get Flat 10% festive discount on Filmy Cards</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
                    
                        <Slider {...settingsCast}>
                        {cast.map((castdata) => 
                            <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} castName={castdata.original_name} role={castdata.character} />
                        )}
                        </Slider>
                    
                </div>

                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider config={settings} images={similarMovies} title="You Might Also like.." isDark={false} />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider config={settings} images={recommendedMovies} title="BMS XCLUSIV" isDark={false} />
                </div>
                
            </div>


        </>
    );
};

export default MoviePage;

