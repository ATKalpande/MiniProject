import axios from 'axios';

export async function StdService(studentData){
    return axios.post('http://127.0.0.1:9800/std',studentData)
}

export function fetchData(){
    return axios.get('http://127.0.0.1:9800/std')
}

export function deleteData(){
    return axios.delete('http://127.0.0.1:9800/std');
}