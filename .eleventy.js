module.exports = function(eleventyConfig) {

     eleventyConfig.addPassthroughCopy('./src/styling.css');
     eleventyConfig.addPassthroughCopy('./src/jobs.js');

     return {
          dir: {
               input: "src",
               output: "public"
          }
     }
};