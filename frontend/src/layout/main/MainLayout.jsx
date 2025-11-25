function MainLayout({children}) {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
        {children}
    </div>
  )
}

export default MainLayout