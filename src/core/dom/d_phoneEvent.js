module.exports = {

    tap(cb) {
        let start, end, state = true
        this.el.forEach(element => {
            element.addEventListener("touchstart", handle)
            element.addEventListener("touchmove", handle)
            element.addEventListener("touchend", handle)
        });


        function handle(e) {
            switch (e.type) {
                case "touchstart":
                    {
                        start = new Date().getTime()
                        state = true
                    }
                    break;
                case "touchmove":
                    {
                        state = false
                    }
                    break;
                case "touchend":
                    {
                        end = new Date().getTime()
                        if (end - start <= 300 && state) {
                            cb(e)
                        }
                    }
                    break;
            }
        }

    },
    longtap(cb) {
        let time

        this.el.forEach(element => {
            element.addEventListener("touchstart", handle)
            element.addEventListener("touchmove", handle)
            element.addEventListener("touchend", handle)
        });

        function handle(e) {

            switch (e.type) {
                case "touchstart":
                    {
                        time = setTimeout(cb, 300)
                    }
                    break;
                case "touchmove":
                    {
                        clearTimeout(time)
                    }
                    break;
                case "touchend":
                    {
                        clearTimeout(time)
                    }
                    break;
            }
        }
    },
    move(type, cb) {
        let startX, endX, startY, endY
        this.el.forEach(element => {
            element.addEventListener("touchstart", handle)
            element.addEventListener("touchend", handle)
        });

        function handle(e) {
            switch (e.type) {
                case "touchstart":
                    {
                        startX = e.changedTouches[0].pageX
                        startY = e.changedTouches[0].pageY
                    }
                    break;
                case "touchend":
                    {
                        endX = e.changedTouches[0].pageX
                        endY = e.changedTouches[0].pageY
                        switch (type) {
                            case "moveLeft":
                                {
                                    if (startX - endX > 25) {
                                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {

                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveRight":
                                {
                                    if (endX - startX > 25) {
                                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {

                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveTop":
                                {
                                    if (startY - endY > 25) {
                                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            case "moveBottom":
                                {
                                    if (endY - startY > 25) {
                                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                                            cb(e)
                                        }
                                    }
                                }
                                break;
                            default:
                                {
                                    var y = endY - startY
                                    var x = endX - startX
                                    cb(e, x, y)
                                }
                        }

                    }
                    break;
            }
        }
    },
    moveLeft(cb) {

        this.move("moveLeft", cb)

        return this
    },
    moveRight(cb) {

        this.move("moveRight", cb)

        return this

    },
    moveTop(cb) {

        this.move("moveTop", cb)
        return this

    },
    moveBottom(cb) {

        this.move("moveBottom", cb)
        return this
    }
}