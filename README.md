# Azure Communication Network Traversal sample

### Prerequisites

You need Node.js
Firefox, Edge or Chrome
Computer with camera
A Communication Services resource, you will need the Connection String.

### Installing

- In a Powershell Terminal go to the sample dir and install the following

npm install

## Setup

- Create a Communication Services resource using your personal subscription. See here for details:
https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/create-communication-resource?tabs=windows&pivots=platform-azp
- Go to the .env (rename sample.env to .env) file of the sample and change the value of COMMUNICATION_CONNECTION_STRING to your connection string (from the Communication Services resource)

## Usage

- Execute: node .\index.js
- Open your browser, if you are using Mozilla, in the search bar type about:config and search for relay and change it's value to true
- Open two tabs and go to http://localhost:3000/ in both of them
- Click get video on both tabs and allow the browser to use your camera and audio
- Click call and you should see the stream (two videos on the same tab)


Microsoft docs: https://docs.microsoft.com/en-us/javascript/api/overview/azure/communication-network-traversal-readme?view=azure-node-preview
Azure SDK code: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/communication/communication-network-traversal
Azure SDK samples: https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-js/communication-network-traversal-javascript/