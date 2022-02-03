import sharp from 'sharp';
//resize image by using sharp
const resize = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  const output = `public/resizedImages/${imageName}-${width}x${height}.jpeg`;
  await sharp(`public/originalImages/${imageName}.jpeg`)
    .resize(width, height)
    .toFile(output);
  return output;
};

export default resize;
