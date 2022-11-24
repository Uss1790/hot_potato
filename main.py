def on_button_pressed_a():
    global timer
    timer = Math.random() * 10 + 3
    while timer > 0:
        timer = timer - 1
        basic.pause(1000)
    end()
input.on_button_pressed(Button.A, on_button_pressed_a)

def end():
    for index in range(3):
        led.set_brightness(255)
        music.play_melody("C5 B G E C - - - ", 1400)
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.pause(50)
        music.play_melody("C5 B G E C - - - ", 1400)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(50)
timer = 0


def on_forever():
    pass
basic.forever(on_forever)
