# Turtle Graphics
A [PostScript][postscript] script that traces [turtle graphics][].

## Generation
You can use `generator/turtle.js` to generate a particular sequence of turtle
commands depending on an [L-system][l-system]. For example to generate turtle
commands for the Sierprinski gasket

```shell
node generator/turtle.js generator/model/sierprinski.js 2
```

## Interpretation
### Initialization
* `size`: step size of the turtle.
* `alpha`: the direction the turtle is facing.
* `dalpha`: how much the direction changes when the turtle turns. 

### Operation
* `F`: move the turtle forward.
* `R`: turn the turtle to the right.
* `L`: turn the turtle to the left.

## Determine Bounding Box
You can let GhostScript determine the bounding box for your sketch with the
following command:

```shell
gs -dSAFER -dNOPAUSE -dBATCH -sDEVICE=bbox turtle.ps
```

## Laser Cutting
These images will transfer very well to a laser cutter.

[postscript]: https://en.wikipedia.org/wiki/PostScript
[turtle graphics]: https://en.wikipedia.org/wiki/Turtle_graphics
[l-system]: https://en.wikipedia.org/wiki/L-system
