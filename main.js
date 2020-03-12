new Vue({
  el: '#app',
  data: {
   tasks: [{ id: 1, task:"Mow the lawn", assigned: 'Trevor'}],
   task: {task:"", assigned: ''}
  },
  methods: {
    addTask() {
       this.tasks.push({id: Math.floor(Math.random() * 10) + 1, task: this.tasks.task, assigned: this.tasks.assigned});
    },
    removeTask: function(event) {
      this.tasks.splice(this.tasks.indexOf(event), 1);
    }
  }
}); 