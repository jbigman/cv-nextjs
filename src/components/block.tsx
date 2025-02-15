import type { CSSProperties, ReactElement } from 'react'
import styles from './block.module.scss'

const Block = (props: {
  title: string
  children: ReactElement | ReactElement[]
  style?: CSSProperties
}) => {
  return (
    <div className={styles.main} style={props.style}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

export default Block
