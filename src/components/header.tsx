import Image from 'next/image'
import type { ReactElement } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import photo from '../../public/img/avatar.png'
import cv from '../json/curiculum.json'
import Block from './block'
import sidebarStyles from './header.module.scss'
import NetWork from './network'

const Header = () => {
  const Element = (props: { title: ReactElement; children: ReactElement }) => {
    return (
      <div className={sidebarStyles.element}>
        <div className={sidebarStyles.content}>{props.children}</div>
      </div>
    )
  }

  return (
    <div className={sidebarStyles.sidebar}>
      <div className="column">
        <NetWork
          data={[
            {
              type: 'string',
              icon: 'linkedin',
              name: 'LinkedIn.com',
              subtitle: '/in/jeremiegambin',
              link: 'https://www.linkedin.com/in/jeremiegambin/',
            },
            {
              type: 'string',
              icon: 'cg',
              name: 'CodinGame.com',
              subtitle: '/jBigman',
              link: 'https://www.codingame.com/profile/262698c2b361339f78efcf6f014e5b231298241',
            },
            {
              type: 'string',
              icon: 'github',
              name: 'Github.com',
              subtitle: '/jBigman',
              link: 'https://github.com/jbigman',
            },
          ]}
        />
      </div>
      <div className={sidebarStyles.imageContainer}>
        <Image
          src={photo}
          alt="Photo de profil"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1>
          {cv.firstName} {cv.lastName}
        </h1>
      </div>
      <div className={sidebarStyles.right}>
        <div className={sidebarStyles.list}>
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
        </div>
        <Block title={cv.title}>
          <ul style={{ padding: '12px', fontSize: '14px' }}>
            {cv.punchLines.map((punchline) => {
              return (
                <li style={{ lineHeight: '20px' }} key={punchline}>
                  {punchline}
                </li>
              )
            })}
          </ul>
        </Block>
      </div>
    </div>
  )
}

export default Header
