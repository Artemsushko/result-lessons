const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    if (this.level < stack.length) {
      this.stack.push(stack[this.level]);
      this.level++;
    }
    return this;
  },
};

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(student.stack);
