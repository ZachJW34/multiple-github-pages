const cp = require('child_process');

const affectedProjects = JSON.parse(
  cp
    .execSync(
      `node_modules/.bin/nx print-affected --base origin/master --head HEAD --target build`
    )
    .toString()
    .trim()
)
  .tasks.map((task) => task.target.project)
  .join();

console.log(affectedProjects);
