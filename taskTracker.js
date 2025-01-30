const fs = require('node:fs/promises')

// Obtener el comando y el ID de los argumentos de la línea de comandos
const comando = process.argv[2] ?? '.'
const id = process.argv[3]

async function readTasks() {
  let tasks = []
  try {
    const data = await fs.readFile('./data.json', 'utf-8')
    if (data) {
      tasks = JSON.parse(data)
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Archivo data.json no encontrado, creando uno nuevo...')
      await fs.writeFile('./data.json', JSON.stringify([]))
    } else {
      console.log('No se pudo leer el archivo data.json', err)
    }
  }
  return tasks
}

async function writeTasks(tasks) {
  try {
    await fs.writeFile('data.json', JSON.stringify(tasks, null, 2))
  } catch {
    console.log('No se pudo guardar la tarea')
  }
}

function listTasks(tasks, filter) {
  if (tasks.length === 0) {
    console.log('No hay tareas')
  } else {
    console.log('Tareas:')
    tasks.filter(task => !filter || task.status === filter).forEach(task => {
      console.log(`${task.id}: ${task.task.padEnd(30)} Estado: ${task.status}, Created: ${task.created_at} Updated: ${task.updated_at}`)
    })
  }
}

async function addTask(tasks, taskDescription) {
  const genID = tasks.length + 1
  const newTask = { id: genID, task: taskDescription, status: 'pendiente', created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString() }
  tasks.push(newTask)
  await writeTasks(tasks)
  console.log(`Tarea agregada exitosamente ID: ${genID}`)
}

async function deleteTask(tasks, id) {
  const taskIndex = tasks.findIndex(task => task.id === Number(id))
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1)
    await writeTasks(tasks)
    console.log('Tarea eliminada')
  }
}

async function updateTask(tasks, id, newTaskDescription) {
  const taskIndex = tasks.findIndex(task => task.id === Number(id))
  if (taskIndex !== -1) {
    tasks[taskIndex].task = newTaskDescription
    tasks[taskIndex].updated_at = new Date().toLocaleString()
    await writeTasks(tasks)
    console.log(`Tarea actualizada exitosamente ID: ${id}`)
  }
}

async function markTaskStatus(tasks, id, status) {
  const taskIndex = tasks.findIndex(task => task.id === Number(id))
  if (taskIndex !== -1) {
    tasks[taskIndex].status = status
    tasks[taskIndex].updated_at = new Date().toLocaleString()
    await writeTasks(tasks)
    console.log(`Tarea marcada como ${status} ID: ${id}`)
  }
}

async function taskTracker(cmd, id) {
  let tasks = await readTasks()

  switch (cmd) {
    case '.':
      console.log('Por favor, ingrese un comando')
      break
    case 'list':
      listTasks(tasks, process.argv[3])
      break
    case 'add':
      await addTask(tasks, process.argv[3])
      break
    case 'delete':
      await deleteTask(tasks, id)
      break
    case 'update':
      await updateTask(tasks, id, process.argv[4])
      break
    case 'mark-done':
      await markTaskStatus(tasks, id, 'completada')
      break
    case 'mark-in-progress':
      await markTaskStatus(tasks, id, 'en progreso')
      break
  }
}

taskTracker(comando, id)
