import axios from 'axios'

async function getNewExams() {
    const result = await axios({
        url:"https://localhost:8000/getNew",
        method:"POST",
        headers:{'Content-Type':'application/json'}
    })
    return result.data
}

export default getNewExams