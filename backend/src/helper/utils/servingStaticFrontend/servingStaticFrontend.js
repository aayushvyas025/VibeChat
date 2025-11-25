import path from "path"
import express from "express"


function servingStaticFrontend(app) {
  const __dirname = path.resolve(); 
  app.use(express.static(path.join(__dirname,"/frontend/dist")));
  app.use((_, response) => {
    response.sendFile(path.join(__dirname, "/frontend/dist", "index.html"))
  })

}

export default servingStaticFrontend; 