import axios from 'axios'

class Services {

    userLogin(user){
        axios.post('http://127.0.0.1:8000/api/login', user).then(result => {
            return result
        })
    }



}

export default new Services()