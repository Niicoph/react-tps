-- lista de tareas --


-> Definir estructura de carpetas ✅
-> Generar JSON con peliculas y series ✅
-> Contador que muestre la cantidad total por lista y por genero
-> Input de busqueda para filtrar por titulo o director
-> Filtros por genero y tipo
-> Opciones de ordenamiento por año y rating, ascedente y descendente
-> Si no hay items en una lista, debe mostrar un mensaje indicando que está vacia
-> Si no hay resultados que coincidan con los filtros, tambien debe mostrarse un mensaje adecuado

-- Estructura --
-> Pages
---> Home
-----> Home.jsx
-----> Styles.css
-> Components
---> Component
-----> Component.jsx
-----> Styles.css

-- Consignas PDF --

2. Armar un archivo readme.md en el cual se detallen los miembros del grupo y funcione como carátula del repositorio.
   a- En el archivo readme.md:
   i- Explicar la función de los siguientes archivos iniciales: index.js,
   App.js, index.css y package-json.js.
3. Crear una carpeta pages en la raíz del proyecto y dentro de ella otra carpeta Home.
   Dentro de esta última, un archivo Home.js y Home.module.css de ser necesario
   estilar. Renderizar home dentro del componente App.js.
4. Crear una carpeta Components en la raíz del proyecto. Dados los requerimientos de
   la aplicación. ¿Qué componentes reutilizables cree que debería definir?
   a- Para cada componente crear una carpeta con el nombre del componente.
5. Crear un componente Titulo dentro de la carpeta components, el cual es un <h1>
   con un estilo particular y que recibe por props un texto a renderizar. Utilizarlo desde
   Home.js como título para nuestra aplicación.
6. Completar los requerimientos de la aplicación. Tener en cuenta:
   a- Utilizar componentes reutilizables. Evitar tener código duplicado.
   b- Utilizar el hook useState para poder almacenar el estado interno de las listas
   de peliculas/series. Qué otros elementos de nuestra aplicación necesitan un
   useState? Utilizar todos los estados que crea necesarios para cumplir los
   requerimientos.
   c- Utilizar el renderizado de listas con la función .map() de JavaScript.
   d- Utilizar el renderizado condicional. Si no hay peliculas/series por ver hay que
   mostrar un mensaje, caso contrario mostrar la lista de peliculas/series.
   e- Utilizar botones para poder cambiar el estado de las peliculas/series o
   eliminarlas.
7. Actualizar el archivo readme.md para tener una documentacion adecuada:
   a- Armar una carátula con los datos de los miembros del grupo.
   b- Incluir una descripción básica de la aplicación.
   c- Incluir una guía e instrucciones de instalación paso a paso (clonar el
   repositorio - correr el comando npm i…)
   d- Agregar capturas de pantalla.
   e- Cualquier otra información que crean relevante.

-- Observaciones --

- Todos los datos deben guardarse en el navegador usando localStorage, para que no se pierdan al actualizar la pagina
