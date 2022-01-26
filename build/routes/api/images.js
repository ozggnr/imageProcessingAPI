"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const fs = __importStar(require("fs"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    //query paramters
    let filename;
    let height;
    let width;
    filename = req.query.filename;
    height = Number(req.query.height);
    width = Number(req.query.width);
    //We need a file name with valid width and height to resize and send back to the browser otherwise it will shows the error page in browser
    if (filename && width > 0 && height > 0) {
        const currDir = process.cwd();
        const outPath = `${currDir}/public/resizedImages/${filename}-${width}x${height}.jpeg`;
        //To cache and load from there if file is already exist
        fs.access(outPath, err => {
            if (!err) {
                res.sendFile(outPath);
            }
            else {
                (0, sharp_1.default)(`public/originalImages/${filename}.jpeg`).resize(width, height)
                    .toFile(`public/resizedImages/${filename}-${width}x${height}.jpeg`, (err, info) => {
                    res.sendFile(outPath);
                });
            }
        });
    }
    else {
        res.send("<h2>Missing information! Please be sure if you provide all the informations</h2>");
    }
});
exports.default = images;
