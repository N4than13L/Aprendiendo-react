import React from 'react'

export const Empleados = () => {
    console.log("se ha renderizado empleados")

    const conseguirUsuarios = async() =>{
        const url = "https://reqres.in/api/users?page/1"
        const peticion = await(url)
    }
  return (
    <div>

    </div>
  )
}
