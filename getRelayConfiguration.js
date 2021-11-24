// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
* @summary Get a Relay configuration
*/

const { CommunicationRelayClient } = require("@azure/communication-network-traversal");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

// You will need to set this environment variables or edit the following values
const connectionString =
  process.env["COMMUNICATION_CONNECTION_STRING"] || "<communication service connection string>";

async function getConfig() {
    const relayClient = new CommunicationRelayClient(connectionString);
    const config = await relayClient.getRelayConfiguration();
    
    console.log('Relay config:\n');
    console.log(config);
    
    return config.iceServers;
}

module.exports.getConfig = getConfig;
 