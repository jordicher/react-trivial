import React, { Fragment } from 'react'


const FormAuth = ({ datesUser, setDatesUser, setAuth }) => {

    const handleInputChange = e => {
        setDatesUser({
            ...datesUser,
            [e.target.name]: e.target.value
        })
    }

    const sendForm = (e) => {
        e.preventDefault();

        if (datesUser.firstName.trim() === '' || datesUser.lastName.trim() === '' || datesUser.country.trim() === '') return;        

        setAuth(true)
    }

    return (


        <Fragment>

            <div className="flex flex-col">
                <div className="grid place-items-center mx-2 my-20 ">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
    px-6 py-10 sm:px-10 sm:py-6 
    bg-white rounded-lg shadow-md lg:shadow-lg">

                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Login
                 </h2>

                        <form className="mt-10" onSubmit={sendForm}>

                            <label htmlFor="firstName" className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                            <input id="text" type="text" name="firstName"
                                className="block w-full py-3 px-1 mt-2 
            text-gray-800 appearance-none 
            border-2 border-gray-200
            focus:text-gray-500 focus:outline-none focus:border-gray-400"
                                required
                                onChange={handleInputChange} />


                            <label htmlFor="lastName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                            <input id="text" type="text" name="lastName"
                                className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 appearance-none 
            border-2 border-gray-200
            focus:text-gray-500 focus:outline-none focus:border-gray-400"
                                required
                                onChange={handleInputChange} />


                            <div className="col-span-2">
                                <label htmlFor="country" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Country / Region</label>
                                <select id="country" name="country" className="block w-full py-3 px-1 mt-2 mb-4
            text-gray-800 
            border-2 border-gray-200
            focus:text-gray-500 focus:outline-none focus:border-gray-400" onChange={handleInputChange}>
                                    <option value=''>Select Option</option>
                                    <option value="Central America" >Central America</option>
                                    <option value="Europe" >Europe</option>
                                    <option value="North America" >North America</option>
                                    <option value="South America" >South America</option>
                                </select>
                            </div>

                            <button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
            font-medium text-white uppercase
            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Go to the trivial
                    </button>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default FormAuth
