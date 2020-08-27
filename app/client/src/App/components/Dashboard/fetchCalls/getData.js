import axios from 'axios'

async function getData() {
    const result = await axios({
        url:"https://localhost:8000/data",
        method:"POST",
        headers:{'Content-Type':'application/json'}
    })
    return result.data
}

export default getData