#This code is like a bridge between our web app and our database. 
#It makes sure that our web app can update and get the count from our database without talking to the database directly. 
#This is important for keeping our database secure


# We're using some special tools for our task.
import azure.functions as func
import json

# This is our main function that handles requests from our web app and talks to the database.
def main(
    req: func.HttpRequest,  # This is the request from our web app.
    InputDocument: func.DocumentList,  # This is the current state of our database.
    OutputDocument: func.Out[func.Document],  # This is where we'll write updates to our database.
) -> func.HttpResponse:  # This is what we'll send back to our web app.

    # First, we check if our database has any data.
    if not InputDocument:
        # If it doesn't, we create some initial data with a count of 1.
        new_data = {"id": "1", "count": 1}
        OutputDocument.set(func.Document.from_dict(new_data))
        response_body = new_data["count"]
    else:
        # If it does, we get the current data.
        current_data = InputDocument[0]
        # We increase the count by 1.
        current_data["count"] += 1
        response_body = current_data["count"]

        # We prepare the updated data to be written back to our database.
        updated_document = func.Document.from_dict(current_data)
        OutputDocument.set(updated_document)

    # Finally, we send back a response to our web app with the updated count.
    return func.HttpResponse(
        json.dumps({"count": response_body}),  # The updated count.
        status_code=200,  # A status code of 200 means everything went well.
        headers={"Content-Type": "application/json"},  # We're sending the data in JSON format.
    )
