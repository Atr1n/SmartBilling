import $ from 'jquery'
import IMask from 'imask'

const element = document.getElementById('phone')
const maskOptions = {
  mask: '+{7} (000) 000-00-00'
}

const mask = IMask(element, maskOptions)

$(document).ready(function() {
  let form = $('.potok__item-form')

  form.submit(function(event) {
    event.preventDefault()

    let name = $('#name').val()
    let country = $('#country').val()

    let formData = {
      name: $('#name').val(),
      phone: $('#phone').val(),
      country: $('#country').val(),
      title: `Заявка с сайта kanikulyoffline.kz от ${name} из ${country}`
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
