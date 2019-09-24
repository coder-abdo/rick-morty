import * as React from "react";
import { Store } from "./Store";
const Episodes = React.lazy<any>(() => import("./components/Episodes"));
const Spinner = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
const Favorites: React.FC = (): JSX.Element => {
  const { state } = React.useContext(Store);
  if (state.favorites.length > 0) {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Episodes episodes={state.favorites} />
      </React.Suspense>
    );
  } else {
    return (
      <h1 className="display-1 text-capitalize mt-4 text-danger">
        there is no picked Favs episodes
      </h1>
    );
  }
};
export default Favorites;
