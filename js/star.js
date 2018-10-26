async function getPopularRepos() {
    let response = await fetch('https://api.github.com/search/repositories?q=e&sort=stars&order=desc')
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