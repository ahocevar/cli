var gulp        = require('gulp')
  , path        = require('path')
  , fs          = require('fs')
  , helpers     = require(path.resolve(__dirname, 'lib', 'helpers'))

require('gulp-help')(gulp, { aliases: ['h'] })

fs
  .readdirSync(path.resolve(__dirname, 'lib', 'tasks'))
  .filter(function(file) { return file.indexOf('.') !== 0 })
  .map(function(file) {
    return require(path.resolve(__dirname, 'lib', 'tasks', file))
  })
  .forEach(function(tasks) {
    Object.keys(tasks).forEach(function(taskName) {
      helpers.addTask(gulp, taskName, tasks[taskName])
      helpers.addHelp(gulp, taskName, tasks[taskName])
    })
  })
