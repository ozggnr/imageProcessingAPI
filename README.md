# Image Processing API
This project allows to resize images with given URL paramaters. It will save the images to the public/resizedImages folder for the first run and for the second run, it will bring the images which is already stored in the folder without processing again. 
* Application listens port 5000 and to resize and display the image can be accessed with proper parameters;
[http://localhost:5000/api/images?filename=santamonica&width=200&height=300](http://localhost:5000/api/images?filename=santamonica&width=200&height=300)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server
* To run with node please use "node build/server" 
```sh
npm run start
```

## Running Test Framework

```sh
npm run test
```
## Running Prettier and Lint

```sh
npm run prettier & npm run lint
```
## Building App

```sh
npm run build
```