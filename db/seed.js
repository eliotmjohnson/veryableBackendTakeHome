const { query } = require('./query');

const createOperators = async () => {
	await query(
		`
            CREATE TABLE IF NOT EXISTS operators (
                id INTEGER PRIMARY KEY NOT NULL
                , "firstName" TEXT
                , "lastName" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
	);
};

const createBusinesses = async () => {
	await query(
		`
            CREATE TABLE IF NOT EXISTS businesses (
                id INTEGER PRIMARY KEY NOT NULL
                , "businessName" TEXT NOT NULL
                , "hqAddressLine1" TEXT NOT NULL
                , "hqAddressLine2" TEXT
                , "hqCity" TEXT NOT NULL
                , "hqState" TEXT NOT NULL
                , "hqZipcode" INTEGER NOT NULL
                , "phoneNumber" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
	);
};

const createOps = async () => {
	await query(
		`
            CREATE TABLE IF NOT EXISTS ops (
                id INTEGER PRIMARY KEY NOT NULL
                , "opTitle" TEXT NOT NULL
                , "opPay" REAL NOT NULL
                , "startTime" TEXT NOT NULL
                , "endTime" TEXT NOT NULL
                , "operatorId" INTEGER NOT NULL
                , "businessId" INTEGER NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
                , FOREIGN KEY (operatorId) REFERENCES operators(id)
                    ON DELETE CASCADE
                , FOREIGN KEY (businessId) REFERENCES businesses(id)
                    ON DELETE CASCADE
            );
        `
	);
};

const seed = async () => {
	console.log('Seeding...');

	await createOperators();
	await createBusinesses();
	await createOps();

	console.log('Seeding Completed.');
};

module.exports = {
	seed
};
