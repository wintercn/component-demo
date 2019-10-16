
module.exports = function (source, map) {
    var css = require('css');
    var obj = css.parse(source);
    var filename = this.resourcePath.match(/([a-zA-Z0-9]+).css$/)[1];
    var classname = filename.replace(/^[A-Z]/, l => l.toLowerCase())
        .replace(/[A-Z]/, l => "-" + l.toLowerCase());
    for(var rule of obj.stylesheet.rules) {
        rule.selectors = rule.selectors.map(selector => {
            return "." + classname + " " + selector;
        })
    }
    return "export default " + JSON.stringify(css.stringify(obj));
}
