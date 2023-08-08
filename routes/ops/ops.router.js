const express = require("express");
const { createOp, getAllOps } = require("./ops.service");

const opsRouter = express.Router();

opsRouter
    .get(
        "/"
        , async (req, res) => {
		    try {
			    const data = await getAllOps();

			    return res.status(200).json(data);
		    } catch (error) {
			    console.log(error);
			    return res.status(400).send(error);
		    }
        }
    )
    .post(
        "/"
        , async (req, res) => {
		    try {
			    await createOp({
					opTitle: req.body.opTitle
					, opPay: req.body.opPay
				    , startTime: req.body.startTime
				    , endTime: req.body.endTime
				    , operatorId: req.body.operatorId
				    , businessId: req.body.businessId
			    });

			    return res.sendStatus(201);
		    } catch (error) {
			    console.log(error);
			    return res.status(400).send(error);
		    }
        }
    );

module.exports = {
	opsRouter
};
