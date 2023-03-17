import Navigation from '../Navigation/Navigation'
import { navLinks } from '../Navigation/Navigation.data'
import { PageContainerProps } from './PageContainer.types'

const PageContainer = (props: PageContainerProps) => {
  const { title, children } = props
  return (
    <>
      <Navigation links={navLinks} />
      <div className="flex flex-col gap-4 py-4 items-center justify-center px-10">
        <h1 className="text-4xl font-bold text-blue-900">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default PageContainer
