import '../css/style.css'

function createImgBlock(){
    return `<img
        alt="alt"
        src="https://s3-alpha-sig.figma.com/img/327e/1027/27f8803676f1e5a26c4e31dbaf5cba56?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPiXcaOuSn-pZ1oCJuUB-ZlOnEw6YY-a2Jnl809m11LWSBiygPMeTY9FkFd7HP0ARREmf82GbGIz4-BoPW7g39FkdwYzxSlVWfFVdsA~pUWv6A0CTBL7e~xGT7iCcTJ2arbJWzBzAMoaWZvQ28n~kHV9tKIS2oe0sFzkNZGpYaleRkNgr5eI-VLIZcVceC-ZoJWYlKMEsz8qxvi7ua8ey7WtcTt3FrgTmAQPHVNEGodUybKv8ZO5E-5H3TLIEJtLY10nsN4dM-LmaGyjYTWbVv3ur4Y55JkHmzo3EzazLSwjwJdENW-7Yng8q-KXk0Z~h0TIaY0HaYGxpyKiFehWcw__"
    />`
}

function createNameBox() {
    return `<div class="name"></div>`
}

function createLangsBox() {
    return `<div class="langs"></div>`
}

function createExpsBox() {
    return `<div class="exps"></div>`
}

function createToolsBox() {
    return `<div class="tools"></div>`
}

function createEduBox() {
    return `<div class="edu"></div>`
}

function createExtraBox() {
    return `<div class="extra"></div>`
}

document.querySelector('#app').innerHTML = [
    createImgBlock(),
    createNameBox(),
    createLangsBox(),
    createExpsBox(),
    createToolsBox(),
    createEduBox(),
    createExtraBox(),
].join('\n')
