import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import './questions.css'
function Questions() {
  const [searchParams, setSearchParams] = useSearchParams();


  const category = searchParams.get('category');
  const amount = searchParams.get('amount');
  const difficulty = searchParams.get('difficulty');


  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  const [data, setData] = useState(null);

  useEffect(() => {
    /*fetch(url)
      .then(resp =>
        resp.json()
      ).then(data => {
        setData(data);
      })
     console.log("data:",data);*/
    async function getData() {
      const response = await fetch(url);
      const revieced_data = await response.json();
      console.log("received data:", revieced_data)
      setData(revieced_data.results);
    }
    getData();
    console.log("data:", data)
  }, [])

  return (
    <div className='container'>

      {data && <QuestionCard data={data} amount={amount} />}

    </div>
  )
}



export default Questions
