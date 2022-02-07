def on_button_pressed_a():
    if Paleta_Stanga.get(LedSpriteProperty.X) > 0:
        Paleta_Stanga.change(LedSpriteProperty.X, -1)
        Paleta_Dreapta.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if Paleta_Dreapta.get(LedSpriteProperty.X) < 4:
        Paleta_Stanga.change(LedSpriteProperty.X, 1)
        Paleta_Dreapta.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Paleta_Dreapta: game.LedSprite = None
Paleta_Stanga: game.LedSprite = None
Mingea = game.create_sprite(2, 2)
Paleta_Stanga = game.create_sprite(2, 4)
Paleta_Dreapta = game.create_sprite(3, 4)
DirectiaY = -1
DirectiaX = randint(-1, 1)
game.set_life(3)

def on_forever():
    global DirectiaY, DirectiaX
    basic.pause(500)
    Mingea.change(LedSpriteProperty.X, DirectiaX)
    Mingea.change(LedSpriteProperty.Y, DirectiaY)
    if Mingea.is_touching_edge():
        if Mingea.get(LedSpriteProperty.Y) == 0:
            DirectiaY = 1
            DirectiaX = randint(-1, 1)
        if Mingea.get(LedSpriteProperty.X) == 0:
            DirectiaX = randint(0, 1)
        if Mingea.get(LedSpriteProperty.X) == 4:
            DirectiaX = randint(-1, 0)
    if Mingea.is_touching(Paleta_Dreapta) or Mingea.is_touching(Paleta_Stanga):
        DirectiaY = -1
        DirectiaX = randint(-1, 1)
    elif Mingea.get(LedSpriteProperty.Y) == 4:
        game.remove_life(1)
basic.forever(on_forever)
