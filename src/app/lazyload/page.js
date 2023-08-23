import React, { Suspense, lazy } from 'react';

const TableData = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(
      () => import("/components/tableData")
    );
  });


export default function LazyLoadComp() {
    return (
        <>  
            <div className='container p-5'>
            <h2 className='pb-3'>Component Lazy Load</h2>
            <Suspense fallback={<h2>Please wait...</h2>}>
                <TableData />
            </Suspense>
            </div>
        </>
    )
}