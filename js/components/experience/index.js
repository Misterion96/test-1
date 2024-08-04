import './styles.css';

import {item} from "./item.js";

export function createExperienceBlock() {
    return `<div class="exps island bg-second">
    <h2>Experience</h2>
    ${item().repeat(3)}
</div>`
}
