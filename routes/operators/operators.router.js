const express = require("express");

const {
	getOperatorFn
	, createOperatorFn
	, deleteOperatorFn
} = require("./operators.controller");

const operatorsRouter = express.Router();

operatorsRouter
	.get(
		"/:operatorId"
		, getOperatorFn
	)
	.post(
		"/"
		, createOperatorFn
	)
	.delete(
		"/:operatorId"
		, deleteOperatorFn
	);

module.exports = {
	operatorsRouter
};
