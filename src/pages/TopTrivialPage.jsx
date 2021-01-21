import React, { Fragment, useEffect, useState } from 'react'
import TopTrivial from '../components/TopTrivial';
import { db } from '../firebase'
import { useHistory } from "react-router-dom";

const TopTrivialPage = ({ finTrivial, auth, datesUser }) => {
    let history = useHistory();

    const [allUsers, setAllUsers] = useState();
    const [usersCategory, setUsersCategory] = useState();

    const getAllUsers = async () => {
        const docs = [];
        const querySnapshot = await db
            .collection("usuarios")
            .orderBy("correct", "desc")
            .limit(20)
            .get();
        querySnapshot.forEach((doc) => {
            docs.push(doc.data());
        });
        setAllUsers(docs);
    }

    const getUserCategory = async () => {
        const docs = [];
        const querySnapshot = await db
            .collection("usuarios")
            .where('category', "==", datesUser.category)
            .limit(10)
            .get();
        querySnapshot.forEach((doc) => {
            docs.push(doc.data());
        });
        setUsersCategory(docs);
    }

    const addUserTop = async () => {
        await db.collection('usuarios').doc(datesUser.id).set(datesUser);
        getUserCategory();
    }

    useEffect(() => {
        getAllUsers();

        if (finTrivial && auth) {
            addUserTop();
        }
    }, [])

    return (
        <div className="container mx-auto text-center">   
        <h1 className="text-4xl">TOP</h1>
            {usersCategory
                ? <Fragment> 
                    <button className="bg-blue-400 text-white font-bold rounded p-4 my-2" onClick={()=>history.push('/')}> Make another Trivial </button>
                    <h1 className="text-2xl">People who have played in this category</h1>
                    <TopTrivial allUsers={usersCategory} />
                </Fragment>

                : null
            }

            <h2 className="mt-10 text-4xl">Mundial TOP</h2>
            {allUsers
                ? <TopTrivial allUsers={allUsers} />
                : null
            }


        </div>
    )
}

export default TopTrivialPage
