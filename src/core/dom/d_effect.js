module.exports = {
    //显示隐藏
    show: function() {
        var blockArr = ['div', 'li', 'ul', 'ol', 'dl', 'table', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'header', 'footer', 'details', 'summary', 'section', 'aside', '']

        this.el.forEach((i) => {
            if (blockArr.indexOf(i.tagName.toLocaleLowerCase()) === -1) {
                i.style.display = 'inline';
            } else {
                i.style.display = 'block';
            }
        })
    },
    hide: function(obj) {
        this.el.forEach((i) => {
            i.style.display = "none";
        })
    },
    toggle: function() {
        this.el.forEach((i) => {
            if (i.style.display == "none") {
                $(i).show()
            } else {
                $(i).hide()
            }
        })
    },
    visible() {
        this.el.forEach((i) => {
            i.style.visibility = "visible";
        })
    },
    hidden() {
        this.el.forEach((i) => {
            i.style.visibility = "hidden";
        })
    }
}