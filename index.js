$(document).ready(function (){
});

function searchRepositories(){
  const terms=$('#searchTerms').val().replace(" ","+");
  const query="https://api.github.com/search/repositories?q="+terms;
  $.get(query).done(function(resp){
    console.log("Finished");
    console.log(typeof resp);
    $("#results").html(resp.items.length);
  });
}


function displayRepositories(){
  let dest=$("#repositories");
  
}
