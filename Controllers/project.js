const fs = require("fs")

exports.home = (ctx) =>{
   console.log("home page");
   ctx.redirect("https://ammshahin.github.io/video_stream-test-frontend.io/");
}

exports.processVideo =  ctx =>{
    const videoStream = fs.createReadStream("./sample-video.mp4");
    ctx.body = videoStream;
}
