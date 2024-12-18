I2C_LCD1602.LcdInit(0)
serial.redirectToUSB()
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.clear()
let x = smarttools.stringToDecimal(serial.readUntil(serial.delimiters(Delimiters.Space)))
serial.writeString("" + ("\r\n"))
serial.writeNumber(x)
basic.pause(100)
let y = smarttools.stringToDecimal(serial.readUntil(serial.delimiters(Delimiters.Space)))
serial.writeString(" and ")
serial.writeNumber(y)
if (x % y == 0) {
    basic.showIcon(IconNames.Yes)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    I2C_LCD1602.ShowNumber(x, 0, 0)
    basic.pause(1000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("is divisible by", 0, 0)
    basic.pause(1000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(y, 0, 0)
    basic.pause(2000)
    control.reset()
} else if (input.buttonIsPressed(Button.A)) {
    I2C_LCD1602.clear()
} else {
    basic.showIcon(IconNames.No)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    I2C_LCD1602.ShowNumber(x, 0, 0)
    basic.pause(1000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("is not divisible", 0, 0)
    I2C_LCD1602.ShowString("by", 0, 1)
    basic.pause(1000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(y, 0, 0)
    basic.pause(2000)
    control.reset()
}
