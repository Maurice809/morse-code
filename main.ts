let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(0, 0)
        code = 1
        basic.pause(150)
        if (input.buttonIsPressed(Button.A)) {
            led.plot(1, 0)
            code = 2
            basic.pause(150)
        }
    }
})
