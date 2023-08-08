const express = require("express");
const {
    getBusinessesFn
    , createBusinessFn
    , deleteBusinessFn
} = require("./businesses.controller");

const businessesRouter = express.Router();

businessesRouter
    .get(
        "/"
        , getBusinessesFn
    )
    .post(
        "/"
        , createBusinessFn
    )
    .delete(
        "/:businessId"
        , deleteBusinessFn
    );

module.exports = {
	businessesRouter
};
