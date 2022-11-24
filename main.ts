input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    timer = Math.random() * 10 + 3
    while (timer > 0) {
        timer = timer - 1
        basic.pause(1000)
    }
    end()
})
function end() {
    for (let index = 0; index < 3; index++) {
        led.setBrightness(255)
        music.playMelody("C5 B G E C - - - ", 1400)
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
        basic.pause(50)
        music.playMelody("C5 B G E C - - - ", 1400)
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
        basic.pause(50)
    }
}

let timer = 0
basic.forever(function on_forever() {
    
})
