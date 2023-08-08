const {
    getOperator
    , createOperator
    , deleteOperator
} = require("./operators.service");
const { getLastInsertId } = require("../../db");

const getOperatorFn = async (req, res) => {
    const operatorId = req.params.operatorId;
    const operator = await getOperator(operatorId);

    if (!operator) {
        return res.status(400).send("Error: Operator does not exist")
    };

    return res.status(200).json(operator);
};

const createOperatorFn = async (req, res) => {
    await createOperator({
        firstName: req.body.firstName
        , lastName: req.body.lastName
    });

    const operatorId = await getLastInsertId();
    const createdOperator = await getOperator(operatorId);

    return res.status(201).json(createdOperator);
};

const deleteOperatorFn = async (req, res) => {
    try {
        const operatorId = req.params.operatorId;

        await deleteOperator(operatorId)

        return res.sendStatus(410);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`${error.name}: ${error.message}`);
    }
};

module.exports = {
    getOperatorFn
    , createOperatorFn
    , deleteOperatorFn
};