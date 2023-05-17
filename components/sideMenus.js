import React from "react";

const SideMenus = () => {
        return (
            <>
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-0 leftMenuBg">
            <div class="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                <div className="leftMenuTopParent">
                <a href="/" className="leftArrow">
                </a>
                        <div className="addDetails">Add Details</div>
                        <div className="ThreeDotMenu"></div>
                </div>
               
               
                <div class="accordion bgNone" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Mobile Apps (6)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Tech Product Design And </a></li>
                    <li><a href="#">Consultation </a></li>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Android </a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Flutter</a></li>
                </ul>
            </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Website (6)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Tech Product Design And </a></li>
                    <li><a href="#">Consultation </a></li>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Android </a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Flutter</a></li>
                </ul>
            </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Digital Branding & Mar... (5)
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Tech Product Design And </a></li>
                    <li><a href="#">Consultation </a></li>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Android </a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Flutter</a></li>
                </ul>
            </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       Enterprise Solutions (6)
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Tech Product Design And </a></li>
                    <li><a href="#">Consultation </a></li>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Android </a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Flutter</a></li>
                </ul>
            </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       Videos (6)
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Tech Product Design And </a></li>
                    <li><a href="#">Consultation </a></li>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Android </a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Flutter</a></li>
                </ul>
            </div>
      </div>
    </div>
  </div>

  <div class="accordion-item userMenuParent">
    <h2 class="accordion-header cstmblackBg">
      <button class="accordion-button collapsed cstmPadding" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUserIcon" aria-expanded="false" aria-controls="collapseUserIcon">
       Kurage
      </button>
    </h2>
    {/* <div id="collapseUserIcon" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
            <div className="sideMenuListItem">
                <ul>
                    <li><a href="#">Logout </a></li>
                </ul>
            </div>
      </div>
    </div> */}
  </div>
  
</div>
               
  
 </div>
</div>


        <div class="col py-3">
            <h3>Left Sidebar with Submenus</h3>
            <p class="lead">
                An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single 
                menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
            <ul class="list-unstyled">
                <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
            </ul>
        </div>
    </div>
</div>
            
            </>
        )
}
export default SideMenus;

