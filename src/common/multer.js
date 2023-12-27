const fs = require("fs")
const path = require("path")
const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync("public/upload", { recursive: true });
        cb(null, "public/upload");
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const originalFileName = path.basename(file.originalname, fileExt);

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed

        const newFileName = `${originalFileName}_${year}${month}${fileExt}`;
        req.body.image = `upload/${newFileName}`
        cb(null, newFileName);
    },
});

const fileFilter = (req, file, cb) => {

    // check extention of file
    const fileExt = path.extname(file.originalname)
    const whiteListFormat = [".png", ".jpeg", ".jpg", ".webp"]
    if (!whiteListFormat.includes(fileExt)) {
        return cb(new Error("Only png, jpeg, jpg, webp formats are allowed!"));
    }



    cb(null, true);
}

const _1MB = 1 * 1024 * 1024; // 1 MB
const _2MB = 2 * 1024 * 1024; // 2 MB
const _3MB = 3 * 1024 * 1024; // 3 MB
const _4MB = 4 * 1024 * 1024; // 4 MB


const fileUploader = multer({
    storage, fileFilter, limits: { fileSize: _2MB }
})

module.exports = fileUploader