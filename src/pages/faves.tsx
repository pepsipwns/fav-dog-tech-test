import Button from '@/components/Button/Button'
import ImageCard from '@/components/ImageCard/ImageCard'
import PageContainer from '@/components/PageContainer/PageContainer'
import { useDogContext } from '@/context/DogContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Faves = () => {
  const { favouriteDogs, removeDogFromFavourites, clearFavourites } =
    useDogContext()

  const [faves, setFaves] = useState<string[]>([])

  useEffect(() => {
    setFaves(favouriteDogs)
  }, [favouriteDogs])

  return (
    <PageContainer title="Favourite Dogs">
      {faves && faves.length <= 0 && (
        <div className="text-center">
          <h1>You have no favourites yet! Go and add some favourite dogs!</h1>
          <Link className="font-bold underline" href="/">
            Go home
          </Link>
        </div>
      )}
      {faves && faves.length > 8 && (
        <div className="self-end">
          <Button
            title="Clear all favourites"
            onClick={() => clearFavourites()}
          />
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {faves &&
          faves.map((fave, index) => (
            <ImageCard key={index} src={fave} alt="1">
              <Button
                title="Remove dog from favourites"
                onClick={() => removeDogFromFavourites(fave)}
              />
            </ImageCard>
          ))}
      </div>
    </PageContainer>
  )
}

export default Faves
