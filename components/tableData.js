import React from "react";
import GSTTableData from '/components/GSTTable'

const TableData = () => {
        return (
            <>

<table class="table">
  <thead>
    <tr>
    <th scope="col"><input type='checkbox' className="checkboxRound" value='cookies'/></th>
      <th scope="col">
        <div className="tableRowIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
      </th>
      <th scope="col">Add Associated Tasks & Their Details</th>
      <th scope="col">Type</th>
      <th scope="col">Min Qty</th>
      <th scope="col">Max Qty</th>
      <th scope="col">Timeline</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Negotiable</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><input type='checkbox' className="checkboxRound" value='cookies'/></td>
    <td>
    <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
        </td> 
      <td>Consultation</td>
      <td><span class="textMandatory">Mandatory</span></td>
      <td>1</td>
      <td>10,000</td>
      <td>20 D</td>
      <td>$1,500/Hour</td>
      <td>
      <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
      </td>
      <td>$1500</td>
    </tr>
    <tr>
    <td><input type='checkbox' className="checkboxRound" value='cookies'/></td>
    <td>
    <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
    </td>
      <td>Creating Brand Centric Design System</td>
      <td><span class="textRecommended">Recommended</span></td>
      <td>5</td>
      <td>20</td>
      <td>Mthly</td>
      <td>$1,500/month</td>
      <td> <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
      <td>$75,000</td>
    </tr>
    <tr>
    <td><input type='checkbox' className="checkboxRound" value='cookies'/></td>
    <td>
    <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
    </td>
      <td>UI/UX Design Along With Responsive Design For The Top Five Most</td>
      <td><span class="textMandatory">Mandatory</span></td>
      <td>5</td>
      <td>5000</td>
      <td>15 W</td>
      <td>$1,500/page</td>
      <td> <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
      <td>$40,000</td>
    </tr>
    <tr>
    <td><input type='checkbox' className="checkboxRound" value='cookies'/></td>
    <td>
    <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
    </td>
      <td>Fronted Development in Either, Fluter or Android </td>
      <td><span class="textMandatory">Mandatory</span></td>
      <td>5</td>
      <td>5000</td>
      <td>20 W</td>
      <td>$1,500/page</td>
      <td> <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
      <td>$40,000</td>
    </tr>
    <tr>
    <td><input type='checkbox' className="checkboxRound" value='cookies'/></td>
      <td>
      <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
      </td>
      <td>Research & Strategy</td>
      <td><span class="textAdditional">Additional</span></td>
      <td>5</td>
      <td>5000</td>
      <td>4 M</td>
      <td>$1,500/project</td>
      <td> <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
      <td>$15,000</td>
    </tr>

    <tr style={{borderTop:"none", borderBottom:"none"}}>
        <td colSpan="10" style={{lineHeight:"normal", padding:"0"}}>
        <div className="addItemRow">
               <div className='plusIcon'></div> Add Item
            </div>
        </td>
    </tr>

    <tr>
        <td colSpan="10">
        <div style={{margin:"250px 0 0 0"}}>
            </div>
        </td>
    </tr>

    <tr>
    <td></td>
      <td>
      <div className="tableTdIconsParent">
            <div className="dotsIcon"></div>
            <div className="rowArrowIcon"></div>
        </div>
      </td>
      <td>GST Tax</td>
      <td><span class="textMandatory">Mandatory</span></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>18%</td>
    </tr>
           
  </tbody>
</table>
            
            </>
        )
}

export default TableData;