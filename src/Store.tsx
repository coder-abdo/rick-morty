import * as React from "react";
import { IState, IAction } from "./Interfaces";

const initialState: IState = {
  episodes: [],
  favorites: []
};
function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}
export const Store = React.createContext<IState | any>(initialState);
export default function StoreProvider(props: Element): JSX.Element {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(
    reducer,
    initialState
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
