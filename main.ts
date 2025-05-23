basic.forever(function () {
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        maqueen.setColor(0xff0000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
        maqueen.setColor(0x00ffff)
    }
})
basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 120)
    maqueen.servoRun(maqueen.Servos.S1, 60)
})
