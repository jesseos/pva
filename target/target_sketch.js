// Transcrypt'ed from Python, 2023-05-31 12:28:28
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, all, any, assert, bool, bytearray, bytes, callable, chr, deepcopy, delattr, dict, dir, divmod, enumerate, getattr, hasattr, isinstance, issubclass, len, list, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, set, setattr, sorted, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ADD, ALT, ARROW, AUDIO, AUTO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC, BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST, DEGREES, DEG_TO_RAD, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION, FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE, LEFT, LEFT_ARROW, LIGHTEST, LINEAR, LINES, LINE_LOOP, LINE_STRIP, MIRROR, MITER, MOVE, MULTIPLY, NEAREST, NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, PVector, QUADRATIC, QUADS, QUAD_STRIP, QUARTER_PI, RADIANS, RADIUS, RAD_TO_DEG, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW, ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL, _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL, _P5_INSTANCE, abs, accelerationX, accelerationY, accelerationZ, acos, add_library, alpha, ambientLight, ambientMaterial, angleMode, append, applyMatrix, arc, arrayCopy, asin, atan, atan2, background, beginContour, beginShape, bezier, bezierDetail, bezierPoint, bezierTangent, bezierVertex, blend, blendMode, blue, boolean, box, brightness, byte, camera, ceil, changed, char, circle, color, colorMode, concat, cone, constrain, copy, cos, createA, createAudio, createButton, createCamera, createCanvas, createCapture, createCheckbox, createColorPicker, createDiv, createElement, createFileInput, createGraphics, createImage, createImg, createInput, createNumberDict, createP, createRadio, createSelect, createShader, createSlider, createSpan, createStringDict, createVector, createVideo, createWriter, cursor, curve, curveDetail, curvePoint, curveTangent, curveTightness, curveVertex, cylinder, day, debugMode, degrees, deviceOrientation, directionalLight, disableFriendlyErrors, displayDensity, displayHeight, displayWidth, dist, ellipse, ellipseMode, ellipsoid, endContour, endShape, erase, exp, fill, filter, float, floor, focused, frameCount, frameRate, fullscreen, getURL, getURLParams, getURLPath, global_p5_injection, green, height, hex, hour, httpDo, httpGet, httpPost, hue, image, imageMode, image_proxy, input, int, join, key, keyCode, keyIsPressed, lerp, lerpColor, lightness, lights, line, loadBytes, loadFont, loadImage, loadJSON, loadModel, loadPixels, loadShader, loadStrings, loadTable, loadXML, log, logOnloaded, loop, mag, map, match, matchAll, max, millis, min, minute, model, month, mouseButton, mouseIsPressed, mouseX, mouseY, nf, nfc, nfp, nfs, noCanvas, noCursor, noDebugMode, noErase, noFill, noLoop, noSmooth, noStroke, noTint, noise, noiseDetail, noiseSeed, norm, normalMaterial, orbitControl, ortho, pAccelerationX, pAccelerationY, pAccelerationZ, pRotationX, pRotationY, pRotationZ, perspective, pixelDensity, pixels, plane, pmouseX, pmouseY, point, pointLight, popMatrix, popStyle, pow, pre_draw, push, pushMatrix, pushStyle, pwinMouseX, pwinMouseY, py_clear, py_get, py_pop, py_set, py_sort, py_split, quad, quadraticVertex, radians, random, randomGaussian, randomSeed, rect, rectMode, red, redraw, remove, removeElements, resetMatrix, resetShader, resizeCanvas, reverse, rotate, rotateX, rotateY, rotateZ, rotationX, rotationY, rotationZ, round, saturation, save, saveCanvas, saveFrames, saveJSON, saveStrings, saveTable, scale, second, select, selectAll, setAttributes, setCamera, setMoveThreshold, setShakeThreshold, shader, shearX, shearY, shininess, shorten, shuffle, sin, size, smooth, specularMaterial, sphere, splice, splitTokens, sq, sqrt, square, start_p5, str, stroke, strokeCap, strokeJoin, strokeWeight, subset, tan, text, textAlign, textAscent, textDescent, textFont, textLeading, textSize, textStyle, textWidth, texture, textureMode, textureWrap, tint, torus, touches, translate, triangle, trim, turnAxis, unchar, unhex, updatePixels, vertex, width, winMouseX, winMouseY, windowHeight, windowWidth, year} from './pyp5js.js';
var __name__ = '__main__';
export var preload = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var deviceMoved = null;
export var deviceTurned = null;
export var deviceShaken = null;
export var keyPressed = null;
export var keyReleased = null;
export var keyTyped = null;
export var mouseMoved = null;
export var mouseDragged = null;
export var mousePressed = null;
export var mouseReleased = null;
export var mouseClicked = null;
export var doubleClicked = null;
export var mouseWheel = null;
export var touchStarted = null;
export var touchMoved = null;
export var touchEnded = null;
export var windowResized = null;
export var keyIsDown = null;
export var windowW = 1000;
export var windowH = 500;
export var marginX = windowW / 10;
export var marginY = marginX;
export var numTicks = 10;
export var frames = 60;
export var universalSpeed = 0.005;
export var paused = false;
export var running = false;
export var ripples =  __class__ ('ripples', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.startStroke = 255;
		self.startSize = 10;
		self.alive = true;
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		background (0);
		noFill ();
		ellipse (self.x, self.y, self.startSize, self.startSize);
		stroke (self.startStroke, self.startStroke, self.startStroke);
		self.startStroke -= 7;
		self.startSize += 3;
		if (self.startSize > 200) {
			self.startStroke = 0;
			self.alive = false;
		}
	});}
});
export var button =  __class__ ('button', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.pressed = false;
		self.over = 0;
	});},
	get check () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (mousePressed) {
			if (mouseX > self.x - 25 && mouseX < self.x + 25 && mouseY > self.y - 25 && mouseY < self.y + 25) {
				self.pressed = true;
			}
			else {
				self.pressed = false;
			}
		}
		else {
			self.pressed = false;
		}
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		fill (255);
		ellipse (self.x, self.y, 50, 50);
		stroke (3);
		ellipse (self.x, self.y, 43, 43);
		noStroke ();
		if (mouseX > self.x - 25 && mouseX < self.x + 25 && mouseY > self.y - 25 && mouseY < self.y + 25) {
			fill (100);
			ellipse (self.x, self.y, 50, 50);
			stroke (3);
			ellipse (self.x, self.y, 43, 43);
			noStroke ();
			self.over = 1;
		}
		else {
			self.over = 0;
		}
	});}
});
export var particle =  __class__ ('particle', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y, w, h, speed) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
						case 'speed': var speed = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.speed = speed;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.y = position.y;
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		fill (255);
		ellipse (self.x, self.y, self.w, self.h);
	});}
});
export var particleP =  __class__ ('particleP', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y, w, h, speed) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
						case 'speed': var speed = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.speed = speed;
		self.visible = true;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.x < windowW - marginX) {
			self.x += 400 * self.speed;
			self.y = windowH / 2 - 100 * sin (self.x / 45);
		}
		else {
			fill (0);
			rect (0, 0, windowW, windowH);
			self.x = marginX;
		}
		if (self.x == marginX) {
			self.y = 158.705472946 + 10;
		}
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.visible == true) {
			fill (255);
			noStroke ();
			ellipse (self.x, self.y, self.w, self.h);
		}
		else if (self.visible == false) {
			// pass;
		}
	});}
});
export var particleV =  __class__ ('particleV', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y, w, h, speed) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
						case 'speed': var speed = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.speed = speed;
		self.visible = true;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.x < windowW - marginX) {
			self.x += 400 * self.speed;
			self.y = windowH / 2 - 100 * cos (self.x / 45);
		}
		else {
			fill (0);
			rect (0, 0, windowW, windowH);
			self.x = marginX;
		}
		if (self.x == marginX) {
			self.y = self.y1 + windowH;
		}
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.visible == true) {
			fill (0, 200, 200);
			noStroke ();
			ellipse (self.x, self.y, self.w, self.h);
		}
		else if (self.visible == false) {
			fill (0);
			ellipse (self.x, self.y, self.w, self.h);
		}
	});}
});
export var particleA =  __class__ ('particleA', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y, w, h, speed) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
						case 'speed': var speed = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.speed = speed;
		self.visible = true;
	});},
	get move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.x < windowW - marginX) {
			self.x += 400 * self.speed;
			self.y = windowH / 2 - 100 * -(sin (self.x / 45));
		}
		else {
			fill (0);
			rect (0, 0, windowW, windowH);
			self.x = marginX;
		}
		if (self.x == marginX) {
			self.y = self.y1 + windowH;
		}
	});},
	get display () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.visible == true) {
			fill (200, 0, 200);
			noStroke ();
			ellipse (self.x, self.y, self.w, self.h);
		}
		else if (self.visible == false) {
			fill (0);
			ellipse (self.x, self.y, self.w, self.h);
		}
	});}
});
export var position = particleP (marginX, windowH - marginY, 10, 10, universalSpeed);
export var velocity = particleV (marginX, windowH - marginY, 10, 10, universalSpeed);
export var acceleration = particleA (marginX, windowH - marginY, 10, 10, universalSpeed);
export var baseParticle = particle (marginX / 2, windowH - marginY, 20, 20, universalSpeed);
export var trails = false;
export var clicked = 0;
export var btrails = button (50, 50);
export var bposition = button (800, 50);
export var bvelocity = button (875, 50);
export var bacceleration = button (950, 50);
export var bstart = button (windowW / 2, windowH / 2 + 10);
export var pe = false;
export var ve = false;
export var ae = false;
export var rippleList = [];
var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	size (windowW, windowH);
	background (0);
	frameRate (frames);
};
var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (running == false) {
		textSize (48);
		if (mousePressed) {
			rippleList.append (ripples (mouseX, mouseY));
		}
		for (var r of rippleList) {
			r.display ();
			if (r.alive == false) {
				rippleList.remove (r);
			}
		}
		bstart.check ();
		bstart.display ();
		fill (255);
		text ('PVA Visualizer', windowW / 2 - 160, windowH / 2 - 40);
		textSize (20);
		text ('Jesse Saranow', windowW / 2 - 70, windowH / 2 - 90);
		textSize (48);
	}
	if (running == true) {
		frameRate (frames);
		position.move ();
		velocity.move ();
		acceleration.move ();
		baseParticle.move ();
		btrails.check ();
		if (trails == true) {
			if (pe == false) {
				position.visible == false;
			}
			if (ve == false) {
				velocity.visible == false;
			}
			if (ae == false) {
				acceleration.visible == false;
			}
			fill (0);
			rect (0, 0, marginX - 1, windowH);
			btrails.display ();
			noFill ();
			stroke (0, 0, 255);
			strokeWeight (2);
			ellipse (btrails.x, btrails.y, 43, 43);
			noStroke ();
		}
		else if (trails == false) {
			fill (0);
			rect (0, 0, windowW, windowH);
			btrails.display ();
		}
		fill (255);
		textSize (15);
		text ('Visualize Graph', btrails.x + 30, btrails.y + 5);
		textSize (36);
		bposition.check ();
		bposition.display ();
		fill (0);
		text ('P', bposition.x - 12, bposition.y + 12);
		bvelocity.check ();
		bvelocity.display ();
		fill (0);
		text ('V', bvelocity.x - 12, bvelocity.y + 12);
		bacceleration.check ();
		bacceleration.display ();
		fill (0);
		text ('A', bacceleration.x - 12, bacceleration.y + 12);
		if (pe == true) {
			stroke (0, 0, 255);
			strokeWeight (2);
			noFill ();
			ellipse (bposition.x, bposition.y, 43, 43);
			position.display ();
			noStroke ();
		}
		if (ve == true) {
			stroke (0, 0, 255);
			strokeWeight (2);
			noFill ();
			ellipse (bvelocity.x, bvelocity.y, 43, 43);
			velocity.display ();
			noStroke ();
		}
		if (ae == true) {
			stroke (0, 0, 255);
			strokeWeight (2);
			noFill ();
			ellipse (bacceleration.x, bacceleration.y, 43, 43);
			acceleration.display ();
			noStroke ();
		}
		strokeWeight (2);
		stroke (255);
		line (marginX, windowH / 2, windowW - marginX, windowH / 2);
		line (marginX, windowH - marginY, marginX, marginY);
		strokeWeight (3);
		line (marginX - 65, windowH / 2, marginX - 35, windowH / 2);
		strokeWeight (2);
		noStroke ();
		fill (255);
		if (pe == true && ve == true) {
			if (abs (position.x - velocity.x) < 10 && abs (position.y - velocity.y) < 10) {
				fill (255, 255, 0);
				ellipse (position.x, position.y, 10, 10);
			}
		}
		if (pe == true && ae == true) {
			if (abs (position.x - acceleration.x) < 10 && abs (position.y - acceleration.y) < 10) {
				fill (255, 255, 0);
				ellipse (position.x, position.y, 10, 10);
			}
		}
		if (ae == true && ve == true) {
			if (abs (acceleration.x - velocity.x) < 10 && abs (acceleration.y - velocity.y) < 10) {
				fill (255, 255, 0);
				ellipse (velocity.x, velocity.y, 10, 10);
			}
		}
		baseParticle.display ();
		textSize (15);
		text ('Press Q to quit', marginX / 3, windowH - 20);
		if (keyPressed) {
			if (key == '.') {
				frames += 5;
			}
			if (key == ',') {
				if (frames <= 10) {
					frames = 5;
				}
				else {
					frames -= 5;
				}
			}
		}
	}
};
var keyPressed = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (key == ' ') {
		if (paused == false) {
			paused = !(paused);
			print (paused);
			noLoop ();
		}
		else if (paused == true) {
			paused = !(paused);
			print (paused);
			loop ();
		}
		else {
			loop ();
		}
	}
	else if (key == 'q') {
		fill (0);
		rect (0, 0, windowW, windowH);
		running = false;
	}
};
var mouseClicked = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (mouseX > btrails.x - 25 && mouseX < btrails.x + 25 && mouseY > btrails.y - 25 && mouseY < btrails.y + 25 && trails == false) {
		trails = !(trails);
	}
	else if (mouseX > btrails.x - 25 && mouseX < btrails.x + 25 && mouseY > btrails.y - 25 && mouseY < btrails.y + 25 && trails == true) {
		trails = !(trails);
	}
	if ((mouseX > bposition.x - 25 && mouseX < bposition.x + 25 && mouseY > bposition.y - 25 && mouseY < bposition.y + 25) && pe == false) {
		pe = true;
		return !(pe);
	}
	if ((mouseX > bposition.x - 25 && mouseX < bposition.x + 25 && mouseY > bposition.y - 25 && mouseY < bposition.y + 25) && pe == true) {
		pe = false;
		return !(pe);
	}
	if ((mouseX > bvelocity.x - 25 && mouseX < bvelocity.x + 25 && mouseY > bvelocity.y - 25 && mouseY < bvelocity.y + 25) && ve == false) {
		ve = true;
		return !(ve);
	}
	if ((mouseX > bvelocity.x - 25 && mouseX < bvelocity.x + 25 && mouseY > bvelocity.y - 25 && mouseY < bvelocity.y + 25) && ve == true) {
		ve = false;
		return !(ve);
	}
	if ((mouseX > bacceleration.x - 25 && mouseX < bacceleration.x + 25 && mouseY > bacceleration.y - 25 && mouseY < bacceleration.y + 25) && ae == false) {
		ae = true;
		return !(ae);
	}
	if ((mouseX > bacceleration.x - 25 && mouseX < bacceleration.x + 25 && mouseY > bacceleration.y - 25 && mouseY < bacceleration.y + 25) && ae == true) {
		ae = false;
		return !(ae);
	}
	if (mouseX > bstart.x - 25 && mouseX < bstart.x + 25 && mouseY > bstart.y - 25 && mouseY < bstart.y + 25) {
		running = true;
	}
};
export var event_functions = dict ({'deviceMoved': deviceMoved, 'deviceTurned': deviceTurned, 'deviceShaken': deviceShaken, 'keyPressed': keyPressed, 'keyReleased': keyReleased, 'keyTyped': keyTyped, 'mouseMoved': mouseMoved, 'mouseDragged': mouseDragged, 'mousePressed': mousePressed, 'mouseReleased': mouseReleased, 'mouseClicked': mouseClicked, 'doubleClicked': doubleClicked, 'mouseWheel': mouseWheel, 'touchStarted': touchStarted, 'touchMoved': touchMoved, 'touchEnded': touchEnded, 'windowResized': windowResized, 'keyIsDown': keyIsDown});
start_p5 (preload, setup, draw, event_functions);

//# sourceMappingURL=target_sketch.map