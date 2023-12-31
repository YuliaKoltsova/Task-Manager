// Добавление уведомлений
import { tasks } from "./add-task.js";
import { saveToLocalStorage } from "./save-to-local-storage.js";

setInterval(() => {
  let currentDate = Date.parse(new Date());

  tasks.forEach((task) => {
    const dateTask = Date.parse(new Date(task.data + " " + task.time));
    // напоминание о ближайшей задачи будет за 10 минут до ее начала. 10 минут = 600000 миллисекунд
    if (dateTask == currentDate + 600000 || dateTask <= currentDate + 600000){ 
      if (task.notification == false) {
        task.notification = true;
        saveToLocalStorage();
        alert("Напоминание!" + " " + task.name  + ". " + task.description + ". " +  task.data + " " + task.time);
      }
    }
  })
})