import {useState, useRef} from 'react'

// Imgs
import Shrek from '../Img/shrek.jpg'

// Styles
import '../Style/DeclarationStyle.css'

interface Obje {
  buf: Boolean
}

const Declaration = ({buf}: Obje) => {
  const [si, setSi] = useState(false)
  const buttonRef = useRef<any>()

  const HandleClick = () => {
    setSi(true)
  }

  const HandleMouse = () => {
    const button = buttonRef.current;

    button.style.position = 'absolute'
    button.style.top = (Math.random() * window.innerHeight) + 'px';
    button.style.left = (Math.random() * window.innerWidth) + 'px';
  }

  return (
    <div>
      {
        buf ? '' 
        :
        <>
        <div>
          <h1 className='titulo-novia'>Quieres ser mi Novia</h1>
        </div>
        <div className='div-aceptacion'>
          {
            si && 
            <>
              <div>
                <p className='parrafo-dijo-si'>Sabia que dirias que si ❤️</p>
                <img src={Shrek} alt="img" className='Img'/>
              </div>
            </>
          }
        </div>
        <div className='div-btn'>
          <div>
            <button onClick={HandleClick} className='btn-three'>Si ❤️</button>
          </div>
          
          <div>
            <button ref={buttonRef} onMouseMove={HandleMouse} className='btn-for'>No 😞</button>
          </div>
        </div>
        </>
      }
      
    </div>
  )
}

export default Declaration