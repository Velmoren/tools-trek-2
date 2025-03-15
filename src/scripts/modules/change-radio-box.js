export const changeRadioBox = () => {
    const radioButtons = document.querySelectorAll('.radio-box-item')
    const formBox = document.querySelectorAll('.form-box__item')
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const value = radio.value
            
            formBox.forEach(box => {
                if (box.classList.contains(`form-box__item--${value}`)) {
                    box.classList.add('d-block')
                    box.classList.remove('d-none')
                } else {
                    box.classList.remove('d-block')
                    box.classList.add('d-none')
                }
            })
        })
    })
}