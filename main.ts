let pausa = 0
input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
    pausa = 1000
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
    pausa = 1000
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
    pausa = pausa
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
    pausa = pausa
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
})
