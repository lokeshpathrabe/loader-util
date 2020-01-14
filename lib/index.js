import { loaderState } from './loaderState';
import Loader from './loader';

function showLoader(id){
    if(id && loaderState[id]) {
        loaderState[id](true);
    }
}

function hideLoader(id){
    if(id && loaderState[id]) {
        loaderState[id](false);
    }
}

export { Loader, showLoader, hideLoader };