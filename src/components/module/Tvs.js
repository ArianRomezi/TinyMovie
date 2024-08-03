"use client";

import styles from "@/module/Tvs.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Tvs = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    const fetchtvs = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&page=1`,
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
      setTv(data.results);
    };
    fetchtvs();
  }, []);

  // console.log(data.results[1]);
  return (
    <div className={styles.main}>
      {tv.map((i) => (
        <Link href={`/tvs/${i.id}`} className={styles.container} key={i.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}
            alt={i.name}
          />
          <div className={styles.name}>
            <span>{i.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tvs;
