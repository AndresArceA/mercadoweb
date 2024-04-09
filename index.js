// importo express y modulo handlebars
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

//defino vriable con numero de puerto para el servidor
const PORT = 3000;

//levanto el servidor en el puerto definido en la variable PORT
app.listen(PORT, () => {
  console.log("El servidor está inicializado en el puerto" + PORT);
});

//definir handlebars como motor de plantillas
app.set("view engine", "handlebars");
//configuro motor de plantillas
app.engine(
  "handlebars",
  exphbs.engine({
    extname: ".handlebars", // Extensiones de los archivos de handlebars
    defaultLayout: "main", // Plantilla principal Main
    layoutsDir: __dirname + "/views", // Directorio de las plantillas principales
    partialsDir: __dirname + "/views/partials", // Directorio de los partials
  })
);

//configuro carpeta publica para imagenes

app.use(express.static(__dirname + "/assets/img"));

//configuro carpeta publica para script js

app.use("/js",express.static(__dirname + "/assets/js"));

//configuro rutas de bootstrap y Jquery y Popper
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/bjs", express.static(__dirname + "/node_modules/bootstrap/dist/js")); 
app.use("/dist", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use("/umd", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd/"));

// // creo la ruta raiz del servidor (render)

app.get("/", (req, res) => {
  const vegetales = [//defino el arreglo de los productos
    { imagen: "banana.png", nombre: "Bananas", precio: "$1500"},
    { imagen: "cebollas.png", nombre: "Cebollas", precio: "$1000" },
    { imagen: "lechuga.png", nombre: "Lechuga", precio: "$990" },
    { imagen: "papas.png", nombre: "Papas", precio: "$800" },
    { imagen: "pimenton.png", nombre: "Pimenton", precio: "$1000" },
    { imagen: "tomate.png", nombre: "Tomate", precio: "$1500"},
  ]; // nombres de los productos (coinciden con las imágenes)
  res.render("main", { vegetales });
});
