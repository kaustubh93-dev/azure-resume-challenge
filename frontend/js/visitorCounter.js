// const visitor = document.getElementById('count');

    window.addEventListener('DOMContentLoaded', (event) => {
        getVisitCount();
    })
    
    const localfunctionApi = 'http://localhost:7071/api/ResumeCounter';
    const functionApiUrl = 'https://azure-function-resume.azurewebsites.net/api/ResumeCounter?';
    
    const getVisitCount = () => {
        let count = 30;
        fetch(functionApiUrl).then(response => {
            return response.json()
        }).then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById("count").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
    
        return count;
    }