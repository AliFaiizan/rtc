import { useSelector,TypedUseSelectorHook } from "react-redux";

import { RootState } from "../states/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;