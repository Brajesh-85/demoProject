import React from 'react';
import Link from 'next/link';

const TopBreadCrumb = () => {
    return (
        <>
            <div className="topBreadCrumbBarParent">
                <div className="row m-0">
                    <div className="col-10">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link href="#">Mobile Apps</Link></li>
                                <li class="breadcrumb-item"><Link href="#">Tech Product Design And Development</Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-2">
                        <div className="topCTAParent">
                            <Link href="#" className="previewCTA">Preview</Link>
                            <button className="nextCTA">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBreadCrumb;