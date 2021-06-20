import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import './HomePage.css';

export const getUsers = async (page) => {
    const user = await
        fetch(`https://randomuser.me/api/?page=${page}&results=100`)
            .then(response => response.json());
    return user.results;
};

const HomePage = () => {
    const history = useHistory();
    const [userList, setUserList] = useState([]);
    const [pageSize, setPageSize] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const users = async () => {
            setLoading(true);
            const newUserList = await getUsers(pageSize);
            setUserList(prevUserList => [...prevUserList, ...newUserList]);
            setLoading(false);
        };
        users();
    }, [pageSize]);

    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            setPageSize(prev => prev + 1);
        }
    };

    return (
        <>
            <div className='header'> List Of Users</div>
            <div onScroll={handleScroll} className='userListSection'>
                {userList && userList.length > 0 && userList.map(f =>
                    (<div key={f.cell} className='items'>
                        <span> <img src={f.picture.medium}></img> </span>
                        <span className='information'>
                           <div><b>Name: </b> {f.name.title}. {f.name.first} {f.name.last}</div>
                           <div><b>Gender: </b> {f.gender}</div>
                           <div><b>Age: </b> {f.dob.age}</div>
                       </span>

                    </div>)
                )}
            </div>
            {loading && <p>Loading...</p>}
            <button
                data-testid={'logoutButton'}
                onClick={() => history && history.push('/')}
                className='logoutButton'>
                Logout
            </button>
        </>
    );
};

export default HomePage;
