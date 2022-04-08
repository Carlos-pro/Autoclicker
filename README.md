**************************
INSTALACIÓN DE LA APP

Esta es una app hecha con HTML5, CSS3, JS y Lit basada en el juego de móvil Cookie-Clicker.

Para ejecutarla en local:

1. Descargar la carpeta del proyecto desde el repositorio a tu PC.
2. Arrastrar el proyecto a tu IDE de confianza (se recomienda VScode).
3. Abrir la terminal del IDE e instalarla con "npm install" en el caso de no tener los node_modules.
4. Una vez instalada, ejecutarla con "npm run start".
5. Abrir tu navegador e ir al localhost que la propia terminal te haya dicho al ejecutarla (por defecto suele ser localhost:8080).
6. ¡A jugar!.

**************************

Esta web-app consta de una vista home (y una game), en el cual solo se puede loguear con 'Carlos" para caballeros y 'Eva' para señoritas. En el caso de no introducir un nombre correcto, saltará un mensaje que te pedirá que vuelvas a introducirlo. En la parte superior hay un componente "navbar" de bienvenida con un saludo a la izquierda y un botón para retornar de la vista game a la home, una vez te hayas logueado correctamente.

Al loguarte correctamente, la app te llevará a la vista del juego, donde para empezar a jugar solo tendrás que darle click al botón central, el cual se marcará en rojo cuando lo hayas presionado una primera vez. Al llegar a cierta cifra, aparecerá otro botón, el cual te permitirá resetear el contador a cero y desaparecerá cuando lo haga.

(A partir de aquí, la aplicación sigue en desarrollo, queriendo implementar una nueva funcionalidad que permita comprar autoclickers). (Los autoclickers te ayudarán automáticamente a obtener puntos mientras tu le sigues dando click al botón, pudiendo así alcanzar tu siguiente meta de puntos mas rápidamente, y también nos gustaría que al cerrar sesión, pudieses introducir de nuevo tu nick de jugador y seguir con la partida guardada automáticamente).