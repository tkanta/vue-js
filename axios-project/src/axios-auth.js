import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

const testUpper = (value) => value.toUpperCase(); 

//instance.defaults.headers.common['SOMETHING'] = 'something';

//export default instance
export  {
    instance , testUpper
}
    
