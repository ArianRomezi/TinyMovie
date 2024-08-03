import TrendAll from "@/module/TrendAll";
import TrendArtists from "@/module/TrendArtists";
import TrendMovies from "@/module/TrendMovies";
import TrendTvs from "@/module/TrendTvs";

const HomePage = () => {
  return (
    <div>
      <div>
        <TrendAll />
      </div>
      <div>
        <TrendMovies />
      </div>
      <div>
        <TrendTvs />
      </div>
      <div>
        <TrendArtists />
      </div>
    </div>
  );
};

export default HomePage;
