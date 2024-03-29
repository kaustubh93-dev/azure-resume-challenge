import azure.functions as func
import logging
from azure.cosmos import CosmosClient
import os

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    endpoint = os.environ["COSMOS_ENDPOINT"]
    key = os.environ["COSMOS_KEY"]
    database_name = "Counterdb"
    container_name = "counter1"
    name = req.params.get('name')
    client = CosmosClient(endpoint, key)
    database = client.get_database_client(database_name)
    container = database.get_container_client(container_name)
    query = f"SELECT * FROM c WHERE c.id = '1'"
    items = list(container.query_items(query, enable_cross_partition_query=True))
    if items:
        count = items[0]['count']
        count = str(int(count) + 1)
        items[0]['count'] = count
        container.replace_item(items[0]['id'], items[0])
        return func.HttpResponse(count, status_code=200)
    else:
        return func.HttpResponse("Counter document not found", status_code=404)
    """
    print (items)
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')
    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
        f"{items}This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
        status_code=200
        )
        """