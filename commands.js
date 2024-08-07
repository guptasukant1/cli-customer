#! /usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
const program = new Command();
const prompt = inquirer.createPromptModule();
// const program = require('commander')
import {
	addCustomer,
	findCustomer,
	updateCustomer,
	deleteCustomer,
	listCustomers,
} from "./index.js";

// Customer Questions
const questions = [
	{
		type: "input",
		name: "firstName",
		message: "Customer First Name: ",
	},
	{
		type: "input",
		name: "lastName",
		message: "Customer Last Name: ",
	},
	{
		type: "input",
		name: "phone",
		message: "Customer Phone Number: ",
	},
	{
		type: "input",
		name: "email",
		message: "Customer Email Address: ",
	},
];
program.version("1.0.0").description("Client Management System");

// program.command('add <firstName> <lastName> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstName, lastName, phone, email) => {
//         addCustomer({firstName, lastName, phone, email})
// })

program
	.command("add")
	.alias("a")
	.description("Add a customer: ")
	.action(() => {
		prompt(questions).then((answers) => addCustomer(answers));
	});

program
	.command("find <name>")
	.alias("f")
	.description("Find a customer: ")
	.action((name) => {
		findCustomer(name);
	});

// $ Update Command
program
	.command("update <_id>")
	.alias("u")
	.description("Update a customer: ")
	.action((_id) => {
		prompt(questions).then((answers) => updateCustomer(_id, answers));
	});

// $ Delete Command
program
	.command("delete <_id>")
	.alias("d")
	.description("Delete a customer: ")
	.action((_id) => {
		deleteCustomer(_id);
	});

// $ List Command
program
	.command("list")
	.alias("l")
	.description("List all customers: ")
	.action(() => {
		listCustomers();
	});

program.parse(process.argv);