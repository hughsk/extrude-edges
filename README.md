# extrude-edges [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

[![extrude-edges](https://nodei.co/npm/extrude-edges.png?mini=true)](https://nodei.co/npm/extrude-edges)

Takes a 2D shape and generates the sides of an extruded mesh. One half of
making 2D shapes into 3D models.

## Usage ##

### `extrude(out, shape1, bottom, top[, shape2])` ###

* `out` is an array-like object to output the results to. Pass something
  falsey to have a new one created for you instead.
* `shape1` is a flat array-like object listing the vertices in 2D space of the
  object to extrude. e.g. `[x0, y0, x1, y1, x2, y2, ...]`
* `bottom` is the bottom y-position of the 3D mesh to be generated.
* `top` is the top y-position of the 3D mesh to be generated.
* `shape2` is an optional second shape to use for the opposite face. Otherwise,
  `shape1` will be used in its place.

### `extrude.faces(shape)` ###

Given a `shape`, generates an index of faces for the associated mesh. You can
also draw the triangles directly using `gl.TRIANGLES_STRIP`.
