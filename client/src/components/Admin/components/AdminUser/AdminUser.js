import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../actions/UserAction';
import ListUser from './ListUser';
import './AdminUser.css'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            <span>Tài Khoản Người Dùng</span>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> Đang Tải</h2>)
            }
        </div>
    );
}

export default AdminUser;