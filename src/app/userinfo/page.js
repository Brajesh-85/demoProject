"use client"
import React, { Suspense, lazy } from "react"
import UserList from '../../../components/userList'
import InfiniteScroll from "react-infinite-scroll-component"


const UsersList = () => {
    return (
        <>
            <div className="container py-4">
                <InfiniteScroll
                    dataLength={UserList.length}
                    hasMore={true}
                    //loader={<h4>Loading...</h4>}
                    >
                    <UserList />
                </InfiniteScroll>
                {/* <UserList /> */}
            </div>
        </>
    )
}
export default UsersList;
