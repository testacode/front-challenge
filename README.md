# Senior Frontend Developer Challenge

## Detalles

### La Aplicación

¡Estamos muy entusiasmados con Crypto! Nos gustaría tener un sitio para ver las 50 principales criptomonedas basadas en Market Cap. En la primera parte de este proyecto, nos gustaría ver una lista de los 50 mejores criptos, estas serán mostradas con los siguientes parámetros:

* Name
* Price
* Market Cap
* Circulating Supply (For example, Bitcoin Max supply is 21 Million Bitcoins, but the circulating supply is approx. 18 million)

### El api que usamos es esta

Ya tenemos las bases de esta app, la encontrarás acá, revisa el código y cuéntanos ¿Cómo lo ves? Si prefieres puedes usar el repositorio: [https://github.com/eva-tech/front-challenge](https://github.com/eva-tech/front-challenge)

### Pasos de la prueba

Importante: No es un requerimiento seguir el orden de los pasos, optimice su tiempo de la mejor forma y desarrollelos como se sienta más cómodo.

Use Typescript en el proyecto.
App.js está escrito en una clase, pero se debe reescribir como un componente funcional y usar hooks.
Reorganice los archivos y componentes del proyecto, de forma que usted considere óptima para trabajar.
Necesitamos una página para detallar las cryptos, cree una página de detalle, de tal forma que desde el listado de criptos, en cada ítem veamos un botón “ver”, que me permita ir a dicha página de detalle, la página debe mostrar:

* Botón de regresar
* Nombre de la crypto
* Precio en USD
Ya que tenemos una aplicación funcional y un poco más organizada, vamos a darle estilos. Siéntase libre de agregar el framework o librería css con el que se sienta más cómodo trabajando, también si lo prefiere, puede usar css puro. Ahora, dele un poco de amor a nuestra app y agregué márgenes y un estilo un poco más moderno y minimalista. Tenga en cuenta las siguientes consideraciones:

* Tipo de fuente: Montserrat
* Tamaño de la fuente por defecto: 18px
* Color de la fuente: #263238
* Color de fondo del app: #ECEFF1
* Color primario (barra superior): #01579B
* Color secundario (botones de detalle): #FF9800

Ya que logramos maquillar un poco nuestra app, es hora de agregar una barra superior estilo toolbar nos muestre las cryptos con mayor y menor precio del listado.
Agreguemos un poco más de valor. En la página de detalle de cada crypto, mostremos además los precios de dicha crypto en EUR, JPY, BTC y ETH
Agreguemos una página de login, que sea la primera página vista al llegar al app, debe ser un formulario simple con usuario (un email válido) y contraseña (alfa numérico de no menos 8 caracteres y un carácter especial). Al ingresar cualquier email y contraseña que cumpla estos requisitos, debería poder acceder y ver el listado de cryptos.
Agregue algunos test unitarios a los componentes creados que nos permita validar el funcionamiento adecuado.
