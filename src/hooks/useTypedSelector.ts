import { useSelector,TypedUseSelectorHook } from "react-redux";

import { RootState } from "../states/reducers";
//this is used for redux typing while returning the state
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;