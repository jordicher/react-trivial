import React from 'react'

const Question = ({question, indexQ, isCorrect}) => {

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
 
    let arrayAnswers = [...question.incorrect_answers]
    arrayAnswers.push(question.correct_answer);
    arrayAnswers.sort();

    const classLi = "cursor-pointer border-4 border-blue-500 hover:border-blue-800 border-opacity-25 rounded"


    return (
         <div className="bg-grey-100 rounded-xl shadow border w-full text-center my-4">
            <p className="text-lg my-2">{decodeHtml(question.question)}</p>
            <ul className="mx-2 grid grid-cols-1 md:grid-cols-2 gap-3 " id={indexQ}>{arrayAnswers.map((answer, index) => {

                if (question.correct_answer === answer) {
                    return <li className={classLi} key={`${indexQ}co`} id={`${indexQ}co`} onClick={isCorrect}>{decodeHtml(answer)}</li>
                } else {
                    return <li className={classLi} key={`${indexQ}${index}in`} id={`${indexQ}${index}in`} onClick={isCorrect}>{decodeHtml(answer)}</li>
                }
            })}
            </ul>
            <br />
        </div>
    )
}

export default Question


/* (10) […]
​
category: "Entertainment: Television"
​​
correct_answer: "12"
​​
difficulty: "medium"
​​
incorrect_answers: Array(3) [ "11", "13", "15" ]
​​
question: "In the Doctor Who universe, how many times can a time lord normally regenerate?"
​​
type: "multiple"
 */


