input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
        basic.showNumber(pausa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
        basic.showNumber(pausa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    }
})
input.onButtonPressed(Button.A, function () {
    pausa += 50
})
input.onButtonPressed(Button.B, function () {
    pausa += -50
})
let pausa = 0
DFRobotMaqueenPlus.I2CInit()
pausa = 1000
basic.forever(function () {
    basic.showNumber(pausa)
})
