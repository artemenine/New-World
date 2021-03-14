$(document).ready(function () {
    $.validator.addMethod('regexp', function (value, element, params)
    {
        var expression = new RegExp(params);
        return this.optional(element) || expression.test(value);
    });

    $("#register_form").validate({ 
        rules:
        {
            name:
            {
                required: true,    
                maxlength: 12,
            },
            surname:
            {
                required: true,    
                maxlength: 12,
            },
            date:
            {
                required: true,    
                regexp: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
            },
            email:
            {
                required: true,    
                email: true
            },
            phone:
            {
                required: true,    
                regexp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
            },
            password:
            {
                required: true,
                minlength: 8,
                regexp: /^[0-9a-zA-Z-_.]+$/,
            },
            
        },
        messages:
        {
            name:
            {
                required:"Поле имя обязательно для заполнения",
                maxlength: "Максимальная длина имени 12 символов"
             },
             surname:
            {
                required:"Поле фамилия обязательно для заполнения",
                maxlength: "Максимальная длина фамилии 12 символов"
             },
             date:
            {
                required:"Поле дата рождения обязательно для заполнения",
                regexp:"Дата введена некорректно"
            },
             email:
            {
                required:"Поле e-mail обязательно для заполнения",
                email:"e-mail введен некорректно"
            },
             phone:
            {
                required:"Поле телефон обязательно для заполнения",
                regexp:"Телефон введен некорректно"
             },
             password:
            {
                required: "Поле пароль обязательно для заполнения",
                minlength: "Минимальная длина пароля 8 символов",
                regexp: "Только английские буквы и цифры"
            },
            
        }
    });
});