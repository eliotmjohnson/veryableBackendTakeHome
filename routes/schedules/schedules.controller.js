const {
    getOperatorSchedule
} = require("./schedules.service");

const getOperatorScheduleFn = async (req, res) => {
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

        return res.status(400).send(`${error.name}: ${error.message}`);
    }
};

module.exports = {
    getOperatorScheduleFn
};