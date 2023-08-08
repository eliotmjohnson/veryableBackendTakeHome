const express = require("express");
const { getOperatorScheduleFn } = require("./schedules.controller");

const schedulesRouter = express.Router();

schedulesRouter
    .get(
        "/:operatorId/schedules"
        , getOperatorScheduleFn
	);

module.exports = {
	schedulesRouter
};
