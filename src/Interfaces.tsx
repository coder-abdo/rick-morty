interface IImg {
  original: string;
}

export interface IEpisode {
  id?: number;
  number: number;
  name: string;
  season: number;
  image: IImg;
  summary: string;
  addToFav?: (episode: IEpisode) => IAction;
  favText?: string;
}
export interface IEpisodes {
  episodes: Array<IEpisode>;
}
export interface IState {
  episodes: IEpisodes | any;
  favorites: IEpisodes | any;
}
export interface IAction {
  type: string;
  payload: IEpisodes;
}
