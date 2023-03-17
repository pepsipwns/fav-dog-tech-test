import Button from '@/components/Button/Button'
import ImageCard from '@/components/ImageCard/ImageCard'
import PageContainer from '@/components/PageContainer/PageContainer'

const Home = () => {
  return (
    <PageContainer title="Is this one of your favourite dogs?">
      <ImageCard src="/dog-example.jpg" alt="1" size="lg">
        <Button
          title="Add dog to favourites"
          onClick={() => console.log('push button')}
        />
        <Button
          title="Show a new dog"
          onClick={() => console.log('push button')}
        />
      </ImageCard>
    </PageContainer>
  )
}

export default Home
