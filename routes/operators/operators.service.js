const { query } = require("../../db/query");

const getOperator = async (operatorId) => {
	const text = `
        SELECT id
            , "firstName"
            , "lastName"
            , "createdAt"
        FROM operators
        WHERE id = $1;
    `;
    
	const [operator] = await query(text, [operatorId]);
	return operator;
};

const createOperator = async ({ firstName, lastName }) => {
	const text = `
        INSERT INTO operators
        ( "firstName", "lastName" )
        VALUES ( $1, $2 );
    `;
	await query(text, [firstName, lastName]);
};

const getOperatorSchedule = async (operatorId) => {
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
};

module.exports = {
    getOperator
    , createOperator
    , getOperatorSchedule
};
