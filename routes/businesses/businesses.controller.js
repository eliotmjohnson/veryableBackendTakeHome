const { createBusiness, getBusinesses, deleteBusiness } = require("./businesses.service");

const getBusinessesFn = async (req, res) => {
    try {
        const data = await getBusinesses();

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
};

const createBusinessFn = async (req, res) => {
    try {
        await createBusiness({
            businessName: req.body.businessName
            , hqAddressLine1: req.body.hqAddressLine1
            , hqAddressLine2: req.body.hqAddressLine2
            , hqCity: req.body.hqCity
            , hqState: req.body.hqState
            , hqZipcode: req.body.hqZipcode
            , phoneNumber: req.body.phoneNumber
        });

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
};

const deleteBusinessFn = async (req, res) => {
    try {
        const businessId = req.params.businessId;

        await deleteBusiness(businessId)

        return res.sendStatus(410);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`${error.name}: ${error.message}`);
    }
}

module.exports = {
    getBusinessesFn
    , createBusinessFn
    , deleteBusinessFn
};