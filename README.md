### Función addTask:

Recibe una tarea como parámetro, verifica si el campo de texto de la tarea no está vacío, quita los espacios en blanco iniciales y finales del campo de texto, crea una nueva matriz que incluye la tarea agregada al principio y actualiza el estado de la lista de tareas con la nueva versión.

1. `const [tasks, setTasks] = useState([]);`: Esta línea utiliza el hook de estado useState para declarar una variable de estado llamada tasks y una función setTasks para actualizar ese estado. Inicialmente, el valor del estado tasks se establece como una matriz vacía [].

2. `const addTask = (task) => { ... }`: Esto declara una función llamada addTask que acepta un parámetro task.

3. `console.log("tarea agregada"); console.log(task);`: Estas líneas imprimen en la consola el mensaje "tarea agregada" y el contenido de la variable task. Esto se utiliza para verificar y depurar el código.

4. `if (task.text.trim()) { ... }`: Esta línea verifica si el campo de texto de la tarea (task.text) no está vacío después de aplicar la función trim(), que elimina los espacios en blanco iniciales y finales. Esto ayuda a asegurarse de que no se agreguen tareas vacías a la lista.

5. `task.text = task.text.trim();`: Si la tarea no está vacía, se utiliza trim() para eliminar los espacios en blanco iniciales y finales del campo de texto de la tarea. Esto actualiza la propiedad text de la tarea con la versión sin espacios en blanco.

6. `const tasksActualized = [task, ...tasks];`: Se crea una nueva matriz llamada tasksActualized que contiene la tarea actual (task) agregada al principio de la matriz tasks existente. Se utiliza el operador spread (...) para descomponer la matriz tasks y agregar sus elementos a la nueva matriz.

7. `setTasks(tasksActualized);`: Finalmente, se utiliza la función setTasks para actualizar el estado de la variable tasks con la nueva matriz tasksActualized. Esto reemplaza la matriz de tareas existente con la nueva versión que incluye la tarea agregada.

### Función "deleteTask":

Elimina una tarea específica de una lista de tareas basándose en su ID y actualiza el estado de la lista de tareas con la versión filtrada sin la tarea eliminada.

Acepta un parámetro id que representa el identificador de una tarea. A continuación, realiza las siguientes acciones:

1. Declara una nueva variable llamada tasksActualized que almacenará una versión actualizada de la lista de tareas.
2. Utiliza el método filter() en la matriz tasks para crear una nueva matriz tasksActualized que excluye la tarea con el ID especificado. El método filter() recorre cada elemento de la matriz tasks y devuelve un nuevo arreglo con los elementos que cumplen con la condición proporcionada. En este caso, se excluye la tarea que tiene el ID igual al valor del parámetro id.
3. Finalmente, se utiliza la función setTasks (suponiendo que es una función proporcionada por un hook de estado) para actualizar el estado de la variable tasks con la nueva matriz tasksActualized. Esto significa que se reemplaza la matriz de tareas existente con la nueva versión filtrada que excluye la tarea con el ID especificado.

### función finishTask:

Busca una tarea específica en la lista de tareas basándose en su ID, cambia el estado de su propiedad done y actualiza el estado de la lista de tareas con la versión actualizada.

1. Declara una nueva variable llamada tasksActualized que almacenará una versión actualizada de la lista de tareas.
2. Utiliza el método map() en la matriz tasks para crear una nueva matriz tasksActualized que mapea cada tarea de la lista original y realiza una operación de transformación en cada una.
3. Para cada tarea en la matriz original, se verifica si su id coincide con el valor del parámetro id especificado.
4. Si la tarea tiene el mismo id, se cambia el estado de su propiedad done a su valor opuesto utilizando el operador de negación (!). Esto significa que se invierte el valor de done, es decir, si estaba true, ahora será false, y si estaba false, ahora será true.
5. Después de realizar esta operación de cambio de estado, se devuelve la tarea actualizada.
6. La función map() crea una nueva matriz con todas las tareas actualizadas, donde la tarea con el id especificado tendrá su propiedad done cambiada.
7. Finalmente, se utiliza la función setTasks (suponiendo que es una función proporcionada por un hook de estado) para actualizar el estado de la variable tasks con la nueva matriz tasksActualized. Esto significa que se reemplaza la matriz de tareas existente con la nueva versión que tiene la tarea con el id especificado con su propiedad done actualizada.
