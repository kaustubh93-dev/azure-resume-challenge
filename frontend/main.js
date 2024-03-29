window.addEventListener('DOMContentLoaded' , (Event) =>{
    getvisitcount();
})

const functionapi ='';

const getvisitcount = () =>{
     let count =30;
     fetch (functionapi).then(Response => {
          return Response.json() 
     }).then (Response => {
          console.log ("Website called function api.");
          count = Response.count;
          document.getElementById("counter").innerText =count;
     }).catch(function(error){
    console.log(error);
     });
    return count;
}

    