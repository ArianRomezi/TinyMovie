"use client";

import Movies from "@/module/Movies";
import Link from "next/link";
import styles from "@/template/MoviePage.module.css";
import SearchBar from "@/module/SearchBar";
import { usePathname } from "next/navigation";

const MoviePage = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.link}>
          <Link
            className={
              pathname === "/discover/movie" || "/discover"
                ? styles.active
                : null
            }
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
        <Movies />
      </div>
    </div>
  );
};

export default MoviePage;
