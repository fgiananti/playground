const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('nodemon', function () {
  var stream = nodemon({ script: 'index.js'
          , ext: 'html js'
          , ignore: ['./client']})

  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
})
