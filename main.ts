input.onButtonPressed(Button.A, function () {
    if (Paleta_Stanga.get(LedSpriteProperty.X) > 0) {
        Paleta_Stanga.change(LedSpriteProperty.X, -1)
        Paleta_Dreapta.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Paleta_Dreapta.get(LedSpriteProperty.X) < 4) {
        Paleta_Stanga.change(LedSpriteProperty.X, 1)
        Paleta_Dreapta.change(LedSpriteProperty.X, 1)
    }
})
let Paleta_Dreapta: game.LedSprite = null
let Paleta_Stanga: game.LedSprite = null
let Mingea = game.createSprite(2, 2)
Paleta_Stanga = game.createSprite(2, 4)
Paleta_Dreapta = game.createSprite(3, 4)
let DirectiaY = -1
let DirectiaX = randint(-1, 1)
game.setLife(5)
let timp = 600
basic.forever(function () {
    basic.pause(timp)
    Mingea.change(LedSpriteProperty.X, DirectiaX)
    Mingea.change(LedSpriteProperty.Y, DirectiaY)
    if (Mingea.isTouchingEdge()) {
        if (Mingea.get(LedSpriteProperty.Y) == 0) {
            DirectiaY = 1
            DirectiaX = randint(-1, 1)
        }
        if (Mingea.get(LedSpriteProperty.X) == 0) {
            DirectiaX = randint(0, 1)
        }
        if (Mingea.get(LedSpriteProperty.X) == 4) {
            DirectiaX = randint(-1, 0)
        }
        if (Mingea.get(LedSpriteProperty.Y) == 4) {
            if (Mingea.isTouching(Paleta_Dreapta) || Mingea.isTouching(Paleta_Stanga)) {
                DirectiaY = -1
                DirectiaX = randint(-1, 1)
            } else {
                DirectiaY = -1
                DirectiaX = randint(-1, 1)
                game.removeLife(1)
                timp += -100
            }
        }
    }
})
