import $ from 'jquery'
import IMask from 'imask'

const element = document.querySelectorAll('.phone')

element.forEach(item => {
    const mask = IMask(item, {
        mask: '+{7}(000)000-00-00',
    })
})

$(document).ready(function() {
    let form = $('.potok__item-form')

    form.submit(function(event) {
        event.preventDefault()

        let submit = $('.potok__item-form-btn')

        submit.prop('disabled', true)

        let valid = true

        if (!valid) {
            submit.prop('disabled', false)
        }
    
        let name = $('#name').val()

        let formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            country: '',
            title: `Заявка с сайта kanikulyoffline.kz от ${name}`
        }

        $.ajax({
            type: 'POST',
            url: './assets/php/form-callback.php',
            data: formData,
            headers: {},
            success: function() {
                let suc = $('#successmessage')
                suc.text('Ваша заявка успешно отправлена!')

                form.hide(2000)
            },
            error: function() {
                let err = $('#errormessage')
                err.text('Произошла ошибка! Попробуйте еще раз.')
            }
        })
    })
})
