import { combineReducers } from 'redux';
import profile from './profile';
import upload from './upload';
import location from './locations';
import club from './club';

export default combineReducers({
    // reducers here
    location,
    upload,
    profile,
    club,
});
