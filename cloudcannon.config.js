module.exports = {
  source_editor : {
    tab_size: 4,
    show_gutter:true,
    theme: "chrome"
  },
   editor: {
    default_path: "/"
  },
  generator: {
    metadata: {
      markdown: "markdown-it",
      "markdown-it": {
        html: true,
        linkify: true
      }
    }
};