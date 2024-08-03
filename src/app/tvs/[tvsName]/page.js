import TvDetailPage from "@/template/TvDetailPage";
import React from "react";

const TvName = async ({ params }) => {
  const id = params.tvsName;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-Us`,
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
  // console.log(data);

  const res2 = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations`,
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

  return <TvDetailPage data={data} recomendation={recomendation} />;
};

export default TvName;
