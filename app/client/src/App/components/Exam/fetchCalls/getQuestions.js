import axios from 'axios'


async function getInstruction(examID){
    const result = await axios({
        url:"https://localhost:8000/getExam",
        method:"POST",
        headers:{'Content-Type':'application/json'},
        data:JSON.stringify({examID})
    })
   // console.log(result.data)
    return result.data
}
export default getInstruction