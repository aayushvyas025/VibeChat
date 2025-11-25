function PagesLayout({children,pageLayout}) {
  return (
    <div className={pageLayout}>{children}</div>
  )
}

export default PagesLayout