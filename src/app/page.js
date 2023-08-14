'use client'
import styles from './page.module.css'
import SideBarMenu from '/components/sideMenus'
import TopBreadCrumbBar from '/components/topBreadCrumbBar'
import TableData from '/components/tableData'
import BasePriceTable from '/components/basePrice'
import { useState, useEffect } from 'react'

export default function Home() {
  //console.log(process.env.SERVER_PASSWORD)

  //to update the state data/value
  const [name, SetName] = useState("Brajesh")

  const ChangeState = () => {
    SetName("Kumar")
  }

  return (
    <div className="container-fluid p-4">
      <div className="row flex-nowrap p-0 m-0">
        {/* {
          process.env.NODE_ENV == "development" ? <h2>You are on Development</h2> : <h3>You are on Production</h3>
        } */}

        {/* <SideBarMenu /> */}
        {/* <div class="col p-0">
          <TopBreadCrumbBar />
          <TableData />
          <BasePriceTable />
        </div> */}

        <div className='container'>
          <UserName Fname="User - Brajesh" Lname="Kumar" />
          <UserName location="Location - Uttarakhand" /><br />
          <h5>To update/change the state value {name}</h5>
          <button onClick={() => ChangeState()}>Click here</button>
        </div>

      </div>
    </div>
  )
}


const UserName = (props) => {
  return (
    <>
      <div className='container p-3'>
        <h3> {props.Fname} {props.Lname} {props.location}</h3>
      </div>
    </>
  )
}