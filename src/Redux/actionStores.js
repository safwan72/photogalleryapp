import Axios from 'axios'
import * as actions from './actionTypes'
export const photosloading=()=>{
    return{
        type:actions.PICSLOADING
    }
}

export const photosloaded=allphotos=>{
    return{
        type:actions.PICSLOADED,
        payload:allphotos
    }
}

export const fetchPhotos=(val)=>dispatch=>{
    if(val===undefined){
        val='random'
    }
    let url='https://pixabay.com/api/?key=6176106-66e8e2e5f9d6e3e49456e5c8a&q='+val+"&image_type=photo";
    console.log(url)
    dispatch(photosloading());

    Axios.get(url)
    .then(response=>response.data.hits)
    .then(hits=>{
        dispatch(photosloaded(hits))
    })
    .catch(err=>{
        console.log(err)
    })
    
}
