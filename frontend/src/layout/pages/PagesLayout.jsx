import React from 'react'

function PagesLayout({children,pagelayout}) {
  return (
    <div className={pagelayout}>{children}</div>
  )
}

export default PagesLayout