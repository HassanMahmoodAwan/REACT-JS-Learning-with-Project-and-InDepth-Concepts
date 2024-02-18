import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profil() {
    const {user} = useContext(UserContext)
    if (!user) return <div>No User Name FOund</div>
    return <div>{user.userName}</div>
}

export default Profil
