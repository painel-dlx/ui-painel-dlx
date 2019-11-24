/* global $, jQuery */

/**
 * Exibir o menu
 */
function exibirMenu() {
    $('body').addClass('mostrando-menu');
    $('.menu-principal').find('.menu-filtro .form-controle').focus();
}

/**
 * Ocultar o menu
 */
function ocultarMenu() {
    $('body').removeClass('mostrando-menu');

    $('.menu-principal').find('.menu-filtro .form-controle')
        .val('')
        .trigger('input');
}

/**
 * Mostrar ou ocultar o menu
 */
function mostrarOuOcultarMenu() {
    if ($('.menu-principal').is(':visible')) {
        ocultarMenu();
    } else {
        exibirMenu();
    }
}


/**
 * Atalhos
 * ---
 * ESC: Ocultar menu
 * CTRL + ALT + M: Exibir o menu
 */
$(window).on('keydown.__atalhos', function (evt) {
    const tecla_press = evt.key;

    if (
        tecla_press === 'ESC' ||
        tecla_press === 'Escape' // Mac OSX
    ) {
        ocultarMenu();
    }

    if (evt.ctrlKey && evt.altKey) {
        switch (tecla_press) {
            case 'm':
            case 'µ': // Mac OSX
                exibirMenu();
                break;
        }
    }
});

// Exibir no menu apenas os itens de sub-menu que contenham o termo digitado no filtro
jQuery.expr[':'].contains_ci = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

$('.menu-filtro .form-controle').on('input', function () {
    const $this = $(this);
    const $menu_principal = $('.menu-principal');
    const filtro = $this.val();

    $menu_principal.find('.sub-menu-link:contains_ci(' + filtro + ')').parents('.sub-menu-item').show();
    $menu_principal.find('.sub-menu-link:not(:contains_ci(' + filtro + '))').parents('.sub-menu-item').hide();
});