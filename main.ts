basic.forever(function () {
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 5) {
        maqueen.setColor(0xff0000)
        maqueen.writeLED(maqueen.Led.LedLeft, maqueen.LedSwitch.LedOff)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
        maqueen.setColor(0x00ffff)
    }
})
