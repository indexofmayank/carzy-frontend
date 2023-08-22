import React, { Children, useEffect, useState } from 'react'
import { Skeleton } from '../../../node_modules/@mui/material/index';

const TableSkeleton = ({ rows, columns, children }) => {
  const skeletonRows = Array.from({ length: rows });

  return (
    <div>
      {skeletonRows.map((_, rowIndex) => (
        <div key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} animation="wave" />
          ))}
        </div>
      ))}
    </div>

  )
}

export default TableSkeleton