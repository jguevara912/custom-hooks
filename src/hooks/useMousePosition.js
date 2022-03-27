import {useState, useEffect} from 'react'

const initialPosition = {x:null, y:null}

function useMousePosition() {
    const [position, setPosition] = useState(initialPosition)

    useEffect(() => {
        const handleMouseMove = (e)=>{
            const {clientX, clientY} = e
            setPosition({
                x:clientX,
                y:clientY
            })
        }
        window.addEventListener('mousemove',handleMouseMove)
    },[])

  return position
}

export default useMousePosition