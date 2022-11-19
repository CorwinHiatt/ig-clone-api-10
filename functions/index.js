import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllPhotos, addNewPhoto, addLike } from "./src/photos.js"

const app = express()
app.use(cors()) 
app.use(express.json())// anytime we do 


// routes... 
app.get('/photos', getAllPhotos) //get all photos 
app.post('/photos', addNewPhoto)// add a new photo
app.patch('/photos/:photoId', addLike)

export const api = functions.https.onRequest(app)

