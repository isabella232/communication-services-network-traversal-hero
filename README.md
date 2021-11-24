# Azure Communication Network Traversal sample

### Prerequisites

- Create an Azure account with an active subscription. For details, see [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F). 
- Install [Node.js](https://nodejs.org/en/download/) Active LTS and Maintenance LTS versions (12.0.0 recommended).
- Create an Azure Communication Services resource. For details, see [Create an Azure Communication Resource](https://docs.microsoft.com/azure/communication-services/quickstarts/create-communication-resource?tabs=windows&pivots=platform-azp). You will need the connection string for this sample.
- Firefox, Edge or Chrome
- Computer with a camera

### Installing

- In a Powershell Terminal go to the sample dir and run the following command

npm install

## Setup

- Go to the .env (rename sample.env to .env) file of the sample and change the value of COMMUNICATION_CONNECTION_STRING to your connection string (from the Communication Services resource)

## Usage

[Firefox Only] media.peerconnection.ice.relay_only needs to be enabled. In your browser search bar type about:config. Click Accept the Risk and Continue. Search for media.peerconnection.ice.relay_only and change its value to true.

- Execute: node .\index.js
- Open two tabs and go to http://localhost:3000/ in both of them
- Click get video on both tabs and allow the browser to use your camera and audio
- Click call and you should see the stream (two videos on the same tab)


Microsoft docs: https://docs.microsoft.com/en-us/javascript/api/overview/azure/communication-network-traversal-readme?view=azure-node-preview
Azure SDK code: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/communication/communication-network-traversal
Azure SDK samples: https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-js/communication-network-traversal-javascript/