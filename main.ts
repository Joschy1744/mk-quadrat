input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    fahren = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    fahren = 0
})
let fahren = 0
fahren = 0
basic.showString("A", 150)
basic.forever(function () {
    if (fahren == 1) {
        basic.showNumber(fahren)
        for (let index = 0; index < 4; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
            // 1800 für 30 cm
            basic.pause(1800)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            // 450ms für rechten Winkel bei 50 Speed Vor und Rücklauf
            basic.pause(450)
            maqueen.motorStop(maqueen.Motors.All)
        }
        fahren = 0
    } else if (fahren == 0) {
        basic.showNumber(fahren)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
