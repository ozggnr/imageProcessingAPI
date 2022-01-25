"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //query paramters
    let filename;
    let height;
    let width;
    filename = req.query.filename;
    height = Number(req.query.height);
    width = Number(req.query.width);
    //We need a file name with valid width and height to resize and send back to the browser otherwise it will shows the error page in browser
    if (filename && width > 0 && height > 0) {
        (0, sharp_1.default)(`public/originalImages/${filename}.jpeg`).resize(width, height)
            .toFile(`public/resizedImages/${filename}-${width}x${height}.jpeg`, (err, info) => {
            const currDir = process.cwd();
            res.sendFile(`${currDir}/public/resizedImages/${filename}-${width}x${height}.jpeg`);
        });
    }
    else {
        res.send("<h2>Missing information! Please be sure if you provide all the informations</h2>");
    }
}));
exports.default = images;
