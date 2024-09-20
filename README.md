# Stack and Key-Value Store API

## Overview

This project implements a simple API for managing two key functionalities:
1. A **Stack** (LIFO) that allows adding and retrieving/removing the top item.
2. A **Key-Value Store** with optional Time-to-Live (TTL) functionality.

The API is built using **Node.js** and **Express**, and includes comprehensive unit tests using **Jest** and **Supertest**.

## Features

- **Stack API**:
  - Add an item to the stack.
  - Retrieve and remove the top item from the stack.
  
- **Key-Value Store API**:
  - Set a key-value pair, with optional TTL.
  - Retrieve a value by key (checks TTL if set).
  - Delete a key-value pair.

## Prerequisites

- Node.js (v14+)
- npm (v6+)

## Swagger 
- For further detail about the API you can view on http://localhost:3000/api-docs

## Project Structure
├── app.js                  # Entry point of the application
├── controllers/            # Contains the stack and key-value store controllers
├── routes/                 # Defines the API routes
├── __tests__/              # Contains unit tests for the controllers
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation

## npm start or npm test for starting and testing the server.