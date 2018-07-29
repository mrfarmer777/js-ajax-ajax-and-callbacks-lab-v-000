$(document).ready(function (){
});

function searchRepositories(){
  const terms=$('#searchTerms').val().replace(" ","+");
  const query="https://api.github.com/search/repositories?q="+terms;
  $.get(query).done(function(resp){
    console.log("Finished");
    console.log(resp);
    $("#repositories").html("Got it!")
  });
}


function displayRepositories(){
  let dest=$("#repositories");
  
}
