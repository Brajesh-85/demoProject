import React from "react";
import Link from 'next/link';

const SideMenus = () => {
  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-0 leftMenuBg">
        <div class="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
          <div className="leftMenuTopParent">
            <Link href="/" className="leftArrow">
            </Link>
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
                      <li className="activeTab">
                        <Link href="#">Tech Product Design And </Link></li>
                      <li><Link href="#">Consultation </Link></li>
                      <li><Link href="#">IOS </Link></li>
                      <li><Link href="#">Android </Link></li>
                      <li><Link href="#">React</Link></li>
                      <li><Link href="#">Flutter</Link></li>
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
                      <li><Link href="#">Tech Product Design And </Link></li>
                      <li><Link href="#">Consultation </Link></li>
                      <li><Link href="#">IOS </Link></li>
                      <li><Link href="#">Android </Link></li>
                      <li><Link href="#">React</Link></li>
                      <li><Link href="#">Flutter</Link></li>
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
                      <li><Link href="#">Tech Product Design And </Link></li>
                      <li><Link href="#">Consultation </Link></li>
                      <li><Link href="#">IOS </Link></li>
                      <li><Link href="#">Android </Link></li>
                      <li><Link href="#">React</Link></li>
                      <li><Link href="#">Flutter</Link></li>
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
                      <li><Link href="#">Tech Product Design And </Link></li>
                      <li><Link href="#">Consultation </Link></li>
                      <li><Link href="#">IOS </Link></li>
                      <li><Link href="#">Android </Link></li>
                      <li><Link href="#">React</Link></li>
                      <li><Link href="#">Flutter</Link></li>
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
                      <li><Link href="#">Tech Product Design And </Link></li>
                      <li><Link href="#">Consultation </Link></li>
                      <li><Link href="#">IOS </Link></li>
                      <li><Link href="#">Android </Link></li>
                      <li><Link href="#">React</Link></li>
                      <li><Link href="#">Flutter</Link></li>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SideMenus;

