module.exports = function(gulp, plugins, paths) {
    'use strict';

    var targets = paths.images;
    buildTasks(targets);

    function buildTasks(targets) {
        var imagesTasks = [];
        var imagesCleanTasks = [];
        var dist, src;

        for (var i = 0; i < targets.length; i++) {
            // Create task name and push to imagesTasks
            var taskName = 'build:images:' + targets[i].name;
            var cleanTaskName = 'clean:images:' + targets[i].name;

            // Push task names to array
            imagesTasks.push(taskName);
            imagesCleanTasks.push(cleanTaskName);

            //Initialize Scripts
            var src = targets[i].src;
            var dist = targets[i].dist;
            var glob = targets[i].glob;

            initializeTasks(src, dist);

            function initializeTasks(src, dist) {
                function cleanTaskScript() {
                    cleanScript(dist, glob);
                };

                function taskScript() {
                    buildScript(src, dist);
                };

                gulp.task(cleanTaskName, cleanTaskScript);
                gulp.task(taskName, taskScript);
            };
        };

        gulp.task('clean:images', imagesCleanTasks);
        gulp.task('build:images', function() {
            plugins.runSequence('clean:images', imagesTasks);

        });

    };

    function cleanScript(destination, glob) {
        plugins.del([
            destination + glob,
        ]);
    };

    function buildScript(source, destination) {
        return gulp.src(source)
            .pipe(gulp.dest(destination));
    };
}