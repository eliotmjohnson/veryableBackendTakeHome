const express = require("express");
const { getLastInsertId } = require("../../db");
const {
    getOperator
    , createOperator
    , getOperatorSchedule
} = require("./operators.service");

const operatorsRouter = express.Router();

operatorsRouter
    .get(
        "/:operatorId"
        , async (req, res) => {
		    const operatorId = req.params.operatorId;
		    const operator = await getOperator(operatorId);

		    return res.status(200).json(operator);
	})
    .post(
        "/"
        , async (req, res) => {
		    await createOperator({
				firstName: req.body.firstName
				, lastName: req.body.lastName
		    });

		    const operatorId = await getLastInsertId();
		    const createdOperator = await getOperator(operatorId);

		    return res.status(201).json(createdOperator);
		}
	)
    .get(
        "/:operatorId/schedules"
        , async (req, res) => {
		    const operatorId = req.params.operatorId;

		    try {
			    const schedule = await getOperatorSchedule(operatorId);

			    if (schedule.length === 0) {
				    return res.status(418).send("This operator has no ops! Get to work!");
			    } else {
				    return res.status(200).json(schedule);
			    }
			} catch (error) {
				console.log(error);
				
				return res.status(400).send(error);
		    }
		}
	);

module.exports = {
	operatorsRouter
};
