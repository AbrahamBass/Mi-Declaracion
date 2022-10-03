import {useState} from 'react'

// Styles 
import '../Style/FormStyle.css'

// Components
import Declaration from './Declaration'

const Form = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState('')
  const [send, setSend] = useState(false)
  const [none, setNone] = useState(true)
  const [btn, setBtn] = useState(false)

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(text){
      setData(`Hola, ${text} como estas? Espero y te encuentres bien. Hay algo que te he querido decir hace tiempo y es...`)
    }
    setSend(true)

    if(text){
      setBtn(true)
    }
   
  }


  const HandleClick = () => {
   if(text){
    setNone(false)
   }else {
    setNone(true)
   }
  }

  return (
    <div className='contenedor-app'>
      <div>
        {none &&

        <>
          <div>
            <h1 className='titulo-nombre'>Ingresa Tu Nombre</h1>
          </div>

          <form onSubmit={HandleSubmit} className='formulario'>
            <div>
              <input type="text" placeholder='Ingresa tu nombre' onChange={HandleChange} className='input'/>
            </div>

            <div>
              {btn ? '' : <button  type="submit" className='btn-one'>Enviar</button>}
              
            </div>
          </form>

        <div>
        {
          send  && 
            <>
              <div className='parrafo-div'>
                <p className='parrafo-data'>{data}</p>
              </div>
            </>   
        }
        </div>

        <div className='div-btn-two'>
          {
            send  && <button  onClick={HandleClick} className='btn-two'>Siguiente</button>
          }
        </div>

        </>

        }

      </div>
      

      <div>
        <Declaration buf={none}/>
      </div>
      
    </div>
  )
}

export default Form