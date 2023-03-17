import Button from '@/components/Button/Button'
import ImageCard from '@/components/ImageCard/ImageCard'
import PageContainer from '@/components/PageContainer/PageContainer'
import { useDogContext } from '@/context/DogContext'
import { useEffect, useState } from 'react'

const Home = () => {
  const [dog, setDog] = useState<string>('')
  const [cardBg, setCardBg] = useState('bg-blue-100')
  const { favouriteDogs, addDogToFavourites } = useDogContext()

  const fetchDog = async () => {
    setDog('')
    try {
      const response = await fetch('/api/dog')
      const data = await response.json()
      setDog(data.src)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDog()
  }, [])

  const addDog = (dog: string) => {
    addDogToFavourites(dog)
    setCardBg('bg-green-200')
    setDog('success')
    setTimeout(() => {
      setCardBg('bg-blue-100')
      fetchDog()
    }, 800)
  }

  return (
    <PageContainer title="Is this one of your favourite dogs?">
      <ImageCard src={dog} alt="Dog Image" size="lg" cardBg={cardBg}>
        <Button
          disabled={dog === 'success'}
          title="Add dog to favourites"
          onClick={() => {
            dog && addDog(dog)
          }}
        />
        <Button title="Show a new dog" onClick={fetchDog} />
      </ImageCard>
    </PageContainer>
  )
}

export default Home
