const express = require("express");
const { createOpFn, getAllOpsFn, deleteOpFn} = require("./ops.controller");

const opsRouter = express.Router();

opsRouter
    .get(
        "/"
        , getAllOpsFn
    )
    .post(
        "/"
        , createOpFn
    )
    .delete(
        "/:opId"
        , deleteOpFn
    );

module.exports = {
	opsRouter
};
