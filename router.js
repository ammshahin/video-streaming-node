const Router = require("koa-router");
const { home, processVideo } = require("./Controllers/project");

const router = new Router();

router.get("/",home);
router.get("/video", processVideo);

module.exports = router;