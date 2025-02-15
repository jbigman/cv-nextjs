import Image from 'next/image'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import photo from '../../public/img/avatar.png'
import cv from '../json/curiculum.json'
import sidebarStyles from './header.module.scss'
import Block from './block'
import type { ReactElement } from 'react'

const SideBarLetter = () => {

  const Element = (props: { title: ReactElement, children: ReactElement | ReactElement[] }) => {
    return (
      <div className={sidebarStyles.element}>
        <div className={sidebarStyles.title}>
          {props.title}
        </div>
        <div className={sidebarStyles.content}>
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.imageContainer}>
        <Image
          src={photo}
          alt="Photo de profil"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1>{cv.firstName} {cv.lastName}</h1>
      </div>
      <div className={sidebarStyles.right}>
        <Block title={'Fullstack Developer'}>
          <Element title={<FiMapPin />}>
            <div> {cv.address}</div>
          </Element>
          <Element title={<FiMail />}>
            <a href={`mailto:${cv.email}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.email}
            </a>
          </Element>
          <Element title={<FiPhone />}>
            <a href={`tel:${cv.phone}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.phone}
            </a>
          </Element>

        </Block>
      </div>
    </div>
  )
}

export default SideBarLetter
