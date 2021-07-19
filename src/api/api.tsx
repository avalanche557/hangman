import { URL, DEV_URL } from "../constants/constant"
import  axios  from 'axios'

export const getWordList = () => {
    const url = `${URL}/getwords/500`
    return axios.get(url)
        .then((res: any) => {
            if(res.data) {
                return res.data[1].words
            }
        })
        .catch((error: any) => {console.log(error)} )
    
}