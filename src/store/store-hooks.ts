import { useSelector, useDispatch, type TypedUseSelectorHook } from "react-redux";
import { type SelectorType, type DispatchType } from "./store"





type DispatchTypeFunction = () => DispatchType


export const useCartSelector: TypedUseSelectorHook<SelectorType> = useSelector;
export const useStoreDispatch: DispatchTypeFunction = useDispatch;
