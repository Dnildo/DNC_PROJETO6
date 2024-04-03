const router = require("express").Router();

const servicesRouter = require("./services");

router.use("/",  servicesRouter);

const partyRouter = require("./parties");

router.user("/", partyRouter);

module.exports = router;