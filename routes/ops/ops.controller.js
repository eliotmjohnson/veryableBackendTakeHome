const { createOp, getAllOps, deleteOp } = require("./ops.service");

const createOpFn = async (req, res) => {
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
};

const getAllOpsFn = async (req, res) => {
    try {
        const data = await getAllOps();

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
};

const deleteOpFn = async (req, res) => {
    try {
        const opId = req.params.opId;

        await deleteOp(opId)

        return res.sendStatus(410);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`${error.name}: ${error.message}`);
    }
};

module.exports = {
    createOpFn
    , getAllOpsFn
    , deleteOpFn
}