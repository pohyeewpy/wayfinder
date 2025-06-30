"use client";
import { Filter } from "@/types/filters";
import { Resource } from "@/types/resources";
import { createContext, ReactNode, useReducer, useEffect } from "react";

export const CurrentResourceContext = createContext<{
  resources: Resource[];
  filtered: Resource[];
  currentIndex: number;
  currentFilter: Filter | null;
  filter: (predicate: (r: Resource) => boolean) => void;
  setCurrentFilter: (filter: Filter) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  getCurrentResource: () => Resource | null;
}>(null!); // Non-null assertion since this context will always be provided by the provider component.

type ResourceState = {
  resources: Resource[];
  filtered: Resource[];
  currentIndex: number;
  currentFilter: Filter | null;
};

type ResourceAction =
  | { type: "SET_RESOURCES"; resources: Resource[] }
  | { type: "FILTER"; predicate: (r: Resource) => boolean }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "RESET" }
  | { type: "SET_CURRENT_FILTER"; filter: Filter };

function resourceReducer(state: ResourceState, action: ResourceAction) {
  switch (action.type) {
    case "SET_RESOURCES":
      return { ...state, resources: action.resources, filtered: action.resources, currentIndex: 0 };
    case "FILTER":
      return { ...state, filtered: state.resources.filter(action.predicate), currentIndex: 0 };
    case "SET_CURRENT_FILTER":
      return { ...state, currentFilter: action.filter, filtered: state.resources.filter((resource) =>
        action.filter.predicate(resource))};
    case "NEXT":
      return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.filtered.length - 1) };
    case "PREV":
      return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };
    case "RESET":
      return { ...state, filtered: state.resources, currentFilter: null, currentIndex: 0 };
    default:
      return state;
  }
}

export function CurrentResourceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(resourceReducer, {
    resources: [],
    filtered: [],
    currentIndex: 0,
    currentFilter: null,
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
    currentFilter: state.currentFilter,
    filter: (predicate: (r: Resource) => boolean) => dispatch({ type: "FILTER", predicate }),
    setCurrentFilter: (filter: Filter) => dispatch({ type: "SET_CURRENT_FILTER", filter }),
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