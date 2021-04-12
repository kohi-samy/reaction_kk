let player_A = 0
let player_B = 0
basic.forever(function () {
    basic.pause(1000)
    basic.pause(randint(0, 2000))
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(20)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        player_A += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        player_B += 1
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(500)
    basic.showNumber(player_A)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showNumber(player_B)
})
