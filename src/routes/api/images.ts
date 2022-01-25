import express from 'express';
import sharp from 'sharp';

const images = express.Router();

images.get('/', async (req, res) => {
    //query paramters
    let filename: string
    let height: number
    let width: number
    filename = req.query.filename as string
    height = Number(req.query.height)
    width = Number(req.query.width)
    //We need a file name with valid width and height to resize and send back to the browser otherwise it will shows the error page in browser
    if (filename && width > 0 && height > 0) {
        sharp(`public/originalImages/${filename}.jpeg`).resize(width, height)
        .toFile(`public/resizedImages/${filename}-${width}x${height}.jpeg`, (err, info) => {
            const currDir = process.cwd()
            res.sendFile(`${currDir}/public/resizedImages/${filename}-${width}x${height}.jpeg`)
        })   
    } else {
        res.send("<h2>Missing information! Please be sure if you provide all the informations</h2>")
    }
})

export default images;