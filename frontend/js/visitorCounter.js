// This is like a party invitation. When the webpage is fully loaded (the party starts), 
// it calls our function `getVisitCount` (invites our special guest).
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

// These are addresses where our special guest might be found.
const localfunctionApi = 'http://localhost:7071/api/ResumeCounter';
const functionApiUrl = 'https://azure-function-resume.azurewebsites.net/api/ResumeCounter?';

// This is our special guest function. It's job is to find out how many people have visited our webpage (party).
const getVisitCount = () => {
    // We start by thinking that 30 people have visited.
    let count = 30;
    // Then we go to the address where we can find the exact number.
    fetch(functionApiUrl).then(response => {
        // At the address, we get a letter. We open it to read the number inside.
        return response.json()
    }).then(response => {
        // We find out the exact number and say "Website called function API."
        console.log("Website called function API.");
        // We update our count with the exact number.
        count = response.count;
        // We then show this number on our webpage for everyone to see.
        document.getElementById("count").innerText = count;
    }).catch(function(error){
        // If we can't find out the number for some reason, we just say there was an error.
        console.log(error);
    });

    // In the end, we tell everyone the number we found.
    return count;
}
