import { useState, useEffect } from 'react'

import './list.css'

function Users() {
    const [filter, setFilter] = useState('')
  const [users, setUsers] = useState([
    "Ana", "Luis", "María", "Carlos", "Marta", "Juan", "Elena", "Pedro", "Sofía", "Jorge",
    "Claudia", "Raúl", "Patricia", "Andrés", "Laura", "Sergio", "Lucía", "Diego", "Silvia", "David",
    "Isabel", "Rubén", "Beatriz", "Fernando", "Carmen", "Roberto", "Rocío", "Álvaro", "Cristina", "Adrián",
    "Teresa", "Hugo", "Natalia", "Víctor", "Sara", "Enrique", "Julia", "Manuel", "Alejandra", "Daniel",
    "Lorena", "Javier", "Irene", "Mario", "Paula", "Miguel", "Nuria", "Tomás", "Marina", "Ignacio",
    "Alicia", "Francisco", "Eva", "Gonzalo", "Blanca", "Guillermo", "Ángela", "Ramón", "Clara", "Eduardo",
    "Esther", "Gabriel", "Raquel", "Samuel", "Olga", "Alberto", "Verónica", "Félix", "Consuelo", "Alfonso",
    "Victoria", "Sebastián", "Pilar", "Antonio", "Miriam", "Eugenio", "Amparo", "Salvador", "Gloria", "Emilio",
    "Sandra", "Ángel", "Rafael", "Lidia", "Cristóbal", "Pablo", "Nicolás", "Helena", "Esteban", "Iris",
    "Valeria", "Héctor", "Daniela", "Joaquín", "Montserrat", "Oscar", "Araceli", "Fabián", "Lucía", "Vicente"
])
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    setFilteredUsers(() => {
        return users.filter(user => user.includes(filter))
    })
  }, [filter])

  return (
    <>
      <div>
        <input value={filter} type="text" name="filter" id="filter" placeholder='filterBy' onChange={(e) => {
                setFilter(e.target.value)
        }}/>
        <ul className='list'>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default Users
