let lt_right = 0
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
    let lt_left = 0
    lt_right = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    basic.showString("" + (lt_left))
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
})
