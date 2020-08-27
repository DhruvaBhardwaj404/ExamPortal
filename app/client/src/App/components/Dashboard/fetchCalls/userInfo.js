import axios from 'axios'


async function userInfo() {
    console.log('here')
    const result= await axios({
        url:'https://localhost:8000/data',
        method:'POST',
        headers:{'Content-Type':'application/json'}
    })
   if(await result.data.data===false){
       return false;
   }
   else 
        return result.data
   
 
}

export default userInfo