import axios from 'axios'


async function sendAnswer(answers,ExamID){
    console.log(ExamID)
    const result = await axios({
        url:"https://localhost:8000/getResult",
        method:"POST",
        headers:{'Content-Type':'application/json'},
        data:JSON.stringify({answers,ExamID})
    })
   // console.log(result.data)
    return result.data
}
export default sendAnswer