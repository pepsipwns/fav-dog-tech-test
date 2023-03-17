import Image from 'next/image'
import { ImageCardProps } from './ImageCard.types'

const ImageCard = (props: ImageCardProps) => {
  const { src, alt, size, children } = props

  return (
    <div className="flex flex-col p-4 bg-blue-100 rounded">
      <div
        className={`${size === 'sm' ? 'w-[300px]' : 'w-[500px]'} ${
          size === 'sm' ? 'h-[300px]' : 'h-[500px]'
        }`}
      >
        {!src ? (
          <Image
            src="/loading.gif"
            alt="Loading..."
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        ) : src.endsWith('.mp4') || src.endsWith('.webm') ? (
          <video
            autoPlay
            loop
            src={src}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            className="object-cover w-full h-full"
            placeholder="blur"
            blurDataURL="/loading.gif"
          />
        )}
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
