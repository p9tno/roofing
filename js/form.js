// ФОРМА
function submitForm() {
    let modal = $('#info');
    let message = modal.find('.form__message');
    // при закрытии окна, чистим
    modal.on('hidden.bs.modal', function (e) {
    message.html('');
});
    // проверка клавиши enter
    $("[type=submit]").keyup(function(event){
        if(event.keyCode == 13){
            $(this).click();
        }
    });

    $('[type=submit]').on('click tab', function (e) {
        e.preventDefault();

        // записуем объект относящийся к ЭТОЙ кнопке
        let form = $(this).closest('.form');

        // Поиск потомков внутри каждого элемента в текущем наборе ОБЯЗАТЕЛЬНЫЕ ПОЛЯ!!!
        let fields = form.find('[required]');

        // Записываем значение атрибута формы action
        let url = form.attr('action');

        // Записываем значения полей форм.
        let formData = form.serialize();

        // проверка спама
        let notspam = form.find('[name="notspam"]');
        notspam.val('Not spam');

        // для счетчика (колличесто не заполненых полей)
        let empty = 0;


        fields.each(function (index, el) {
            // проверка заполнения полей.
            if ($(this).val() === '') {
                $(this).addClass('invalid');
                empty++;
            } else {
                $(this).removeClass('invalid');
            }
        });

        setTimeout(function () {
            fields.removeClass('invalid');
        }, 1500);


        if (empty === 0) {
            // отправляем форму
            // $('.form').submit();
            $.ajax({
                url:url,
                type: "POST",
                dataType: "html",
                data: formData,
                success: function (responce) {
                    // $('#success').modal('show');
                    console.log('success');
                    modal.modal('show');
                    message.html('Ваше сообщение отправлено. <br> Мы свяжемся с вами в ближайшее время.');
                    },
                    error: function (responce) {
                        console.log('error');
                        modal.modal('show');
                        message.html('Произошла ошибка при отправке. <br> Попробуйте отправить форму позже.');
                        }
                    })
                }
            });
}
submitForm();

$('.modal').on('show.bs.modal', () => {
    let openedModal = $('.modal');
    if (openedModal.length > 0) {
        openedModal.modal('hide');
    }
});

$('#check_checked').on('change', function () {
    if ( $('#check_checked').prop('checked') ) {
        $('#btn_didisabled_js').attr('disabled', false);
    } else {
        $('#btn_didisabled_js').attr('disabled', true);
    }
});
