import styles from "@/template/MovieDetailPage.module.css";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { Reducer } from "src/function/shortenNumber";


const MovieDetailPage = ({
  data: {
    title,
    poster_path,
    backdrop_path,
    genres,
    origin_country,
    overview,
    release_date,
    vote_average,
  },
  recomendation,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.back_ground}>
        <img
          className={styles.back_ground_img}
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        />
        <div className={styles.details}>
          <div className={styles.image}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <div>{Reducer(vote_average)}</div>
          </div>
          <div className={styles.details_text}>
            <h1>{title}</h1>
            <p>Overview : {overview}</p>
            <div className={styles.genre}>
              <span>Genre: </span>
              {genres.map((g) => (
                <div key={g.id}>
                  <ul>
                    <li>{g.name},</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.country}>
              <CiFlag1 />
              <p>Country : {origin_country}</p>
            </div>

            <div className={styles.date}>
              <CiCalendarDate />
              <p>Release Date : {release_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recomend_container}>
        <h2>Recomendation Movies</h2>
        <div className={styles.main}>
          {recomendation.map((i) => (
            <Link
              href={`/movies/${i.id}`}
              className={styles.container}
              key={i.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}
                alt={i.title}
              />
              <div className={styles.name}>
                <div className={styles.overview}>{i.overview}</div>
                <span>{i.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
