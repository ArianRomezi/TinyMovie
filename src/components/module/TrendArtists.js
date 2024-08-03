import styles from "@/module/TrendArtists.module.css";
import Link from "next/link";

const TrendArtists = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/person/week?language=en-US",
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
  const artists = data.results.slice(1, 12);
  // console.log(artists[0]);

  return (
    <>
      <div className={styles.title}>
        <Link href="/discover/tv">
          <h2>Trending Artists</h2>
        </Link>
      </div>

      <div className={styles.main}>
        {artists.map((i) => (
          <div className={styles.container} key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${i.profile_path}`}
              alt={i.name}
            />
            <div className={styles.name}>
              <div className={styles.overview}>
                <h2>Details</h2>
              </div>
              <span>{i.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendArtists;
