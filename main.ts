input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("GO!")
})
let comienzo = 0
music.setVolume(255)
basic.forever(function () {
    if (comienzo == 1) {
        if (input.pinIsPressed(TouchPin.P0)) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Skull)
            basic.pause(1000)
        }
    }
})
