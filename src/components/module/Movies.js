"use client";

import styles from "@/module/Movies.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMDg1ODU1NC4wNDY2NzEsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j3Q4KmOEK2ujHlUBHY8Tr988E-7Jnp2LT5WLM3pzuPo",
          },
        }
      );
      const data = await res.json();
      setMovie(data.results);
    };
    fetchMovies();
  }, []);

  //   setMovie(data);
  // console.log(data.results[1]);

  return (
    <div className={styles.main}>
      {movie.map((i) => (
        <Link href={`/movies/${i.id}`} className={styles.container} key={i.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}
            alt={i.title}
          />
          <div className={styles.name}>
            <span>{i.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;
