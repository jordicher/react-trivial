import React from 'react'
import uuid from 'react-uuid'

const TopTrivial = ({allUsers}) => {

    return (
        <div className="rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-5">
            <table className="table-auto mx-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-green-600">Name</th>
                        <th className="px-4 py-2 text-green-600">Country Region</th>
                        <th className="px-4 py-2 text-green-600">Time</th>
                        <th className="px-4 py-2 text-green-600">Correct</th>
                        <th className="px-4 py-2 text-green-600">Difficult</th>
                    </tr>
                </thead>
                <tbody>

                    {allUsers.map(user =>
                        <tr key={uuid()}>
                            <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">{`${user.firstName} ${user.lastName}`}</td>
                            <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">{user.country}</td>
                            <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">{`${user.time}s`}</td>
                            <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">{`${user.correct}`}</td>
                            <td className="border border-green-500 px-4 py-2 text-green-600 font-medium">{user.difficult}</td>
                        </tr>
                    )}



                </tbody>
            </table>
        </div>
    )
}

export default TopTrivial
