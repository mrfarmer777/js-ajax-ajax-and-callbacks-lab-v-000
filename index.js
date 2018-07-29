$(document).ready(function (){
});

function searchRepositories(){
  const terms=$('#searchTerms').val().replace(" ","+");
  const query="https://api.github.com/search/repositories?q="+terms;
  $.get(query,function(response){
    let repos=JSON.parse(response);
    console.log(repos);
    
  });
  
}
