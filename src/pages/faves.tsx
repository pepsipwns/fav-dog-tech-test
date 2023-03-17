import Button from '@/components/Button/Button'
import ImageCard from '@/components/ImageCard/ImageCard'
import { favDogsTestList } from '@/components/ImageCard/ImageCard.data'
import PageContainer from '@/components/PageContainer/PageContainer'
import { useState } from 'react'

const Faves = () => {
  const [faves, setFaves] = useState(favDogsTestList)

  return (
    <PageContainer title="Favourite Dogs">
      <div className="flex gap-4">
        {faves &&
          faves.map((fave, index) => (
            <ImageCard key={index} src={fave.src} alt="1">
              <Button
                title="Remove dog from favourites"
                onClick={() => console.log('push button')}
              />
            </ImageCard>
          ))}
      </div>
    </PageContainer>
  )
}

export default Faves
