
import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName'
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../features/user/userSlice'
const User = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <input type={'text'} onChange={e => {
                    dispatch(setFirstName(e.target.value));
                    // console.log(e.target.value);
                }} placeholder='Имя' />
            </div>
            <div>
                <input type={'text'} onChange={e => {
                    dispatch(setLastName(e.target.value));
                    // console.log(e.target.value);
                }} placeholder='Фамилия' />
            </div>
            <div>
                <FirstName />
            </div>
            <div>
                <LastName />
            </div>
        </>
    )
}

export default User