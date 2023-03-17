import Link from 'next/link'
import React from 'react'
import { NavigationProps } from './Navigation.types'

const Navigation = (props: NavigationProps) => {
  const { links } = props
  return (
    <div className="flex bg-blue-300 gap-2 p-2 font-semibold">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link className="hover:text-orange-700" href={link.path}>
            {link.name}
          </Link>
          {index !== links.length - 1 && '|'}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Navigation
