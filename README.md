# Task-Tracker-CLI

## Descripción

Task-Tracker-CLI es una aplicación de línea de comandos diseñada para ayudar a los usuarios a gestionar sus tareas diarias de manera eficiente. Permite a los usuarios crear, actualizar, listar y eliminar tareas directamente desde la terminal.

## Características

- Crear nuevas tareas con descripciones detalladas.
- Listar todas las tareas pendientes, en progreso y completadas.
- Actualizar el estado de las tareas.
- Eliminar tareas que ya no son necesarias.
- Marcar tareas como completadas o en progreso.

## Instalación

Para instalar y ejecutar Task-Tracker-CLI, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tuusuario/Task-Tracker-CLI.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Task-Tracker-CLI
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para usar la aplicación, ejecuta el siguiente comando en tu terminal:
```sh
node taskTracker.js <comando> [argumentos]
```

### Comandos Disponibles

- `list`: Lista todas las tareas.
  - `list todo`: Lista todas las tareas pendientes.
  - `list in-progress`: Lista todas las tareas en progreso.
- `add <descripción>`: Agrega una nueva tarea con la descripción proporcionada.
- `delete <id>`: Elimina la tarea con el ID proporcionado.
- `update <id> <nueva descripción>`: Actualiza la descripción de la tarea con el ID proporcionado.
- `mark-done <id>`: Marca la tarea con el ID proporcionado como completada.
- `mark-in-progress <id>`: Marca la tarea con el ID proporcionado como en progreso.

## Ejemplos

Agregar una nueva tarea:
```sh
node taskTracker.js add "Hacer de comer albondigas"
```

Listar todas las tareas:
```sh
node taskTracker.js list
```

Marcar una tarea como completada:
```sh
node taskTracker.js mark-done 1
```

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Referencias

Este proyecto es parte de los ejercicios de [Roadmap.sh](https://roadmap.sh/projects/task-tracker).
