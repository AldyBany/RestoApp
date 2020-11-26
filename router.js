// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header')
//     header.classList.toggle("sticky", window.scrollY > 0)
// })

function getContent(hashId, callback) {
    var pages = {
        home: `<home-content></home-content>`,
        menu: `<menu-content></menu-content>`,
        expert: `<expert-content></expert-content>`

    }

    return callback(pages[hashId])
}

function loadPage() {
    const appContent = document.getElementById("app"),
        hashId = location.hash.substr(1)
    getContent(hashId, function (content) {
        appContent.innerHTML = content
    })

}

if (!location.hash) {
    location.hash = '#home'
}

loadPage()

window.addEventListener('hashchange', loadPage)