import express from 'express';
import sharp from 'sharp';
import * as fs from 'fs';

const images = express.Router();

images.get('/', (req, res) => {
    //query paramters
    let filename: string
    let height: number
    let width: number
    filename = req.query.filename as string
    height = Number(req.query.height)
    width = Number(req.query.width)
    //We need a file name with valid width and height to resize and send back to the browser otherwise it will shows the error page in browser
    if (filename && width > 0 && height > 0) {
        const currDir = process.cwd()
        const outPath = `${currDir}/public/resizedImages/${filename}-${width}x${height}.jpeg`
        //To cache and load from there if file is already exist
        fs.access(outPath, err => {
            if(!err) {
                res.sendFile(outPath)
            } else {
                sharp(`public/originalImages/${filename}.jpeg`).resize(width, height)
                .toFile(`public/resizedImages/${filename}-${width}x${height}.jpeg`, (err, info) => {
                    res.sendFile(outPath)
                })
            }
        }) 
    } else {
        res.send("<h2>Missing information! Please be sure if you provide all the informations</h2>")
    }
})

export default images;