"use client";
import { Resource } from "@/types/resources";
import { createContext, ReactNode, useReducer, useEffect } from "react";

export const CurrentResourceContext = createContext<{
  resources: Resource[];
  filtered: Resource[];
  currentIndex: number;
  filter: (predicate: (r: Resource) => boolean) => void;
  filterByTag: (tag: string) => void;   
  next: () => void;
  prev: () => void;
  reset: () => void;
  getCurrentResource: () => Resource | null;
}>(null!); // Non-null assertion since this context will always be provided by the provider component.

type ResourceState = {
  resources: Resource[];
  filtered: Resource[];
  currentIndex: number;
};

type ResourceAction =
  | { type: "SET_RESOURCES"; resources: Resource[] }
  | { type: "FILTER"; predicate: (r: Resource) => boolean }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "RESET" };

function resourceReducer(state: ResourceState, action: ResourceAction) {
  switch (action.type) {
    case "SET_RESOURCES":
      return { ...state, resources: action.resources, filtered: action.resources, currentIndex: 0 };
    case "FILTER":
      return { ...state, filtered: state.resources.filter(action.predicate), currentIndex: 0 };
    case "NEXT":
      return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.filtered.length - 1) };
    case "PREV":
      return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };
    case "RESET":
      return { ...state, filtered: state.resources, currentIndex: 0 };
    default:
      return state;
  }
}

export function CurrentResourceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(resourceReducer, {
    resources: [],
    filtered: [],
    currentIndex: 0,
  });

  useEffect(() => {
    fetch("/resources.json")
      .then((res) => res.json())
      .then((resources) => {
        dispatch({ type: "SET_RESOURCES", resources });
      });
  }, []);

  const contextValue = {
    resources: state.resources,
    filtered: state.filtered,
    currentIndex: state.currentIndex,
    filter: (predicate: (r: Resource) => boolean) => dispatch({ type: "FILTER", predicate }),
    filterByTag: (tag: string) =>
      dispatch({
        type: "FILTER",
        predicate: (resource) =>
          Array.isArray(resource.tags) && resource.tags.includes(tag),
    }),
    next: () => dispatch({ type: "NEXT" }),
    prev: () => dispatch({ type: "PREV" }),
    reset: () => dispatch({ type: "RESET" }),
    getCurrentResource: () => {
      if (state.currentIndex < 0 || state.currentIndex >= state.filtered.length) return null;
      return state.filtered[state.currentIndex];
    },
  };

  return (
    <CurrentResourceContext.Provider value={contextValue}>
      {children}
    </CurrentResourceContext.Provider>
  );
}