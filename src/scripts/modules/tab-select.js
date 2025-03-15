import {Tab} from "bootstrap"

export const tabSelectModule = () => {
    const tabSelectItems = document.querySelectorAll('[role="tablist-select"]')

    tabSelectItems.forEach(select => {
        select.addEventListener('change', () => {
            const tabEl = document.querySelector(`[data-bs-target="${select.value}"]`)

            var tab = new Tab(tabEl)

            tab.show()
        })
    })
}