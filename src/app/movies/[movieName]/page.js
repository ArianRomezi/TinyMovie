import MovieDetailPage from "@/template/MovieDetailPage";

const MovieName = async ({ params }) => {
  const id = params.movieName;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMjA3MTY2OS40NzE1NjIsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjlhBXIdM4rH86mfQRBwtJ0yxHMjCmdHjvQ15A_d-gA",
      },
    }
  );
  const data = await res.json();

  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlhMzU1YjZhYWVmMWFmMTU5OTkwZmVhYzk4ZDIyMyIsIm5iZiI6MTcyMjA3MTY2OS40NzE1NjIsInN1YiI6IjY2OTBkZGQ1OTcxNDgyMTkwYmUxMTA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjlhBXIdM4rH86mfQRBwtJ0yxHMjCmdHjvQ15A_d-gA",
      },
    }
  );
  const data2 = await res2.json();
  const recomendation = data2.results.slice(0, 6);
  // console.log("new console.log ");
  // console.log(data2.results[(0, 1)]);
  return <MovieDetailPage data={data} recomendation={recomendation} />;
};

export default MovieName;
