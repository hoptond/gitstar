async function getPopularRepos() {
    let response = await fetch('https://api.github.com/search/repositories?sort=stars&q=pushed:2017-01-01..2017-12-31')
    let data = await response.json()
    let repos = data.items.slice(0, 3)
    var display = document.getElementById('repos')
    repos.forEach(function(repo) {
        var listItem = document.createElement('li')
        listItem.innerText = repo.name
        display.appendChild(listItem)
    })
}
getPopularRepos()