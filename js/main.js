import '../css/style.css'
import {createExperienceBlock} from "./components/experience";
import {createLangsBox} from "./components/languages";
import {createToolsBox} from "./components/tools/index.js";

function createProfileBlock() {
    return `<div class="profile island">
<img
        alt="alt"
        src="https://s3-alpha-sig.figma.com/img/327e/1027/27f8803676f1e5a26c4e31dbaf5cba56?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPiXcaOuSn-pZ1oCJuUB-ZlOnEw6YY-a2Jnl809m11LWSBiygPMeTY9FkFd7HP0ARREmf82GbGIz4-BoPW7g39FkdwYzxSlVWfFVdsA~pUWv6A0CTBL7e~xGT7iCcTJ2arbJWzBzAMoaWZvQ28n~kHV9tKIS2oe0sFzkNZGpYaleRkNgr5eI-VLIZcVceC-ZoJWYlKMEsz8qxvi7ua8ey7WtcTt3FrgTmAQPHVNEGodUybKv8ZO5E-5H3TLIEJtLY10nsN4dM-LmaGyjYTWbVv3ur4Y55JkHmzo3EzazLSwjwJdENW-7Yng8q-KXk0Z~h0TIaY0HaYGxpyKiFehWcw__"
    />
</div>`
}

function createNameBox() {
    return `<div class="name island bg-second"></div>`
}


function createEduBox() {
    return `<div class="edu island bg-second">
<h2>Education</h2>
</div>`
}

function createExtraBox() {
    return `<div class="extra island bg-second">
<h2>Interests</h2>
</div>`
}

function createContactBox() {
    return `<div class="contact island bg-black">
<h2>Let´s chat! I´m ready to work on excinting projects</h2>
</div>`
}

document.querySelector('#app').innerHTML = [
    createProfileBlock(),
    createNameBox(),
    createLangsBox(),
    createExperienceBlock(),
    createToolsBox(),
    createEduBox(),
    createExtraBox(),
    createContactBox()
].join('\n')
