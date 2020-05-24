sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let wait_move_asteroid = 0
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
. . . . . . . b 2 b . . . . . . . 
. . . . . . 2 2 b 2 2 . . . . . . 
. . . . . . b b 2 b b . . . . . . 
. . . . . . 2 2 b 2 2 . . . . . . 
. . . . . . b b 2 b b . . . . . . 
. . . . . . 2 2 b 2 2 . . . . . . 
. . . . . . b b 2 b b . . . . . . 
. . . . . f 2 2 b 2 2 f . . . . . 
. . b 2 b 2 b b 2 b b 2 b 2 b . . 
. b 2 b 2 b 2 2 b 2 2 b 2 b 2 b . 
b 2 b 2 b 2 b b 2 b b 2 b 2 b 2 b 
2 b 2 b 2 b 2 2 b 2 2 b 2 b 2 b 2 
. . . . . . b b 2 b b . . . . . . 
. . . . . . 2 2 b 2 2 . . . . . . 
. . . . . . b b 2 b b . . . . . . 
. . . . 2 b 2 2 b 2 2 b 2 . . . . 
. . . 2 b 2 b b 2 b b 2 b 2 . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(75, 111)
controller.moveSprite(mySprite, 100, 0)
effects.starField.startScreenEffect()
forever(function () {
    pause(2000)
    if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, 0, 50)
    } else if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . c c c c . . 
. c c c c c . c c c c c f c c . 
c c a c c c c c 8 f f c f f c c 
c a f a a c c a f f c a a f f c 
c a 8 f a a c a c c c a a a a c 
c b c f a a a a a c c c c c c c 
c b b a a c f 8 a c c c 8 c c c 
. c b b a b c f a a a 8 8 c c . 
. . . . a a b b b a a 8 a c . . 
. . . . c b c a a c c b . . . . 
. . . . b b c c a b b a . . . . 
. . . . b b a b a 6 a . . . . . 
. . . . c b b b 6 6 c . . . . . 
. . . . . c a 6 6 b c . . . . . 
. . . . . . . c c c . . . . . . 
`, 0, 50)
    } else if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . c c c . . . . . . . 
. . . . . a a a c c c . . . . . 
. . . c a c f a a a a c . . . . 
. . c a c f f f a f f a c . . . 
. c c a c c f a a c f f a c . . 
. a b a a c 6 a a c c f a c c c 
. a b b b 6 a b b a a c a f f c 
. . a b b a f f b b a a c f f c 
c . a a a c c f c b a a c f a c 
c c a a a c c a a a b b a c a c 
a c a b b a a 6 a b b 6 b b c . 
b a c b b b 6 b c . c c a c . . 
b a c c a b b a c . . . . . . . 
b b a c a b a a . . . . . . . . 
a b 6 b b a c . . . . . . . . . 
. a a b c . . . . . . . . . . . 
`, 0, 50)
    } else {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . c c c a c . . . . 
. . c c b b b a c a a a c . . . 
. c c a b a c b a a a b c c . . 
. c a b c f f f b a b b b a . . 
. c a c f f f 8 a b b b b b a . 
. c a 8 f f 8 c a b b b b b a . 
c c c a c c c c a b c f a b c c 
c c a a a c c c a c f f c b b a 
c c a b 6 a c c a f f c c b b a 
c a b c 8 6 c c a a a b b c b c 
c a c f f a c c a f a c c c b . 
c a 8 f c c b a f f c b c c c . 
. c b c c c c b f c a b b a c . 
. . a b b b b b b b b b b b c . 
. . . c c c c b b b b b c c . . 
. . . . . . . . c b b c . . . . 
`, 0, 50)
    }
    mySprite2.setPosition(randint(0, 159), 7)
    if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, 0, 50)
    } else if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . c c c c . . 
. c c c c c . c c c c c f c c . 
c c a c c c c c 8 f f c f f c c 
c a f a a c c a f f c a a f f c 
c a 8 f a a c a c c c a a a a c 
c b c f a a a a a c c c c c c c 
c b b a a c f 8 a c c c 8 c c c 
. c b b a b c f a a a 8 8 c c . 
. . . . a a b b b a a 8 a c . . 
. . . . c b c a a c c b . . . . 
. . . . b b c c a b b a . . . . 
. . . . b b a b a 6 a . . . . . 
. . . . c b b b 6 6 c . . . . . 
. . . . . c a 6 6 b c . . . . . 
. . . . . . . c c c . . . . . . 
`, 0, 50)
    } else if (Math.percentChance(30)) {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . c c c . . . . . . . 
. . . . . a a a c c c . . . . . 
. . . c a c f a a a a c . . . . 
. . c a c f f f a f f a c . . . 
. c c a c c f a a c f f a c . . 
. a b a a c 6 a a c c f a c c c 
. a b b b 6 a b b a a c a f f c 
. . a b b a f f b b a a c f f c 
c . a a a c c f c b a a c f a c 
c c a a a c c a a a b b a c a c 
a c a b b a a 6 a b b 6 b b c . 
b a c b b b 6 b c . c c a c . . 
b a c c a b b a c . . . . . . . 
b b a c a b a a . . . . . . . . 
a b 6 b b a c . . . . . . . . . 
. a a b c . . . . . . . . . . . 
`, 0, 50)
    } else {
        mySprite2 = sprites.createProjectileFromSide(img`
. . . . . . . c c c a c . . . . 
. . c c b b b a c a a a c . . . 
. c c a b a c b a a a b c c . . 
. c a b c f f f b a b b b a . . 
. c a c f f f 8 a b b b b b a . 
. c a 8 f f 8 c a b b b b b a . 
c c c a c c c c a b c f a b c c 
c c a a a c c c a c f f c b b a 
c c a b 6 a c c a f f c c b b a 
c a b c 8 6 c c a a a b b c b c 
c a c f f a c c a f a c c c b . 
c a 8 f c c b a f f c b c c c . 
. c b c c c c b f c a b b a c . 
. . a b b b b b b b b b b b c . 
. . . c c c c b b b b b c c . . 
. . . . . . . . c b b c . . . . 
`, 0, 50)
    }
    mySprite2.setPosition(randint(0, 159), 7)
    wait_move_asteroid = 1
})
