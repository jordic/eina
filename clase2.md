
# Clase 2

## Repaso

- Editor de texto
- FTP
- Cliente/Servidor
- Documento html

## Archvios, rutas y carpetas

```
FTP
 - htdocs
     index.html
     img/
       foto1.jpg
```

- El html es un lenguaje hypertextual que nos permite referenciar, elementos en otros documentos. Cuando usamos el tag `<img src="img/foto1.jpg" />` lo que estamos introduciendo en el atributo src, es la ruta del archivo que queremos mostrar.

- Un path a un archivo, fundamentalmente se compone, de la ruta a este, y el nombre final del archivo. La ruta, hace referencia a la jerarquia de carpetas donde el archivo está almacenado y, se separan con la `/`.  Así:

``` /directorio/alumnos/pablo_sanolorenzo/cv.html```

El CV de Pablo está almacenado en la carpeta (que cuelga de la raíz), directorio, y dentro de esta en la carpeta alumnos, para finalmente la carpeta personal del alumno. Su currículum reside en esta dirección.

- Existen fundamentalmente dos tipos de paths (rutas) de archivos: **absolutos** y **relativos**

### Paths absolutos

- En las rutas absolutas, los archivos ser referencian en relación a la raíz del servidor:

```
/index.html
/img/foto1.jgp
/docs/cv_ana.html
  /img/foto1.jpg
```
- La `/` inicial indica la raíz del servidor (dominio), también llamada *root*.
- Un path absoluto también puede contener el dominio, host y protocolo: `https://www.eina.edu/alumnos/pepe.jpg`

- Los paths se computan siempre des del punto de vista del cliente que los visualiza.


### Paths relativos

- Los paths relativos se calculan en base a el orígen del documento que los referencia.
- Nunca empiezan por `/` (ya que indica absoluto).
- Para referenciar elementos en el mismo nivel o en niveles inferiores, simplemente, con el nombre del camino (ruta) es suficiente.

```
index.html
  img/imagen1.jpg
  contacto.html
  noticias/2019/noticia1.html
```

- También pueden referenciar elementos existentes en sus padres con el "operador" `../`

```
imagen1.jpg
noticias/index.html
    ../imagen1.jpg
```

Se pueden añadir tantos niveles como necesitemos:

`../../../imagenes/una.jpg`

### Donde se utilizan las rutas?

- En elementos que referencian a otros:

```
<a href="pagina2.html">Texto Enlace</a>
<img src="../archivo/archivo.pdf">Descargar PDF</a>
<link rel="stylesheet" type="text/css" href="/css/styles.css" />
<script src="js/main.js"></script>
```

Los servidores http (web), generalmente cuando abren una carpeta,
muestran un documento por defecto **index.html**.
Utilizando esto, podemos crear páginas del estilo:
```
http://misitio.com/personal/
http://misitio.com/noticias/
```

En ambos casos, al acceder con el navegador se cargará la página index.html


```
Ejercicio
-----

Construiremos un pequeño site personal de 4 páginas,
con un menu de enlaces, una imágen en la cabecera y
un archivo.pdf descargable.

  /index.html
  /descargas/cv.pdf
  /imagenes/foto.jpg
  /personal/index.html
  /personal/cv.html
  /personal/enlaces.html

```

## Elementos de bloque y elementos en linea

*Block elements* que una vez colocados en el documento, ocupan todo el espacio
horizontal (*width*) del mismo, y forzando al siguiente elemento a posicionarse por debajo. A diferencia los *inline elements* son elementos que se pueden posicionar en el mismo flujo del documento, sin usar todo el espacio de ancho.

Elementos de bloque comunes:

  - Paragraphs (`<p>`)
  - Headers (`<h1>` a `<h6>`)
  - Divisions (`<div>`)
  - Lists and list items (`<ol>`, `<ul>`, y `<li>`)
  - Forms (`<form>`)

Elementos comunes inline

  - `<span>` Spans
  - `<a href=""></a>`
  - `<img>`

```
Ejercicio
---
Crearemos un nuevo documento html y en él insertaremos un <div>,
luego dentro del div, crearemos un enlace e insertaremos una imágen

<img src="">

Probaremos que pasa si a la imágen le colocamos el atributo align="left"
y/o el atributo align="right"

Podemos usar otros elementos interesantes
```

## El html es semántico

- El html no solo nos sirve para diseñar el contenido de una forma bonita
y/o agradable. En realidad el html, es un lenguaje semántico, donde cada
etiqueta otorga jerarquía y metainformación al contenido. A partir del html5 aparecen un conjunto nuevo de etiquetas, especificamente pensadas para potenciar esta parte.

- Un documento html correctamente generado y con una hoja de estilos específica podría ser convertido en un libro impreso.

  - `<header>` Marca la cabecera
  - `<main>` Marca el contenido mas importante de la url
  - `<nav>` Contiene la navegación del site (*menu*)
  - `<section>` Sección
  - `<article>` Articulo
  - `<aside>` Sidebar o contenido adicional
  - `<footer>` Pie
  - `<details>` Detalles del site (normalmente se usa en el pie)
  - `<mark>` Marca un elemento como importante

- [Tags principales html5](https://www.bitdegree.org/learn/storage/media/images/de63e0dd-5287-4871-aac2-4aeb7678759e.jpg)

- Idea clave: Cuando creaamos documentos html no solo nos debemos preocupar
de su aspecto visual, sino que es también muy importante construirlos con una semántica correcta. De esta forma, los buscadores, que son programas informáticos que procesan la información que descargan, pueden **entender** y por tanto **clasificar** de forma mucho mas correcta el contenido de nuestras páginas html.

- Información adicional: [RDF Resource Description Framework](https://es.wikipedia.org/wiki/Resource_Description_Framework)

### Atributos en etiquetas básicas

`<a href="" target="">Enlace</a>`

  - `href` Dirección ur
  - `target` (_blank, prop) Ventana donde se abrirá el enlace

`<img src="" width="" height="" alt="" />`
  - `src` url del recurso
  - `width` ancho
  - `height` alto
  - `alt` Contenido alternativo

Hay algunos atributos comunes que se pueden utilizar en todos los elementos html:

  - `style`: Permite vincular estilos css directamente al elemento
  - `class`: Permite asociar una classe css al elemento. Luego des de
  css podremos crear selectores para poder dar estilos a estos elementos
  - `id`: Permite asociar un identificador único a un elemento. Los navegadores no comprueban que los id sean únicos, pero si no respetamos
  esto (y los repetimos) perdemos su principal potencial: referenciar elementos de forma directa en la página.


```
Ejercicio
--
Usando todos los contenidos de la sesión, realizaremos uns página html con nuestro currículum personal, incluyendo nestra foto y los principales elementos en un CV. Muy importante prestar atención a la estructura semántica.
```

- Usaremos el inspector web para empezar a aplicar algunos estilos a nuestro documento. Podemos trasladar algunos de estos estilos al propio doucmento para dejarlo mas bien terminado.
