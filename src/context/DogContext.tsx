import { createContext, useContext } from 'react'

type DogContext = {
  favouriteDogs: string[]
  addDogToFavourites: (dog: string) => void
  removeDogFromFavourites: (dog: string) => void
  clearFavourites: () => void
}

const DogContextDefaultValues: DogContext = {
  favouriteDogs: [],
  addDogToFavourites: () => {},
  removeDogFromFavourites: () => {},
  clearFavourites: () => {},
}

export const DogAppContext = createContext<DogContext>(DogContextDefaultValues)

export function useDogContext() {
  return useContext(DogAppContext)
}
