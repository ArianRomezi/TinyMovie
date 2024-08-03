"use client";

import SearchBar from "@/module/SearchBar";
import Tvs from "@/module/Tvs";
import styles from "@/template/TvPage.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TvPage = () => {
  const pathname = usePathname();

  // const res = await fetch(
  //   `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&page=1`,
  //   {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMDg1ODU1NC4wNDY2NzEsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j3Q4KmOEK2ujHlUBHY8Tr988E-7Jnp2LT5WLM3pzuPo",
  //     },
  //   }
  // );
  // const data = await res.json();
  // console.log(data.results[1]);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.link}>
          <Link
            className={pathname === "/discover/movie" ? styles.active : null}
            href="/discover/movie"
          >
            Movies
          </Link>
          <Link
            className={pathname === "/discover/tv" ? styles.active : null}
            href="/discover/tv"
          >
            TV Shows
          </Link>
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>

      <div>
        <Tvs />
      </div>
    </div>
  );
};

export default TvPage;
