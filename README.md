# azure-resume-project
Building this resume project.

# My Azure Resume
This is my Cloud Resume Challenge built on Azure. It's a static website hosted on Azure Storage, with a visitor counter built on Azure Functions. The website is built with HTML, CSS, and JavaScript. The visitor counter is built with JavaScript and Azure Functions.

If you'd like to build your own, here is the YouTube video [video](https://youtu.be/ieYrBWmkfno) 

## Architecture layout

![alt text](<resume architecture.PNG>)

## Demo

[View it live here](https://www.kausha.in/)

## Structure

- `frontend/`: Folder contains the website.
    - `frontend/js/visitorCounter.js`: Folder contains visitor counter code in Javascript.

- `backend/`: 
    - `api/`: Folder contains the Python API deployed on Azure Functions.
    - `ResumeCounter/_init_.py`: Contains the visitor counter code.
    
- `.github/workflows/`: Folder contains CI/CD workflow configurations.

## Frontend resources

The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

- I am a terrible designer, I used this [template](https://www.styleshout.com/free-templates/ceevee/) to create my site. 
- I'm no JavaScript dev, but this [article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) explains well and in a simple way how to use it to make an API call.
- [Azure storage explorer is a handy tool to use when working with Storage Accounts](https://azure.microsoft.com/en-us/features/storage-explorer/)
- This is how you can [deploy static site to blob storage.](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)

## Backend resources

The back-end is an [HTTP triggered Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=python) with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, adds 1 to it, and saves it and returns its value to the caller.

- [Create a Cosmos DB account](https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal)
- [Create an HTTP triggered Azure Function in Visual Studio Code.](https://docs.microsoft.com/azure/azure-functions/functions-develop-vs-code?tabs=python)
- [Azure Functions Cosmos DB bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2)
- [Retrieve a Cosmos DB item with Functions binding.](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2-input?tabs=python)
- [Write to a Cosmos DB item with Functions binding.](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2-output?tabs=python)
- You'll have to [enable CORS with Azure Functions locally](https://learn.microsoft.com/azure/azure-functions/functions-develop-local#local-settings-file) and once it's [deployed to Azure](https://docs.microsoft.com/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors) for you website to be able to call it.

## Testing Resources

[Testing is important](https://dev.to/flippedcoding/its-important-to-test-your-code-3lid), though my tests are simple, they exist. I am using .NET but some of these resources will apply to any language.

- [Getting Started with xUnit.net](https://xunit.net/docs/getting-started/netcore/cmdline)
- [Testing Azure Functions.](https://techcommunity.microsoft.com/t5/fasttrack-for-azure/azure-functions-part-2-unit-and-integration-testing/ba-p/3769764) 


## CI/CD Resources

- This is how you can deploy a blob storage static site with [GitHub actions.](https://docs.microsoft.com/azure/storage/blobs/storage-blobs-static-site-github-actions)
- This is how you can [deploy an Azure Function to Azure with GitHub Actions.](https://github.com/marketplace/actions/azure-functions-action)
- [Implement python testing in GitHub Actions.](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python)


