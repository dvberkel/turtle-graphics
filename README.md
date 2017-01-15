# Turtle Graphics
A [PostScript][postscript] script that traces [turtle graphics][].

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

[postscript]: https://en.wikipedia.org/wiki/PostScript
[turtle graphics]: https://en.wikipedia.org/wiki/Turtle_graphics
