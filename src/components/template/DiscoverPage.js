import SearchBar from "@/module/SearchBar";
import Link from "next/link";
import React from "react";
import styles from "@/template/DiscoverPage.module.css";
import MoviePage from "@/template/MoviePage";

const DiscoverPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.link}>
          <Link href="/discover/movie">Movies</Link>
          <Link href="/discover/tv">TV Shows</Link>
        </div>

        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>

      <MoviePage />
    </div>
  );
};

export default DiscoverPage;
