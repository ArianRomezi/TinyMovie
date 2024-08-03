import styles from "@/module/TrendMovies.module.css";
import Link from "next/link";

const TrendMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMTM3NjIxOC43NTA0Mywic3ViIjoiNjY5MGRkZDU5NzE0ODIxOTBiZTExMDY0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.s1vM3k_gsIJ2ULaOs0KXMNxDfHiFr3EcYVc713oCISg",
      },
    }
  );
  const data = await res.json();
  const movies = data.results.slice(1, 12);
  // console.log(movies[1]);
  return (
    <>
      <div className={styles.title}>
        <Link href="/discover/tv">
          <h2>Trending Movies</h2>
        </Link>
      </div>

      <div className={styles.main}>
        {movies.map((i) => (
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
    </>
  );
};

export default TrendMovies;
