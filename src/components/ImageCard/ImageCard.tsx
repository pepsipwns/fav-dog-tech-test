import Image from 'next/image'
import { ImageCardProps } from './ImageCard.types'

const ImageCard = (props: ImageCardProps) => {
  const { src, alt, size, cardBg, children } = props

  const loadedSrc = () => {
    if (!src) {
      return (
        <Image
          src="/loading.gif"
          alt="Loading..."
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      )
    } else if (src === 'success') {
      return (
        <div className="h-[500px] flex items-center justify-center font-2xl">
          Added dog to your favourites!
        </div>
      )
    } else if (src.endsWith('.mp4') || src.endsWith('.webm')) {
      return (
        <video autoPlay loop src={src} className="object-cover w-full h-full" />
      )
    } else {
      return (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="object-cover w-full h-full"
          placeholder="blur"
          blurDataURL="/loading.gif"
        />
      )
    }
  }

  return (
    <div
      className={`flex flex-col p-4 rounded transition-all transition-1s ${
        cardBg ? cardBg : 'bg-blue-100'
      }`}
    >
      <div
        className={`${size === 'sm' ? 'w-[300px]' : 'w-[500px]'} ${
          size === 'sm' ? 'h-[300px]' : 'h-[500px]'
        }`}
      >
        {loadedSrc()}
      </div>
      <div className="flex gap-4 mt-4">{children}</div>
    </div>
  )
}

ImageCard.defaultProps = {
  src: '',
  children: null,
  size: 'sm',
}

export default ImageCard
