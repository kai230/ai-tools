module.exports = function(eleventyConfig) {
  // 复制静态资源
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  
  // 配置markdown-it
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAttrs);
  
  eleventyConfig.setLibrary("md", md);
  
  // 添加过滤器
  eleventyConfig.addFilter("slugify", function(str) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  });
  
  // 添加日期格式化过滤器
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });
  
  // 添加查询参数过滤器
  eleventyConfig.addFilter("getFromQuery", function(param) {
    // 这个过滤器在前端通过JavaScript实现，这里仅为了模板编译通过
    return "";
  });
  
  // 启用导航插件
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  
  // 设置数据深度合并
  eleventyConfig.setDataDeepMerge(true);
  
  // 开发服务器选项
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true
  });
  
  // 输入输出目录配置
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "data"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};