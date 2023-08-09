'use client'
import styles from './page.module.css'
import SideBarMenu from '/components/sideMenus'
import TopBreadCrumbBar from '/components/topBreadCrumbBar'
import TableData from '/components/tableData'
import BasePriceTable from '/components/basePrice'


export default function Home() {
  //console.log(process.env.SERVER_PASSWORD)

  return (
    <div className="container-fluid p-4">
      <div className="row flex-nowrap p-0 m-0">
        {/* {
          process.env.NODE_ENV == "development" ? <h2>You are on Development</h2> : <h3>You are on Production</h3>
        } */}

        <SideBarMenu/>
        <div class="col p-0">
          <TopBreadCrumbBar/>
            <TableData/>
            <BasePriceTable/>
        </div>

      </div>
    </div>
  )
}
