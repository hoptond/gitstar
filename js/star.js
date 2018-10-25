async function getPopularRepos() {
    let response = await fetch('https://api.github.com/search/repositories?q=e&sort=stars&order=desc')
    let data = await response.json()
    let repos = data.items.slice(0, 3)
    console.log(repos)

    var display = document.getElementById('repos')
    repos.forEach(function(repo) {
        display.innerText += repo.name;
    })
}
getPopularRepos()


