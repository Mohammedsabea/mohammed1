let b = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("\" I love coding \"")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playMelody("D - G - - E - - ", 120)
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    b = 8
    b = 7
})
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        if (("a" as any) > ("b" as any)) {
            basic.showIcon(IconNames.Heart)
        } else if (false) {
            basic.showString("Hello!")
        }
    }
})
