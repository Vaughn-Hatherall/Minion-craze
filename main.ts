sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 f f f f 5 5 5 5 . . 
    . 5 5 5 5 f 1 1 1 1 f 5 5 5 5 . 
    . f f f f f 1 f f 1 f f f f f . 
    . f f f f f 1 1 1 1 f f f f f . 
    . 5 5 5 5 5 f f f f 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 8 5 5 f f f f f f f f 5 5 8 . 
    5 5 8 5 5 f f f f f f 5 5 8 5 5 
    5 5 5 8 5 5 5 5 5 5 5 5 8 5 5 5 
    5 8 8 8 8 f 8 8 8 8 f 8 8 8 8 5 
    5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 
    5 . 8 8 8 8 8 8 8 8 8 8 8 8 . 5 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . f f . . . . . . f f . . . 
    . . f f f . . . . . . f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
