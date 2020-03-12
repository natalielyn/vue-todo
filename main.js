new Vue({
  el: '#app',
  data: {
   tasks: [{task:"Mow the lawn", assigned: 'Trevor'}],
   task: {task:"", assigned: ''}
  },
  methods: {
    addTask() {
       this.tasks.push({task: this.tasks.task, assigned: this.tasks.assigned});
    },
    removeTask() {
      this.tasks.shift()
    },
  }
});