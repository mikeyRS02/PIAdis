$(document).ready(function () {

    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // toggle the icon
        this.classList.toggle("fa-eye-slash");
    });














    // Mostrar formulario al hacer clic en "Agregar producto"
    $(".btn-agregar").click(function() {
        $("#eid").val(0);
        $("#desc").val("");
        $("#nombre").val("");
        $("#precio").val(0);
        $("#stock").val(0);

    });
  

  
    //Eliminar producto al hacer clic en "Eliminar"
    $("table").on("click", ".btn-danger", function () {
        $("#borrar").show();
        $("#idEr").val($(this).parent().siblings(".id").text());
        $("#nombreEr").val($(this).parent().siblings(".nom").text());

    });

    //Editar
    $("table").on("click", ".btn-editar", function () {
        $("#crear").show();
        $("#eid").val($(this).parent().siblings(".id").text());
        $("#desc").val($(this).parent().siblings(".desc").text());
        $("#nombre").val($(this).parent().siblings(".nom").text());
        $("#precio").val($(this).parent().siblings(".precio").text().replace("$",""));
        $("#stock").val($(this).parent().siblings(".stock").text());
    });

    

  });


  
  