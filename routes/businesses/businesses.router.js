const express = require("express");
const { createBusiness, getBusinesses } = require("./businesses.service");

const businessesRouter = express.Router();

businessesRouter
    .get(
        "/"
        , async (req, res) => {
		    try {
			    const data = await getBusinesses();

			    return res.status(200).json(data);
		    } catch (error) {
			    console.log(error);
			    return res.status(400).send(error);
		    }
        }
    )
    .post(
        "/"
        , async (req, res) => {
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
        }
    );

module.exports = {
	businessesRouter
};
