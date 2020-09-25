import React from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useTVFetch } from "./hooks/useTVFetch";
import TVInfo from "./elements/TVInfo";

const TVShows = ({ match }) => {
  const [tvshow, loading, error] = useTVFetch(match.params.tvshowId);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation tvshowName={tvshow.name} isTV />
      <TVInfo tvshow={tvshow} isTV />
      <MovieInfoBar
        numOfEps={tvshow.number_of_episodes}
        numOfSeas={tvshow.number_of_seasons}
        status={tvshow.status}
        isTV
      />
      <Grid header="Actors">
        {tvshow.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default TVShows;
