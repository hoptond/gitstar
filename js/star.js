async function getPopularRepos(name, startdate, enddate) {
    let response = await fetch(`https://api.github.com/search/repositories?q=${name}&sort=stars&pushed:${startdate}..${enddate}`)
    let data = await response.json()
    let repos = data.items.slice(0, 3)
    var results = document.getElementById('repos')
    repos.forEach(function(repo) {
        let listItem = document.createElement('li')
        listItem.innerText = repo.name
        results.appendChild(listItem)
    })
}

function clearResults() {
    var results = document.getElementById('repos')
    while(results.firstChild) {
        results.removeChild(results.firstChild)
    }
}

document.querySelector('#submit').addEventListener('click', function (e) {
    var formData = new FormData(e.target.form)
    clearResults()
    getPopularRepos(formData.get('name'), formData.get('startdate'), formData.get('enddate'))
    e.preventDefault()
})