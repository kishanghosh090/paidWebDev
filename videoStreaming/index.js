import express from "express"
import cors from "cors"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import path from "path"
import fs from "fs"
import { exec } from "child_process" // watchout

const app = express()


// multer middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + "-" + file.originalname + path.extname(file.originalname))
    },
})
// multer config
const upload = multer({ storage: storage })


app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Allow-Headers", "Access-Control-Allow-Credentials", "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Allow-Headers", "Access-Control-Allow-Credentials"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static("uploads"))

app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    next()
})

app.get("/", (req, res) => {
    res.json({ message: "Hello" })
})

app.post("/upload", upload.single("file"), (req, res) => {
    // console.log(req.file)
    // res.json({ message: "File uploaded successfully" })

    const lessonId = uuidv4()
    const videoPath = req.file.path
    const outPutPath = `./uploads/courses/${lessonId}.mp4`

    const hlsPath = `${outPutPath}/index.m3u8`
    console.log(hlsPath);
    if (!fs.existsSync(outPutPath)) {
        fs.mkdirSync(outPutPath, { recursive: true })
    }

    // ffmpeg
    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outPutPath}/segment%03d.ts" -start_number 0 ${hlsPath}`

    // no queue 
    exec(ffmpegCommand, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        const videoUrl = `http://localhost:5000/uploads/courses/${lessonId}/index.m3u8`

        res.json({ message: "File uploaded successfully", videoUrl })
    })




})
app.listen(5000, () => {
    console.log(`Server is running on port http://localhost:${5000}`)
})