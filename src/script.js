const repoCardTemplate = document.querySelector("[data-repo-template]");
const repoCardContainer = document.querySelector("[data-repo-cards-container]");
const search_input = document.querySelector("[data-search");
const button = document.getElementById("search-repos-btn");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!search_input.value) {
    alert('Empty search!');
    return;
  }
  clearRepos();
  await fetchRepositories((search_input).value);
});

search_input.addEventListener("input", async(event) =>{
  const searchValue = event.target.value;
  if(searchValue) {
    clearRepos();
    await fetchRepositories;
  }
});

function createRepositoryCard() {
  // Implement string template HTML builder for repo card
}

function renderRepositories(repository) {
  //return repositories.map((repo) => {
    // get the content inside the template / card
    const card = repoCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const description = card.querySelector("[data-description]");
    const stars = card.querySelector("[data-stars]");
    const forks = card.querySelector("[data-forks]");

    description.textContent = repository.description;
    header.textContent = repository.full_name;
    stars.textContent = "Stars: " + repository.stargazers_count;
    forks.textContent = "Forks: " + repository.forks;

    repoCardContainer.append(card);
  }
  // Implement DOM manipulation function to add list items in the repo list

// Comment this out when you start working on the search functionality
//renderRepositories();

function handleSearch() {
  // Implement form submit event handler
}
/*
async function fetchRepositories() {
  // Pass parameter to the search endpoint
  return fetch("https://api.github.com/legacy/repos/search/<placeholder>")
    .then((res) => res.json());
    //.then((res) => res.repositories;
    .then(repositories =>{
      repositories.items.map((repo)=>{
        return renderRepositories(repo);
      })
  })
}*/

function fetchRepositories(searchParam = '') {
  const API_URL = `https://api.github.com/search/repositories${searchParam ? '?q=' + searchParam : '?q=stars:>10000'}`;

  return fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
      // hideLoadingMessage();

      data.items.map((repo) => {
        return renderRepositories(repo)
      })
    })
}

function clearRepos() {
  repoCardContainer.textContent = null;
}

fetchRepositories();
