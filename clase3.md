
# Clase 3

## Repaso sesión anterior

- Cliente vs Servidor
- Html
- Rutas, paths, directorios y archivos.
  Relativos: `imagenes/imagen1.jgp` `../imagenes/img2.jpg` Absolutos: `/img/p.png`
- Elementos de bloque y elementos inline

## Colores, y colores

- RGB (Red, Green, Blue) (RGBA)
- Colores en formato hexadecimal (255, 255, 255) (00 -- ff)
- (El cuarto componente en formato rgb (canal alpha))

<span style="color: rgb(0,0,100)">████</span> ` color: rgb (0,0,100)`
<br /><span style="color: rgb(0,255,100)">████</span> ` rgb(0,255,100, 80)`


## Citas

- Podemos crear una cita de texto en html con el elemento
`<blockquote><blockquote>`

```html
<blockquote>Una cita</blockquote>
```
<blockquote>Una cita</blockquote>


## Tablas


- Las tablas en html se crean usando la etiqueta `<table>`
- Crearemos nuevas filas con la etiqueta `<tr>` (Fila)
- Las columnas se crean con la etiqueta `<td>` (Cela)
- Podemos marcar el header con la etiqueta `<thead></thead>` y el
continido con `<tbody></tbody>`
- Podemos usar el atributo `colspan` para incrementar el número de
columas que ocupa una celda. Y `rowspan` para incrementar el n

```html
<table>
 <thead>
  <tr>
    <td>Col 1</td>
    <td>Col 2</td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="2" align="right">Cont 1</td>
  </tr>
  <tr>
    <td rowspan=2>Cont 1</td>
    <td>Cont 2</td>
  </tr>
  <tr>
    <td>Cont 2</td>
  </tr>
  </tbody>
</table>
```

<table border="1">
 <thead>
  <tr>
    <td>Col 1</td>
    <td>Col 2</td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="2" align="right">Cont 1</td>
  </tr>
  <tr>
    <td rowspan=2>Cont 1</td>
    <td>Cont 2</td>
  </tr>
  <tr>
    <td>Cont 2</td>
  </tr>
  </tbody>
</table>



## CSS. Cascading Style Sheet

Hojas de estilo en cascada.

- Las hojas de estilo nos permiten "configurar" el aspecto visual de nuestro documento html. Normalmente las hojas de estilo, se incluyen en el `<head>` del documento utilizando la etiqueta: <br/>
`<link rel="stylesheet" type="text/css" href="estilos.css">`

- Se llamanan en cascada, porque las hojas de estilo declaradas a posterior pueden sobreescrivir o ampliar estilos declarados previamente. Así podemos encontrar documentos html que continen varias hojas de estilo:

```html
<link rel="stylesheet" type="text/css" href="base.css">
<link rel="stylesheet" type="text/css" href="typos.css">
<link rel="stylesheet" type="text/css" href="layout.css">
<link rel="stylesheet" type="text/css" href="style.css">
```

- El archivo `typos.css` puede sobreescrvir cualquier estilo declarado en `base.css`. Y el archivo `style.css` puede sobreescrivir cualquier estilo declarado anteriormente.

- Es común que usemos "plugins" o widgets externos que nos proveen sus propios estilos, y que los podamos sobreescrivir des de nuestra propia hoja de estilos (Esto simplemente pasa, por declarar la nuestra como
la última de la cascada)

- Aunque no muy común (ya que no reciclamos los estilos en cada página del sitio), los stylos también pueden declararse usando la etiqueta
`<style></style>` en el head del documento (también funciona en culquier otra parte, pero no es una buena práctica ya que bloquea el thread principal)

- También los podemos incluir directamente en los atributos html del documento (pero es una muy mala práctica), ya que terminaremos con estilos en todas partes y será difícil de mantener.

- Cualquier regla de estilo, se escribe, (cuando no es directamente en el elemento) usando un selector, y aplicando la regla entre llabes: ` {}`

```css
p {
  color: red;
  font-size: 18px;
}
```
- Las distintas propiedads que queremos determinar para el selector, se separan por `;`, el salto de carro no es obligatorio, pero es deseable para mejorar la gestión del archivo en sistemas de control de versiones.


### Selectores

Para poder dar formato a nuestro documento semántico (html), necesitamos disponer de un sistema que nos permita declarar y definir propiedades de formato para conjuntos de elementos. Dicho de otra forma, necesitamos _seleccionar_ los elementos a los cuales queremos aplicar la regla de formato que definimos.

Podemos:

```html
<style>
p {
  color: red;
  font-family: Helvetica, Arial, san-serif;
  font-size: 24px;
}
<style>
````

En este caso, estamos usando un selector de elmento `p -> <p>` que nos permite aplicar una regla genérica a **todos** los elementos de tipo `<p>`.

Fundamentalmente existen 3 tipos de selectores:


### Elementos

- de *elemento*: `p {}`, `strong {}`, `h1 {}`
- No es muy buena idea sobreescrivir los elementos principales (ya que afectan al estilo de todos los elementos del tipo que tengamos)

### Clases

- *clases*. `.nombreclasse {}`. Las etiquetas html pueden contener un atributo `class` que determina la clase/tipo del elemento. Un elemento puede tener varias classes asignadas, y la prioridad es de izquierda a derecha.

- Para crear reglas de clase, utilizaremos un `.` seguido del nombre de la clase.

```
<p class="parrafo verde destacado">XXXX</p>
```

```css
.parrafo {
  font-size: 24px;
  padding: 30px;
}
.verde {
  color: green;
}
.destacado {
  font-size: 30px;
  color: red
}
```

### Identificador

Los elementos html, pueden tener un atributo `id` que sirve como identificador único. Podemos seleccionar elementos mediante `id` usando el carácter `#`. Así, `#menu_principal` escoje el elmento que encuentre con el `id == menu_principal`

- Su principal ventaja, (ser muy especificos a la hora de seleccionar un elemento) se convierte en su principal problema (solo podemos tener un único elemento con el mismo id...sino pasaran cosas raras.. )


### Selectores complejos.

- Los selectores no son tan simples (como aparentemente parecen) ya que nos permiten crear reglas, para seleccionar partes u elementos del documento de forma genérica. **Los distintos tipos pueden mezclarse**.

Así podemos tener selectores como

- ` #main p `  Cualquier párrafo dentro del elemento de id=main.
- `p.verde`  Párrafos con la class=verde. (no selecciona div.verde, ni strong.verde)
- `#main p.verde` Párrafos con el class verde que son herederos de #main.
- `#main > p.verde` Solo párrafos hijos de main (pero no el resto de sus herederos)

Ademas, podemos tener multiples selectores por regla,

```css
p.green, p.blue, p.red {
  font-size: 12px;
}
```

También existe un selector comodín: <strong>*</strong>

```css
 p > * {
   margin-left: -20px;
 }
```

Cualquier elemento hijo de `<p>`


### Links interesantes

- [Youtube sobre selectores](https://youtu.be/1h5StQJ8hww)
- [Referencia W3cSchool](https://www.w3schools.com/csSref/css_selectors.asp)
- [Referencia Mozilla](https://www.w3schools.com/csSref/css_selectors.asp)
- [Juego interactivo](https://flukeout.github.io)


