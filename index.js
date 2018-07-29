$(document).ready(function (){
});

function searchRepositories(){
  const terms=$('#searchTerms').val().replace(" ","+");
  const query="https://api.github.com/search/repositories?q="+terms;
  $.get(query).done(displayRepositories);
  /*{
    console.log("Finished");
    console.log(resp.items[0].name);
    $("#results").html(resp.items.map(i=>{
      return `
      <div>
        <h4><a href="${i.html_url}">${i.name}</a></h4>
        <p>${i.description}</p>
        <h5>Created By: <a href="${i.owner.url}">${i.owner.login}</a></h5>
        <a href="#" onclick="getCommits(this)" data-username="${i.owner.login}" data-repository="${i.name}">Get Commits</a>
      </div>`})
    );
  });*/
}


function displayRepositories(resp){
  console.log("Finished");
  console.log(resp.items[0].name);
  $("#results").html(resp.items.map(i=>{
    return `
    <div>
      <h2><a href="${i.html_url}">${i.name}</a></h2>
      <p>${i.description}</p>
      <h5>Created By: <a href="${i.owner.url}">${i.owner.login}</a></h5>
      <a href="#" onclick="getCommits(this)" data-username="${i.owner.login}" data-repository="${i.name}">Get Commits</a>
    </div>`})
  );
}

function getCommits(el){
  const username=el.dataset.username;
  const repository=el.dataset.repository;
  let query="https://api.github.com/repos/"+username+"/"+repository+"/commits";
  $.get(query,displayCommits);
}

function displayCommits(resp){
  const dest=$("#details");
  dest.html(resp.map(c=>{
    return `<div>
              <h4>${c.commit.author.name}(${c.author.login}</h4>
              
            </div>
  }))
}
  

