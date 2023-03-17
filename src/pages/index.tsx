import Button from '@/components/Button/Button'
import ImageCard from '@/components/ImageCard/ImageCard'
import PageContainer from '@/components/PageContainer/PageContainer'
import { useEffect, useState } from 'react'

const Home = () => {
  const [dog, setDog] = useState(undefined)

  const fetchDog = async () => {
    setDog(undefined)
    try {
      const response = await fetch('/api/dog')
      const data = await response.json()
      console.log('data', data)
      setDog(data.src)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <PageContainer title="Is this one of your favourite dogs?">
      <ImageCard src={dog} alt="Dog Image" size="lg">
        <Button
          title="Add dog to favourites"
          onClick={() => console.log('push button')}
        />
        <Button title="Show a new dog" onClick={fetchDog} />
      </ImageCard>
    </PageContainer>
  )
}

export default Home
