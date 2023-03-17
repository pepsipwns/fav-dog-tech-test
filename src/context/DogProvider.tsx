import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import { ReactNode, useState } from 'react'
import { DogAppContext } from './DogContext'

type DogProviderProps = {
  children: ReactNode
}

export default function DogProvider({ children }: DogProviderProps) {
  const [favouriteDogs, setFavouriteDogs] = useState<string[]>(
    getLocalStorage('favouriteDogs') || [],
  )

  const addDogToFavourites = (dog: string) => {
    setFavouriteDogs([...favouriteDogs, dog])
    setLocalStorage('favouriteDogs', [...favouriteDogs, dog])
  }

  const removeDogFromFavourites = (dog: string) => {
    setFavouriteDogs(
      favouriteDogs.filter((favouriteDog) => favouriteDog !== dog),
    )
    setLocalStorage(
      'favouriteDogs',
      favouriteDogs.filter((favouriteDog) => favouriteDog !== dog),
    )
  }

  const clearFavourites = () => {
    setFavouriteDogs([])
    setLocalStorage('favouriteDogs', [])
  }

  const value = {
    favouriteDogs,
    addDogToFavourites,
    removeDogFromFavourites,
    clearFavourites,
  }
  return (
    <DogAppContext.Provider value={value}>{children}</DogAppContext.Provider>
  )
}
