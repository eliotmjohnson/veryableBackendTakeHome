const { query } = require('../../db/query');

const createOp = async ({
	opTitle
	, opPay
    , startTime
    , endTime
    , operatorId
    , businessId
}) => {
	const text = `
        INSERT INTO ops (
            "opTitle"
            , "opPay"
            , "startTime"
            , "endTime"
            , "operatorId"
            , "businessId"
        )
        VALUES ( $1, $2, $3, $4, $5, $6 );
    `;
    
    await query(text, [
        opTitle
        , opPay
        , startTime
        , endTime
        , operatorId
        , businessId
    ]);
};

// For my own personal testing and reference

const getAllOps = async () => {
    const ops = await query(`
        SELECT *
        FROM ops;
    `);

    return ops;
}; 

module.exports = {
    createOp
    , getAllOps
};
