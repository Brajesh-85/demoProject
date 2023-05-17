import styles from './page.module.css'
import SideBarMenu from '/components/sideMenus'
import TopBreadCrumbBar from '/components/topBreadCrumbBar'

export default function Home() {
  return (
    <div className="container-fluid p-0">
       <div class="row flex-nowrap p-0 m-0">
        
      <SideBarMenu/>
      <div class="col p-0">
            <TopBreadCrumbBar/>
        </div> 
      </div>

      

    </div>
  )
}
