export class createTask {
  constructor({
    task,
    id
  }) {
    this.task = task;
    this.id = id;
  }
  get create() {
    return {
      task: this.task,
      id: this.id,
      editing: false,
      done: false,
    };
  }
}

export class findAndEdit {
  constructor({
    id,
    state,
    edit
  }) {
    this.id = id;
    this.state = state;
    this.edit = edit;
  }
  get save() {
    const editParam = this.edit;
    if (editParam.toggle) {
      return (this.state.map(task => (task.id == this.id ? {
        ...task,
        done: !task.done
      } : task)))
    } else {
      return (this.state.map(task => (task.id == this.id ? {
        ...task,
        ...editParam
      } : task)))
    }
  }
}