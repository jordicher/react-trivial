import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid'

const FormCategories = ({ setDatesUser, datesUser }) => {
    let history = useHistory();
    const handleInputChange = e => {
        setDatesUser({
            ...datesUser,
            [e.target.name]: e.target.value
        })
    }

    const [category, setCategory] = useState([]);

    const sendForm = (e) => {
        e.preventDefault();
        setDatesUser({
            ...datesUser,
            id: uuid()
        })
        
        history.push(`/trivial`);
    }

    useEffect(() => {
        const getCategory = async () => {
            const url = 'https://opentdb.com/api_category.php'
            const result = await axios.get(url);
            setCategory(result.data.trivia_categories);
        }

        getCategory();
    }, [])

    return (
        <Fragment>

            <div className="flex flex-col">
                <div className="grid place-items-center mx-2 my-20 ">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
px-6 py-10 sm:px-10 sm:py-6 
bg-white rounded-lg shadow-md lg:shadow-lg">

                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Personalize your trivial
             </h2>

                        <form className="mt-10" onSubmit={sendForm}>

                            <div className="col-span-2">
                                <label htmlFor="category" className="block mt-2 text-xs font-semibold text-gray-600 uppercase"> Select Category: </label>
                                <select name="category" className="block w-full py-3 px-1 mt-2 mb-4
        text-gray-800 
        border-2 border-gray-200
        focus:text-gray-500 focus:outline-none focus:border-gray-400" onChange={handleInputChange}>
                                    <option value=''>Any Category</option>
                                    {!category
                                        ?
                                        <option>Wait Api</option>
                                        :
                                        category.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>


                            <div className="col-span-2">
                                <label htmlFor="difficult" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Select Difficulty:</label>
                                <select name="difficult" className="block w-full py-3 px-1 mt-2 mb-4
        text-gray-800 
        border-2 border-gray-200
        focus:text-gray-500 focus:outline-none focus:border-gray-400" onChange={handleInputChange}>
                                    <option value='' defaultValue>Any Difficult</option>
                                    <option value="easy">easy</option>
                                    <option value="medium">medium</option>
                                    <option value="hard">hard</option>
                                </select>
                            </div>

                            <button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
        font-medium text-white uppercase
        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Start!
                </button>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default FormCategories
