import axios from 'axios'

export default function ApiCall() {
    const cookie = document.cookie.split(';')
    for (let i =0; i<cookie.length; i++){
        if(cookie[i].slice(0,6)===' token'){
            const tokenArr = cookie[i].split('=')
            return (tokenArr[1])
        }

    }
    return false
}
