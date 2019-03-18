# Clase 6

## Repaso sesión anterior

- pseudo elementos
- flexbox


## Fonts

- Podemos embeder fuentes (extras) en nuestros diseños, pero ya que habilitamos la descarga de la fuente, debemos disponer de una licencia (si la fuente no es opensource) que nos permita ofrecerla en descarga.

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}
```

- Esta es la sintaxis básica, aunque existen numerosas excepciones, y problemas relacionados con la misma, lo ideal,
es que usemos un servicio externo de fuentes. Actualmente por velocidad y cantidad el mejor es Google Fonts, donde además tenemos la garantia que las fuentes que hay son Open Source. (Las podemos usar).

- [Google Fonts](https://fonts.google.com/)

- Embedir una fuente de google es tan simple, como seleccionarla, copiar y pegar el codigo, e introducirlo en nuestro documento html.

```html
<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">`
```

- Hay que ser sumamente cuidadoso con la cantidad de fuentes que se introducen en un documento html (Cada fuente), es un elemento que bloquea el pintado (render) de la página y a mayor cantidad nuestra web se percibirá como mucho mas lenta.


## Backgrounds

```css
body {
  background:
     url(sweettexture.jpg)    /* image */
     top center / 200px 200px /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box              /* clip */
     red;                     /* color */
}
```

- CSS Background [CSS Tricks: background](https://css-tricks.com/almanac/properties/b/background/)

- Multiple background
- Cliping
- Gradients. [Colorzilla. Gradient Editor](http://www.colorzilla.com/gradient-editor/)


## Media querys




## SVG

- Simple Vector Graphics, es un lenguaje de marcado, igual que el html, pero destinado a la creación de elementos vectoriales. (Todos los editores vectoriales son capaces de exportar y generar contenido con ellos)

- Podemos usar svg como imágenes, `<img src="img/svg.svg">` o como backgrounds `background-image: url(svg.svg)`, pero en ambos casos no tenemos control sobre ellos

- Aunque lo que resulta mas interesante es usarlos directamente en código html, ya que luego, mediante css, podemos modificar o alterar sus propiedades.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65">
  <path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
  <path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
</svg>
```

- Entender las propiedades básicas de los svg a la hora de embedirlos en una web [Articulo](https://www.sarasoueidan.com/blog/svg-coordinate-systems/)


### Transforms


## CSS Animations

