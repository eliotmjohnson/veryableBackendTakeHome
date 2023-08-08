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

const deleteOperator = async (operatorId) => {
    const isOperator = await query(`
        SELECT *
        FROM operators
        WHERE id = ${operatorId}
    `);

    if (isOperator.length !== 0) {
        const text = `
        DELETE FROM operators
        WHERE id = $1;
        `;

        await query(text, [operatorId]);
    } else {
        throw new Error("Operator does not exist");
    }
};

module.exports = {
    getOperator
    , createOperator
    , deleteOperator
};
