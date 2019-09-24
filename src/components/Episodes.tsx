import * as React from "react";
import Episode from "./Episode";
import { IEpisode, IEpisodes, IAction } from "../Interfaces";
import { Store } from "../Store";
const Episodes = (props: IEpisodes): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const AddToFav = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };
  return (
    <section className="episodes">
      {props.episodes.map((episode: IEpisode) => (
        <Episode
          key={episode.id}
          {...episode}
          addToFav={() => AddToFav(episode)}
          favText={
            state.favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "unfav"
              : "fav"
          }
        />
      ))}
    </section>
  );
};
export default Episodes;
