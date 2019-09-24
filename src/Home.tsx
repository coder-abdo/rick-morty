import * as React from "react";
import { Store } from "./Store";
const Episodes = React.lazy<any>(() => import("./components/Episodes"));
const Spinner: React.FC = (): JSX.Element => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
const URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
const Home: React.FC = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const FetchingData = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  React.useEffect(() => {
    state.episodes.length === 0 && FetchingData();
    //eslint-disable-next-line
  }, []);
  //console.log(state);
  return (
    <React.Suspense fallback={<Spinner />}>
      <Episodes episodes={state.episodes} />
    </React.Suspense>
  );
};
export default Home;
