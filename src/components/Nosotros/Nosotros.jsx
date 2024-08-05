import React from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clikear = () =>{
      console.log("Click")
    }


    window.addEventListener("click", clikear)

    return () => {
      window.removeEventListener("click", clikear)
    }
  
  }, [])
  


  return (
    <div className='container'>
      <h1 className='main-title'>Nosotros</h1>
    </div>
  )
}

export default Nosotros