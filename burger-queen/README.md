# Burger Queen

## Preámbulo

[React](https://reactjs.org/), [Vue](https://es.vuejs.org/index.html) y [Angular](https://angular.io/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      | Precio \$ |
> | ------------------------- | --------- |
> | Café americano            | 5         |
> | Café con leche            | 7         |
> | Sandwich de jamón y queso | 10        |
> | Jugo de frutas natural    | 7         |
>
> Y otro menú para el resto del día:
>
> | Ítem                 | Precio |
> | -------------------- | ------ |
> | **Hamburguesas**     | **\$** |
> | Hamburguesa simple   | 10     |
> | Hamburguesa doble    | 15     |
> | **Acompañamientos**  | **\$** |
> | Papas fritas         | 5      |
> | Aros de cebolla      | 5      |
> | **Para tomar**       | **\$** |
> | Agua 500ml           | 5      |
> | Agua 750ml           | 7      |
> | Bebida/gaseosa 500ml | 7      |
> | Bebida/gaseosa 750ml | 10     |
>
> **Importante:** Lxs clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por \$ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos de aprendizaje

1. El objetivo principal de es aprender a construir una _interfaz web_ usando
   el _framework_ elegido ([React](https://reactjs.org/), [Vue](https://es.vuejs.org/index.html) o [Angular](https://angular.io/)) o vanilla JS. Todos estos frameworks de
   Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el concepto
   de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
   a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

2. Como objetivo secundario, deberás seguir las recomendaciones para PWAs
   (_Progressive Web Apps_), lo cual incluye conceptos como **offline**. Para
   guiarte con respecto a este tema te recomendamos usar [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es),
   que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps
   sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de evaluar el
   proyecto.

Recuerda colocar en esta seccion los objetivos de aprendizaje que quedaron
pendientes de tu proyecto anterior.

### HTML y CSS

- [x] HTML semántico
- [x] CSS flexbox
- [x] Sass
- [x] Maquetación

### Frontend Development

- [ ] Componentes
- [ ] Manejo del estado

### PWA

- [x] Concepto
- [x] Utilidad
- [x] Que es [Workbox](https://developers.google.com/web/tools/workbox)
- [x] Qué es un `serviceWorker`

### Angular

- [ ] [Uso de Components | Templates](https://angular.io/guide/architecture-components#introduction-to-components)
- [ ] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
- [ ] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
- [ ] [Creación y uso de servicios](https://angular.io/guide/architecture-services#providing-services)
- [ ] [Manejos de rutas](https://angular.io/guide/router)
- [ ] [Uso de Observables](https://angular.io/guide/observables-in-angular)
- [ ] [Uso de HttpClient](https://angular.io/guide/http)
- [ ] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)

### React

- [x] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [x] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
- [x] `props`
- [x] [Manejo de eventos](https://es.reactjs.org/docs/handling-events.html)
- [x] [Listas y keys](https://es.reactjs.org/docs/lists-and-keys.html)
- [ ] [Renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
- [ ] [Levantamiento de estados](https://es.reactjs.org/docs/lifting-state-up.html)
- [x] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
- [ ] [`CSS` modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [x] [React Router](https://reacttraining.com/react-router/web)

### Vue

- [ ] [Instancia de Vue.js](https://es.vuejs.org/v2/guide/instance.html)
- [ ] [Datos y métodos](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
- [ ] [Uso y creación de Componentes](https://vuejs.org/v2/guide/components.html)
- [ ] [Props](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
- [ ] Directivas ([v-bind](https://es.vuejs.org/v2/api/#v-bind) | [v-model](https://es.vuejs.org/v2/guide/forms.html))
- [ ] Renderizado condicional ([v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if) | [v-else](https://es.vuejs.org/v2/guide/conditional.html#v-else))
- [ ] Iteraciones ([v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for))
- [ ] Eventos ([v-on](https://es.vuejs.org/v2/guide/events.html))
- [ ] [Propiedades Computadas y Observadores](https://es.vuejs.org/v2/guide/computed.html)
- [ ] [Router](https://router.vuejs.org/guide/#html)
- [ ] [Clases y Estilos](https://es.vuejs.org/v2/guide/class-and-style.html)
- [ ] [Gestión de Estado](https://es.vuejs.org/v2/guide/state-management.html#Gestion-de-estado-simple-desde-cero)

### Firebase

- [x] Firestore
- [ ] Firebase security rules
- [x] Observables

### Testing

- [ ] Testeo de tus interfaces
- [x] Testeo de componentes
- [ ] Testeo asíncrono
- [ ] Mocking

### Colaboración en Github

- [x] Branches
- [x] Pull Requests
- [x] Tags

### Organización en Github

- [x] Projects
- [x] Issues
- [x] Labels
- [x] Milestones

### Buenas prácticas de desarrollo

- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting

---

## Consideraciones

- Este proyecto se debe "resolver" de a pares.

- La duración propuesta del proyecto es 5 sprints, con una duración de una semana cada uno.

- Trabaja en una historia hasta terminarla antes de pasar a la siguiente.

- Trabaja hasta la historia que puedas en el tiempo especificado.

- La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS y empaquetada de manera automatizada.

- En este proyecto Sí está permitido usar librerías o frameworks
  (debes elegir entre [React](https://reactjs.org/), [Vue](https://es.vuejs.org/index.html),
  [Angular](https://angular.io/) o Vanilla Js).

- La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
  _tablet_, pero **no queremos una app nativa**, sino una web app que sea
  **responsive** y pueda funcionar **offline**.

- La interfaz debe estar diseñada específicamente para correr en
  **tablets**.

- Necesitamos pensar bien en el aspecto UX de quienes van a tomar los pedidos,
  el tamaño y aspecto de los botones, la visibilidad del estado actual del
  pedido, etc.

- La aplicación desplegada debe tener 80% o más el las puntuaciones de
  Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

- Deberas de guardar la información de los pedidos realizados por
  lo cual te recomendamos utilizar [Firebase](https://firebase.google.com/).

- La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
  `test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
  empaquetar y desplegar la aplicación respectivamente.

- Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
  _lines_ y _branches_.

- Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
  necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
  los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta hoy.

---

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

---

## Pistas / Tips

### Frameworks / libraries

- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue](https://es.vuejs.org/index.html)

### Herramientas

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)

### PWA

- [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
- [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
- [offlinefirst.org](http://offlinefirst.org/)
- [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

### Serverless

- [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
- [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
- [Firebase](https://firebase.google.com/)
- [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

### Cloud functions

- [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)
