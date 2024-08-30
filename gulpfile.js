const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const replace = require('gulp-replace');
const path = require('path');
const ignore = require('gulp-ignore');
const fs = require('fs');

const paths = {
  src: 'src/',
  partials: 'src/partials',
  components: 'src/partials/components',
  dest: 'public_html/'
};

// Funkcja do przekształcania ścieżek include
function resolveIncludePath(filePath) {
  const componentsPath = path.join(__dirname, paths.components, filePath);
  if (fs.existsSync(componentsPath)) {
    return `components/${filePath}`;
  }
  return filePath;
}

gulp.task('html', function() {
  return gulp.src([path.join(paths.src, '**/*.html')]) // Przetwarza wszystkie pliki HTML w src i podfolderach
    .pipe(ignore.exclude('partials/**/*')) // Wyklucza folder partials z kopiowania
    .pipe(fileInclude({
      prefix: '@@',
      basepath: path.join(__dirname, paths.partials), // Zaktualizowana ścieżka bazowa
      filters: {
        includeFile: function (filePath) {
          return resolveIncludePath(filePath);
        }
      }
    }))
    .pipe(gulp.dest(paths.dest)); // Zapisuje przetworzone pliki HTML w folderze docelowym
});

gulp.task('watch', function() {
  gulp.watch([
    path.join(paths.src, '*.html', '**/*.html'), // Monitoruje zmiany w folderze src
    path.join(paths.partials, '**/*.html'), // Monitoruje zmiany w folderze partials
    ], gulp.series('html'));
});

gulp.task('default', gulp.series('html'));
