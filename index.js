import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Customer from "./models/customer.js";

// Map global promise to get rid of warnings
// mongoose.Promise = global.Promise;

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL);
mongoose.connect("mongodb://127.0.0.1:27017/cliCustomer");
// .then(() => {
// 	console.log("Connected to MongoDB");
// })
// .catch((error) => {
// 	console.error("Error connecting to MongoDB:", error);
// });

// $ Add Customer
const addCustomer = (customer) => {
	Customer.create(customer).then((customer) => {
		console.log("New Customer Added");
		// db.close();
		mongoose.connection.close();
	});
};

// $ Find Customer
const findCustomer = (name) => {
	const search = new RegExp(name, "i");
	Customer.find({ $or: [{ firstName: search }, { lastName: search }] }).then(
		(customer) => {
			console.log(customer);
			console.log(`${customer.length} matches`);
			mongoose.connection.close();
			// db.close();
		},
	);
};

// $ Update Customer
const updateCustomer = (_id, customer) => {
	Customer.updateOne({ _id }, customer)
		.then((result) => {
			console.log("Customer Updated:", result);
			mongoose.connection.close();
		})
		.catch((error) => {
            console.error("Error updating customer:", error);
            mongoose.connection.close();
		});
};

// $ Delete Customer
const deleteCustomer = (_id) => {
	Customer.deleteOne({ _id }).then((customer) => {
		console.log("Customer Deleted");
		mongoose.connection.close();
	});
};

// $ List all customers
const listCustomers = () => {
	Customer.find().then((customers) => {
		console.log("The customers are: ");
		console.log(customers);
		console.log(`${customers.length} customers`);
		mongoose.connection.close();
	});
};

export {
	addCustomer,
	findCustomer,
	updateCustomer,
	deleteCustomer,
	listCustomers,
};