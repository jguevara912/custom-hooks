// import {useEffect, useState} from 'react'
import useMousePosition from '../hooks/useMousePosition'



function MouseApp() {

    const position = useMousePosition()

    const background = position.x < window.innerWidth/2 ? 'pink': 'red'

  return (
    <div style={{background, height: '100vh'}}>
        <pre>
            {JSON.stringify(position, null, 2)}
        </pre>
    </div>
  )
}

export default MouseApp