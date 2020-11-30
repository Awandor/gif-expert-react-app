# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Crear una lista de categorias

Hemos creado nuestro componente principal `GifExpertApp.js`

Vamos a añadir una lista de categorías partiendo de un arreglo

Dentro del retorno podemos poner una expresión js que retorne algo, no nos sirve un loop for pero sí
los métodos de los arrgelos como map.

Vamos a usar el Hook `useState` para que React sepa el estado inicial de los elementos del arreglo

Creamos una función que es un handler que responde al evento click, lo llamamos `handleAdd`,
utilizamos la función `setCategories` definida en la desestructuración que hemos hecho con `useState`
para alterar el valor de `categories`, añadimos un elemento al arreglo usando el operador Spread


## Crear un componente AddCategory

Vamos a refactorizar el código de la funcionalidad añadir categoria y la llevamos a un componente aparte

Creamos un nuevo directorio `components` y dentro creamos el componente `AddCategory`

Volvemos a `GifExpertApp.js` y borramos el botón y en su lugar ponemos la etiqueta del componente `AddCategory`
y nos aseguramos de que ha sido importado

En `AddCategory` añadimos un formulario y creamos un handler que maneje el evento onChange, ahora envolvemos
todo en un form por lo que no necesitamos las etiquetas Fragment ni las vacías.

Añadimos a form el evento onSubmit y lo manejamos con un handler al que incorporamos preventDefault para
que no refresque la página


## Comunicación entre componentes

Necesitamos llamar a `setCategories` que está en el padre `GifExpertApp.js` desde el hijo que es `AddCategory`
hay muchas maneras, la básica es pasarle propiedades a la etiqueta <AddCategory /> en este caso vamos a
pasarle la referencia a la función `setCategories`.

Ahora en `AddCategory` estamos recibiendo como props la función `setCategories` y podemos usarla


## Fetch API

Queremos que cuando agreguemos una categoría la app haga un fetch a la API de Giphy y nos devuelva las imágenes
correspondientes a la categoría y se pinten

Vamos a crear un componente `GifGrid.js` que reciba `categories` como argumento

Ahora reemplazamos en `GifExpertApp.js` la lista por el componente <GifGrid />

Vamos a Giphy API: `https://developers.giphy.com/docs/api/endpoint#search`

Probamos una búsqueda en Postman con nuestro apiKey

Ahora implementamos el fetch en la `GifGrid.js`


## useEffect

Es fácil entrar en un ciclo infinito, donde al hacer un cambio en el componente este se renderiza de nuevo

Para prevenir esto tenemos `useEffect` que permite ejecutar cierto código de manera condicional, recibe un
callback como argumento y ahí ponemos el código a ejecutar y como segundo argumento tenemos un arreglo de
dependencias


## className

Para setear clases de estilos en el elementos HTML debemos usar `className` pues `class` es una palabra reservada de js
de resto funciona igual


## Helpers

Son funciones que hacen un trabajo específico, reciben argumentos y retornan algo. No necesariamente redibujan el estado.

Refactorizamos, extraemos la función getGifs de `GifGrid.js` y la pegamos en archivo nuevo `helpers/getGifs.js`, añadimos export

Hacemos que retorne el resultado, pero la función es de tipo async, así que lo que retorna es una promesa.

En `GifGrid.js` importamos la función y la manejamos con el `then`


## Custom Hooks

Los custom Hooks es una forma de extraer lógica de un componente o lógica que vamos a reutilizar de forma que sea sencillo
utilizarla nuevamente.

En `GifGrid.js` tenemos la instrucción `useEffect` que hace que cuando el componente se cargue por primera vez lance la
petición para obtener las imágenes.

Vamos a crear un custom Hook que contenga esta instrucción y a la vez nos indique cuándo está haciendo la petición y cuando ha
terminado de hacer la carga.

Creamos directorio `src/hooks` y dentro creamos archivo `useFetchGifs.js` use indica que el archivo es un Hook

Los custom Hooks pueden tener Hooks normales como useState para indicar a otros componentes que lo utilicen cuando deben
renderizarse porque algo ha cambiado.

Ahora lo importamos en `GifGrid.js`

Los custom Hooks funcionan como si fueran functional components, pueden usar efectos, reduced, contextos

Extraemos useEffect de `GifGrid.js` y lo implementamos en `useFetchGifs.js`


## Build del proyecto para producción

Ejecutamos > `npm run build`

Se inicia el proceso de tree shaking

Se crea un directorio `build` cuyo contenido es el destinado a ser desplegado en un servidor

No podemos correr la app con el protocolo `file` porque usamos importaciones y no son permitidas con este protocolo, tenemos
que subir la app a un servidor y acceder mediante el protocolo `http` o `https`

También podemos usar `http-server` y correrlo en localhost











### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# GIT

En nuestra cuenta de github creamos un repositorio

Si no tenemos repositorio git local lo creamos > `git init`

Si no tenemos archivo `.gitignore` lo creamos, especialmente para evitar `node_modules`

Añadimos los cambios a GIT> `git add .`
Commit > `git commit -m "Primer commit"`

Si en este punto borro accidentalmente algo puedo recuperarlo con > `git checkout -- .`

Que nos recontruye los archivos tal y como estaban en el último commit.

Enlazamos el repositorio local con un repositorio externo en GitHub donde tenemos cuenta y hemos creado un repositorio
`git remote add origin https://github.com/Awandor/gif-expert-react-app.git`

Situarnos en la rama master > `git branch -M master`

Subir todos los cambios a la rama master remota > `git push -u origin master`

Para reconstruir en local el código de GitHub nos bajamos el código y ejecutamos `npm install` que instala todas las dependencias


## Tags y Releases

Crear un tag en Github y un Release

> `git tag -a v1.0.0 -m "Versión 1 - Lista para producción"`

> `git tag` muestra los tags

> `git push --tags` > sube los tags al repositorio remoto

En github vamos a Tags > Add release notes


## Desplegar aplicación en GitHub Pages

Vamos github y creamos un nuevo repositorio, subimos la app

Ahora vamos acceder al repositorio como si fuera una página web

Vamos a Settings > GitHub Pages > Source > master branch > Save

La app es ahora accesible desde `https://awandor.github.io/twitter-pwa/`
