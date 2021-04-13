$("#RaicesAlquiler").hide()
$("#RaicesVenta").hide()
$("#Vehiculo").hide()
$("#fotosV").hide()
$("#fotosP").hide()
$("#TipoDeVenta").hide()
$("#btnVehiculo").hide()
$("#btnVenta").hide()
$("#btnAlquiler").hide()

$(document).ready(function(){
    $("#Auto").on("click", function(){
        $("#Vehiculo").toggle()
        $("#fotosV").toggle()
        $("#btnVehiculo").toggle()
        $("#fotosP").hide()
        $("#RaicesAlquiler").hide()
        $("#RaicesVenta").hide()
        $("#TipoDeVenta").hide()
        $("#btnVenta").hide()
        $("#btnAlquiler").hide()
    })
});

$(document).ready(function(){
    $("#Propiedad").on("click", function(){
        $("#TipoDeVenta").toggle()
        $("#Vehiculo").hide()
        $("#fotosV").hide()
    })
});

$(document).ready(function(){
    $("#Venta").on("click", function(){
        $("#RaicesVenta").toggle()
        $("#btnVenta").toggle()
        $("#fotosP").show()
        /*Los hide*/
        $("#RaicesAlquiler").hide()
        $("#btnAlquiler").hide()
        $("#btnVehiculo").hide()
    })
});

$(document).ready(function(){
    $("#Alquiler").on("click", function(){
        $("#RaicesAlquiler").toggle()
        $("#btnAlquiler").toggle()
        $("#fotosP").show()
        /*Los hide*/
        $("#RaicesVenta").hide()
        $("#btnVehiculo").hide()
        $("#btnVenta").hide()
    })
});

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });