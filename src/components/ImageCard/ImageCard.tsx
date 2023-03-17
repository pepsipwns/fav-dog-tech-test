import Image from 'next/image'
import { ImageCardProps } from './ImageCard.types'

const ImageCard = (props: ImageCardProps) => {
  const { src, alt, size, children } = props

  const pixelSize = size === 'sm' ? 350 : 600

  return (
    <div className="flex flex-col p-4 bg-blue-100 rounded w-fit">
      <div className={`w-[${pixelSize}px] h-[${pixelSize}px]`}>
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex gap-4 mt-4">{children}</div>
    </div>
  )
}

ImageCard.defaultProps = {
  children: null,
  size: 'sm',
}

export default ImageCard
