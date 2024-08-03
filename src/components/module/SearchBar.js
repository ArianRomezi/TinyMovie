"use client";

import { CiSearch } from "react-icons/ci";
import styles from "@/module/SearchBar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // console.log(result);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=true&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMTgxMTcwNS43MTY5ODcsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yi7FekTaNCzx9ej_gywvV4g1o-du2sSQQYReCTOcY-g",
          },
        }
      );
      const data = await res.json();
      setResult(data.results);
    };
    fetchData();
  }, [search]);

  // console.log(result);
  return (
    <>
      <div className={styles.search}>
        <CiSearch />
        <input type="text" placeholder="Search" onChange={changeHandler} />
      </div>
      {result.length === 0 ? null : (
        <div className={styles.search_box}>
          {result.map((i) => (
            <Link
              href={`/${i.media_type}s/${i.id}`}
              className={styles.search_box_items}
              key={i.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  i.poster_path || i.profile_path
                }`}
              />
              <span>{i.name || i.title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
