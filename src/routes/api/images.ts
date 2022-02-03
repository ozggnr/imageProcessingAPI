import express from 'express';
import * as fs from 'fs';
import resize from '../../helpers';

const images = express.Router();

images.get('/', (req: express.Request, res: express.Response): void => {
  //query paramters
  const filename = req.query.filename as string;
  const height = Number(req.query.height);
  const width = Number(req.query.width);

  //We need a file name with valid width and height to resize and send back to the browser otherwise it will shows the error page in browser
  if (filename && width > 0 && height > 0) {
    const currDir = process.cwd();
    const outPath =
      `${currDir}/public/resizedImages/${filename}-${width}x${height}.jpeg` as string;
    //To cache and load from there if file is already exist
    fs.access(outPath, async (err): Promise<void> => {
      if (!err) {
        res.sendFile(outPath);
      } else {
        await resize(filename, width, height).catch((err: Error): void => {
          res.send(`<h2>${err}</h2>`);
        });
        res.sendFile(outPath);
      }
    });
  } else {
    res.send(
      '<h2>Missing or wrong information! Please be sure if you provide all the informations</h2>'
    );
  }
});

export default images;
