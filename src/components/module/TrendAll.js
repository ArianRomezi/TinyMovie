"use client";

import { useEffect, useState } from "react";

import styles from "@/module/TrendAll.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const TrendAll = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMTA1MTM2NC41NjU2NDYsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rCt1w5Sva0xktpJFjMfW3mxJ5hNuzcuqQJ07fX9tyzY",
          },
        }
      );
      const data = await res.json();
      setTrend(data.results.slice(1, 8));
      // console.log(data.results.slice(0, 9));
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination
        modules={([Pagination], [Navigation])}
      >
        {trend.map((i) => (
          <SwiperSlide key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${i.backdrop_path}`}
              alt={i.name}
            />
            <div className={styles.name}>
              <h2>{i.name || i.title}</h2>
              <div className={styles.button}>
                <button className={styles.btn1}>+</button>
                <button className={styles.btn2}>Watch Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendAll;
