const { query } = require("../../db/query");

const getOperatorSchedule = async (operatorId) => {
    const isOperator = await query(`
        SELECT *
        FROM operators
        WHERE id = ${operatorId}
    `);

    if (isOperator.length !== 0) {
        const text = `
        SELECT businesses.businessName
            , ops.opTitle
            , ops.opPay as pay
            , ops.startTime
            , ops.endTime
            , businesses.hqAddressLine1 as addressLine1
            , businesses.hqAddressLine2 as addressLine2
            , businesses.hqCity as city
            , businesses.hqState as state
            , businesses.hqZipcode as zip
        FROM ops
        INNER JOIN businesses
        ON ops.businessId = businesses.id
        WHERE operatorId = $1;
    `;

	    const schedule = await query(text, [operatorId]);

	    return schedule;
    } else {
        throw new Error("Operator does not exist");
    };
};

module.exports = {
    getOperatorSchedule
};
