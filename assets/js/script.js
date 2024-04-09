// codigo para agregar infomracion de los productos a la modal
$(document).ready(function () {
  $(".addcarrito").click(function (event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    if (event.detail === 1) {
      // Verifica si es un solo clic y cambia la opacida de la imagen
      $(this).css("opacity", "0.5");
      const imageSrc = $(this).find("img").attr("src");
      const imagenom = $(this).find("img").attr("alt");
      const imaprice = $(this).find("img").attr("precio");
      const img = $("<img>");
      img.attr("src", imageSrc);
      img.attr("alt", imagenom);
      img.attr("precio", imaprice);
      img.css({
        "max-width": "25%", // Limita el ancho máximo de la imagen al 25% del contenedor
        height: "auto", // Ajusta automáticamente la altura para mantener la proporción de la imagen
      });
      $(".modal-body").append(img, imagenom, imaprice);
    } else {
      $(this).css("opacity", "1"); // restaura la opacidad al hacer mas de 1 click
    }
  });
});

// codigo para borrar la modal y restablecer la opacidad de los botones

$(document).ready(function () {
   $("#borrarModal").click(function () {
     $(".modal-body").empty(); // Borra el contenido de la modal al presionar el botón "Borrar Carrito"
     $(".modal-body").append("<p>Ningún producto en el Carrito</p>"); // Agrega el mensaje cuando la modal está vacía
     $(".addcarrito").css("opacity", "1"); // Restablece la opacidad de los productos
     
     // Cierra la modal después de 2 segundos y borra el mensaje
     setTimeout(function() {
       $(".modal-body").empty();// vacia la modal
       $(".modal").modal("hide"); // Cierra la modal en 2 segundos
     }, 2000);
   });
 });

