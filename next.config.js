
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['5mnVGXHUiojS9J8zMfjQxj'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  