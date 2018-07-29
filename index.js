$(document).ready(function (){
});

function searchRepositories(){
  const terms=$('#searchTerms').val().replace(" ","+");
  const query="https://api.github.com/search/repositories?q="+terms;
  $.get(query).done(function(resp){
    console.log("Finished");
    console.log(resp.items[0].name);
    $("#results").html("<ul>"+resp.items.map(i=>{
      return `
      <div>
        <h2>${i.name}</h2>
        <p>${i.description</div>`})
    );
  });
}


function displayRepositories(){
  let dest=$("#repositories");
  
}
