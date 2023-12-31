const { query } = require('../../db/query');

const createBusiness = async ({
	businessName
	, hqAddressLine1
    , hqAddressLine2
    , hqCity
    , hqState
    , hqZipcode
    , phoneNumber
}) => {
	const text = `
        INSERT INTO businesses (
            "businessName"
            , "hqAddressLine1"
            , "hqAddressLine2"
            , "hqCity"
            , "hqState"
            , "hqZipcode"
            , "phoneNumber"
        )
        VALUES ( $1, $2, $3, $4, $5, $6, $7 );
    `;
    
    await query(text, [
        businessName
        , hqAddressLine1
        , hqAddressLine2
        , hqCity
        , hqState
        , hqZipcode
        , phoneNumber
    ]);
};

// For my own personal testing and reference as well

const getBusinesses = async () => {
    const businesses = await query(`
        SELECT *
        FROM businesses;
    `);

    return businesses;
}; 

const deleteBusiness = async (businessId) => {
    const isBusiness = await query(`
        SELECT *
        FROM businesses
        WHERE id = ${businessId}
    `);

    if (isBusiness.length !== 0) {
        const text = `
        DELETE FROM businesses
        WHERE id = $1;
        `;

        await query(text, [businessId]);
    } else {
        throw new Error("Business does not exist");
    }
};

module.exports = {
    createBusiness
    , getBusinesses
    , deleteBusiness
};
