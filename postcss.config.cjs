// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-simple-vars')({
            variables: {
              sans: 'Arial, sans-serif',
            },
        }),
    ]
}