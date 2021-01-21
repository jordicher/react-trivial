import React from 'react'
import FormAuth from '../components/FormAuth'
import FormCategories from '../components/FormCategories'

const AuthPage = ({ auth, setAuth, setDatesUser, datesUser }) => {

  
    

    return (
        <div className="h-screen bg-gray-100">

            {!auth
                ?
                <FormAuth datesUser={datesUser} setDatesUser={setDatesUser} setAuth={setAuth} />
                :
                <FormCategories datesUser={datesUser} setDatesUser={setDatesUser} />}

        </div>
    )
}

export default AuthPage
