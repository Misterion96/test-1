import './styles.css'

export function createLangsBox() {
    return `
<div class="langs island bg-second">
     <h2>Languages</h2>
    <div class="langs__list">
        <div class="langs__col">
            <h3>English</h3>
            <h3>Russian</h3>
            <h3>Armenian</h3>
        </div>
        <div class="langs__col">
            <div class="langs__level bg-green w-100"></div>
            <div class="langs__level bg-green w-100"></div>
            <div class="langs__level bg-green w-80"></div>
        </div>
    </div>
</div>`
}
