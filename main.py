pausa = 0

def on_button_pressed_a():
    global pausa
    while False:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.PINK)
        pausa = pausa
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.PINK)
        pausa = pausa
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBR, Color.OFF)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
