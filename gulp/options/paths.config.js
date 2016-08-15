module.exports = {
    src: './src',
    dist: './dist',
    scss: [{
            name: 'flexbox-grid',
            src: './src/flexbox-grid',
            dist: './dist/assets/css',
            glob: '/!(*.spec).scss',
        }, {
            name: 'portfolio',
            src: './src/portfolio',
            dist: './dist/assets/css',
            glob: '/!(*.spec).scss',
        },
        // {//     name: 'other',
        //     src: './src/css',
        //     dist: './dist/assets/css',
        //     glob: '/**/!(*.spec).scss',
        // }
    ],
    html: [{
        name: 'templates',
        src: './src/**/!(*index|*.spec).html',
        dist: './dist/assets/templates'
    }, {
        name: 'index',
        src: './src/index.html',
        dist: './dist'
    }, {
        name: 'portfolio',
        src: './src/portfolio.html',
        dist: './dist'
    }],
    fonts: [{
        name: 'font-awesome',
        src: './node_modules/font-awesome/fonts/*.*(svg|eot|ttf|woff|otf)',
        dist: './dist/assets/fonts',
        glob: '/**/*.*(svg|eot|ttf|woff|otf)'
    }],
    images: [{
        name: 'thumbnails',
        src: './src/portfolio/images/thumbnails/**/*.*(png|gif|jpeg|jpg|img.svg)',
        dist: './dist/assets/images/thumbnails',
        glob: '/**/*.*(png|gif|jpeg|jpg|img.svg)'
    }]
}