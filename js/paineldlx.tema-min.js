function exibirMenu(){$("body").addClass("mostrando-menu"),$(".menu-principal").find(".menu-filtro .form-controle").focus()}function ocultarMenu(){$("body").removeClass("mostrando-menu"),$(".menu-principal").find(".menu-filtro .form-controle").val("").trigger("input")}function mostrarOuOcultarMenu(){$(".menu-principal").is(":visible")?ocultarMenu():exibirMenu()}$(window).on("keydown.__atalhos",(function(n){const e=n.key;if("ESC"!==e&&"Escape"!==e||ocultarMenu(),n.ctrlKey&&n.altKey)switch(e){case"m":case"µ":exibirMenu()}})),jQuery.expr[":"].contains_ci=function(n,e,i){return jQuery(n).text().toUpperCase().indexOf(i[3].toUpperCase())>=0},$(".menu-filtro .form-controle").on("input",(function(){const n=$(this),e=$(".menu-principal"),i=n.val();e.find(".sub-menu-link:contains_ci("+i+")").parents(".sub-menu-item").show(),e.find(".sub-menu-link:not(:contains_ci("+i+"))").parents(".sub-menu-item").hide()}));