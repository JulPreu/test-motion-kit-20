let start = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        start = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        start = 0
    }
    if (start == 1) {
        if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 30) {
            maqueen.setColor(0xff0000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
            maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
            maqueen.setColor(0x00ffff)
        }
    }
})
basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 120)
    basic.pause(2000)
    maqueen.servoRun(maqueen.Servos.S1, 60)
})
