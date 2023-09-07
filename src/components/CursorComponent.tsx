import React from 'react'
import {Cursor} from 'react-simple-typewriter'

type Props = {}

const CursorComponent = (props: Props) => {
  return (
    <Cursor cursorBlinking={true}/>
  )
}

export default CursorComponent