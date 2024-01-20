        $(document).ready(function () {
            $('#carousel-imagens').slick({
                autoplay: true
            });

            $('.menu-hamburguer').click(function () {
                $('nav').slideToggle();
            })

            $('#telefone').mask(' (00) 00000-0000')

            $('#CEP').mask('00000-000');

            $('#CPF').mask('000.000.000-00', { reverse: true });
        
            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    }, 
                    CPF: {
                        required: true
                    },
                    CEP: {
                        required: true
                    },
                    endereço: {
                        required: true
                    },
                    complemento: {
                        required: true
                    },
                    mensagem: {
                        required: true
                    },
                    veiculoDeInteresse: {
                        required: true
                    }
                },
                messages: {
                    nome: 'Por favor, insira seu nome completo' 
                }, 
                submitHandler: function (form) { 
                    console.log(form)
                }, 
                invalidHandler: function(evento,validador) {
                    let camposIncorretos = validador.numberOfInvalids ();
                    if  (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }
            })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
            
        $('#veiculo-interesse').val(nomeVeiculo);
            
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
