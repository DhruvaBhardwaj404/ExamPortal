import axios from 'axios'

async function getEnrolled() {
    const result = await axios({
        url:"https://localhost:8000/enrolled",
        method:"POST",
        headers:{'Content-Type':'application/json'}
    })
    console.log(result.data)
    return result.data
}

export default getEnrolled