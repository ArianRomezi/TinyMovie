import SearchBar from "@/module/SearchBar";
import styles from "@/template/CelebritiesPage.module.css";

const CelebritiesPage = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMTU1MTg3My40MTg3NDIsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54sdSBsQs04-elroXLP07tWZNuRI9ZyKKPKytUh8f3o",
      },
    }
  );
  const data = await res.json();

  //   console.log(userId);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Celebrities List</h2>
        <SearchBar />
      </div>
      <div className={styles.main}>
        {data.results.map((i) => (
          <div key={i.id} className={styles.card}>
            <img src={`https://image.tmdb.org/t/p/w500/${i.profile_path}`} />
            <h3>{i.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebritiesPage;
