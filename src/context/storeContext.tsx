import React, {
  createContext,
  ReactElement,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {LiveStore, UpdateManager, fetcher, graph } from "rdflib";
import {solidLogicSingleton} from 'solid-logic'

export interface IStoreContext {
  solidLogicSingleton: any
}

export const StoreContext = createContext<IStoreContext>({
  solidLogicSingleton: undefined
});

export interface IStoreProvider {
  children: ReactNode;
  solidLogicSingleton: any;
  onError?: (error: Error) => void;
}

// make a function to set the default store
const setDefaultStore = () => {
  return solidLogicSingleton
}

export const StoreProvider = ({ children }: IStoreProvider): ReactElement => {
  const [ solidLogicSingleton, setStore ] = useState(setDefaultStore())
  console.log("STORE OBJECT")
  console.dir(solidLogicSingleton)
  useEffect(() => {
      if (!solidLogicSingleton) {
          // @ts-ignore
          setStore(solidStore)
      }

  }, [solidLogicSingleton]);

  return (
      <StoreContext.Provider
          value={{
              solidLogicSingleton,
          }}
      >
          {children}
      </StoreContext.Provider>
  );

}
