import { useState } from "react"
import axios from 'axios'

const Popup : React.FC = () => {
 const[solution,setSolution] = useState<String>('')
 const[explanation,setExplanation] = useState<String>('')

 const fetchSolution = async() => {
      try{
        const response = await axios.get('',{
            params:{problemId:'example-problem-id'}
          })
          setSolution(response.data.solution)
          setExplanation(response.data.explanation)
      }catch(error){
        console.log('Error while fetching :',error)
      }
 }


 return (
    <>
    <div>
        <h1>LeetCode</h1>
        <button onClick={fetchSolution}>Get Solutions</button>

        {
            solution && (
                <div>
                  <h2>Solution</h2>
                  <pre>{solution}</pre>
                  <h2>Explanation</h2>
                  <p> {explanation} </p>
                    </div>
            )
        }

    </div>
    </>
 )

}

export default Popup