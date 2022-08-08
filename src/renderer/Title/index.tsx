import React from 'react'
import indexStyles from './index.scss'

interface IProps {
  text: string
  styles?: React.CSSProperties
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles} className={indexStyles.title}>{text}</div>
  )
}

export default Title