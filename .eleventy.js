module.exports = function(eleventyConfig) {

     eleventyConfig.addPassthroughCopy('./src/styling.css');
     eleventyConfig.addPassthroughCopy('./src/jobs.js');
     eleventyConfig.addPassthroughCopy('.src/admin');

     return {
          dir: {
               input: "src",
               output: "public"
          }
     }
};