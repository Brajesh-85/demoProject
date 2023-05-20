import React from "react";
import Link from 'next/link';

const AddItemsCTA = () => {
    return (
        <>
            <Link href="#" className="addItemRow">
                <div className="plusIcon"></div> Add Item
            </Link>
        </>
    )
}
export default AddItemsCTA