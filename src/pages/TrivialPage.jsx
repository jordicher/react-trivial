import React, { useState, useEffect, Fragment } from 'react'
import Score from '../components/Score';
import axios from 'axios'
import Question from '../components/Question';
import { useHistory } from "react-router-dom";

const TrivialPage = ({ auth, setDatesUser, datesUser, setFinTrivial }) => {

    let history = useHistory();
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [seconds, setSeconds] = useState(0);

    const [arrayResponse, setArrayResponse] = useState([]);
    const [questions, setQuestions] = useState([]);

    const isCorrect = (e) => {
        let parentId = e.target.parentNode.id;

        let list = e.target.parentNode.childNodes

        if (arrayResponse.includes(parentId)) {
            return;
        };

        for (const answer of list) {
            e.target.classList.add('bg-red-400');
            if (answer.id === `${parentId}co`) {
                answer.classList.add('bg-green-400');
                break;
            }
        }

        if (e.target.id.slice(-1) === 'n') {
            setIncorrect(incorrect + 1);

        } else {
            setCorrect(correct + 1);
        }

        setArrayResponse([...arrayResponse, parentId]);

        if (arrayResponse.length === 9) {
            setDatesUser(
                {
                    ...datesUser,
                    correct: correct,
                    time: seconds
                }
            )

            setCorrect(0);
            setIncorrect(0);
            setSeconds(0);
            setFinTrivial(true);
            history.push('/top');
            /* Fin trivial */
        }
    }


    useEffect(() => {

        if (!auth) {
            history.push('/');
        }

        const getRecipes = async () => {
            const url = `https://opentdb.com/api.php?amount=10&category=${datesUser.category}&difficulty=${datesUser.difficult}`;
            const result = await axios.get(url);
            setQuestions(result.data.results);

            setArrayResponse([]);
            setCorrect(0);
            setIncorrect(0);
            setSeconds(0);

            setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }
        getRecipes();
    }, [])

    return (
        <div>

            {questions
                ?
                <Fragment>
                    <Score correct={correct} incorrect={incorrect} seconds={seconds} />
                    {questions.map((question, index) => <Question key={index} question={question} indexQ={index} isCorrect={isCorrect} />)}

                </Fragment>
                :
                <Fragment>

                    <div class="container mx-auto w-full mt-3">
                        <svg class="animate-spin h-1/2 w-1/2 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>

                    </div>

                </Fragment>
            }


        </div>
    )
}

export default TrivialPage
