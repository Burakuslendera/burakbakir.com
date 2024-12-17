"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd) define([], factory);
    else if (typeof exports === "object") exports["Smoke"] = factory();
    else root["Smoke"] = factory();
})(window, function () {
    return  (function (modules) {
        // webpackBootstrap
         // The module cache
         var installedModules = {};

         // The require function
         function __webpack_require__(moduleId) {

             // Check if module is in cache
             if (installedModules[moduleId]) {
                 return installedModules[moduleId].exports;

            }

             var module = (installedModules[moduleId] = {
                 i: moduleId,
                 l: false,
                 exports: {},

            });


             modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            );


             module.l = true;


             return module.exports;

        }

         __webpack_require__.m = modules;

         __webpack_require__.c = installedModules;

         __webpack_require__.d = function (exports, name, getter) {
             if (!__webpack_require__.o(exports, name)) {
                 Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter,
                });

            }

        };

         __webpack_require__.r = function (exports) {
             if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                 Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                });

            }
             Object.defineProperty(exports, "__esModule", { value: true });

        };
         __webpack_require__.t = function (value, mode) {
             if (mode & 1) value = __webpack_require__(value);
             if (mode & 8) return value;
             if (
                mode & 4 &&
                typeof value === "object" &&
                value &&
                value.__esModule
            )
                return value;
             var ns = Object.create(null);
             __webpack_require__.r(ns);
             Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value,
            });
             if (mode & 2 && typeof value != "string")
                for (var key in value)
                    __webpack_require__.d(
                        ns,
                        key,
                        function (key) {
                            return value[key];
                        }.bind(null, key)
                    );
             return ns;

        };

         __webpack_require__.n = function (module) {
             var getter =
                module && module.__esModule
                    ?  function getDefault() {
                        return module["default"];
                    }
                    :  function getModuleExports() {
                        return module;
                    };
             __webpack_require__.d(getter, "a", getter);
             return getter;

        };

         __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };

         __webpack_require__.p = "";



         return __webpack_require__(
            (__webpack_require__.s = "smoke.js")
        );

    })(

         {
            /***/ "./assets/dither.png":
            /*!***************************!*\
      !*** ./assets/dither.png ***!
      \***************************/

            /***/ function (module, exports) {
                module.exports =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAAHWCAYAAADKGqhaAAAPYklEQVR4nO3V0arsOA5AUf3/T/fMg9wkIkUR5EYc1xrYXigq3/RhHhL//P9/EfEPSZLsG2WoS7PZbDabzW/m9ZAkSfaNPCRJ0o6mv+wkSZ5klKEuH/v2e/fdd999993/2fvrIUmS7Bt5SJKkHU1/2UmSPMkoQ12azWaz2Wx+M6+HJEmyb+QhSZJ2NP1lJ0nyJCOPW5flY/b29vb29vYf9utHJEmyb+QhSZJ2NP1lJ0nyJKMMdWk2m81ms/nNvB6SJMm+kYckSdrR9JedJMmTjDLU5WPffv/2fnc//d/v7/f3+/v9/f5+f/+/83pIkiT7Rh6SJGlH0192kiRPMspQl2az2Ww2m9/M6yFJkuwbeUiSpB1Nf9lJkjzJyOPWZfmYvb29vb29/Yf9+hFJkuwbeUiSpB1Nf9lJkjzJKENdms1ms9lsfjOvhyRJsm/kIUmSdjT9ZSdJ8iSjDHX52Lffu+++++677/7P3l8PSZJk38hDkiTtaPrLTpLkSUYZ6tJsNpvNZvObeT0kSZJ9Iw9JkrSj6S87SZInGXncuiwfs7e3t7e3t/+wXz8iSZJ9Iw9JkrSj6S87SZInGWWoS7PZbDabzW/m9ZAkSfaNPCRJ0o6mv+wkSZ5k5HHrsnys7r/N3X/f+73f+73f+73/z7x/PSRJkn0jD0mStKPpLztJkicZZahLs9lsNpvNb+b1kCRJ9o08JEnSjqa/7CRJnmTkceuyfMze3t7e3t7+w379iCRJ9o08JEnSjqa/7CRJnmSUoS7NZrPZbDa/mddDkiTZN/KQJEk7mv6ykyR5klGGunzs2+/dd9999913/2fvr4ckSbJv5CFJknY0/WUnSfIkowx1aTabzWaz+c28HpIkyb6RhyRJ2tH0l50kyZOMPG5dlo/Z29vb29vbf9ivH5Ekyb6RhyRJ2tH0l50kyZOMMtSl2Ww2m83mN/N6SJIk+0YekiRpR9NfdpIkTzLKUJePffv92/vd/fR//1//+3/9/dP3/f3+fu//u///Pc7rIUmS7Bt5SJKkHU1/2UmSPMkoQ12azWaz2Wx+M6+HJEmyb+QhSZJ2NP1lJ0nyJCOPW5flY/b29vb29vYf9utHJEmyb+QhSZJ2NP1lJ0nyJKMMdWk2m81ms/nNvB6SJMm+kYckSdrR9JedJMmTjDLU5WPffu++++677777P3t/PSRJkn0jD0mStKPpLztJkicZZahLs9lsNpvNb+b1kCRJ9o08JEnSjqa/7CRJnmTkceuyfMze3t7e3t7+w379iCRJ9o08JEnSjqa/7CRJnmSUoS7NZrPZbDa/mddDkiTZN/KQJEk7mv6ykyR5kpHHrcvysbr/Nnf/fe/3fu/3fu/3/j/z/vWQJEn2jTwkSdKOpr/sJEmeZJShLs1ms9lsNr+Z10OSJNk38pAkSTua/rKTJHmSkcety/Ixe3t7e3t7+w/79SOSJNk38pAkSTua/rKTJHmSUYa6NJvNZrPZ/GZeD0mSZN/IQ5Ik7Wj6y06S5ElGGerysW+/d99999133/2fvb8ekiTJvpGHJEna0fSXnSTJk4wy1KXZbDabzeY383pIkiT7Rh6SJGlH0192kiRPMvK4dVk+Zm9vb29vb/9hv35EkiT7Rh6SJGlH0192kiRPMspQl2az2Ww2m9/M6yFJkuwbeUiSpB1Nf9lJkjzJKENdPvbt92/vd/fT//3+fn+/v9/f7+/39/87r4ckSbJv5CFJknY0/WUnSfIkowx1aTabzWaz+c28HpIkyb6RhyRJ2tH0l50kyZOMPG5dlo/Z29vb29vbf9ivH5Ekyb6RhyRJ2tH0l50kyZOMMtSl2Ww2m83mN/N6SJIk+0YekiRpR9NfdpIkTzLKUJePffu9++6777777v/s/fWQJEn2jTwkSdKOpr/sJEmeZJShLs1ms9lsNr+Z10OSJNk38pAkSTua/rKTJHmSkcety/Ixe3t7e3t7+w/79SOSJNk38pAkSTua/rKTJHmSUYa6NJvNZrPZ/GZeD0mSZN/IQ5Ik7Wj6y06S5ElGHrcuy8fq/tvc/fe93/u93/u93/v/zPvXQ5Ik2TfykCRJO5r+spMkeZJRhro0m81ms9n8Zl4PSZJk38hDkiTtaPrLTpLkSUYety7Lx+zt7e3t7e0/7NePSJJk38hDkiTtaPrLTpLkSUYZ6tJsNpvNZvObeT0kSZJ9Iw9JkrSj6S87SZInGWWoy8e+/d5999133333f/b+ekiSJPtGHpIkaUfTX3aSJE8yylCXZrPZbDab38zrIUmS7Bt5SJKkHU1/2UmSPMnI49Zl+Zi9vb29vb39h/36EUmS7Bt5SJKkHU1/2UmSPMkoQ12azWaz2Wx+M6+HJEmyb+QhSZJ2NP1lJ0nyJCOPW5flY3X/be7++//1+6fvT//9v/7+6fvTf/+vv3/6/vTf/+vv/0/ur4ckSbJv5CFJknY0/WUnSfIkowx1aTabzWaz+c28HpIkyb6RhyRJ2tH0l50kyZOMPG5dlo/Z29vb29vbf9ivH5Ekyb6RhyRJ2tH0l50kyZOMMtSl2Ww2m83mN/N6SJIk+0YekiRpR9NfdpIkTzLKUJePffu9++6777777v/s/fWQJEn2jTwkSdKOpr/sJEmeZJShLs1ms9lsNr+Z10OSJNk38pAkSTua/rKTJHmSkcety/Ixe3t7e3t7+w/79SOSJNk38pAkSTua/rKTJHmSUYa6NJvNZrPZ/GZeD0mSZN/IQ5Ik7Wj6y06S5ElGHrcuy8fq/tvc/fe93/u93/u93/v/zPvXQ5Ik2TfykCRJO5r+spMkeZJRhro0m81ms9n8Zl4PSZJk38hDkiTtaPrLTpLkSUYety7Lx+zt7e3t7e0/7NePSJJk38hDkiTtaPrLTpLkSUYZ6tJsNpvNZvObeT0kSZJ9Iw9JkrSj6S87SZInGWWoy8e+/d5999133333f/b+ekiSJPtGHpIkaUfTX3aSJE8yylCXZrPZbDab38zrIUmS7Bt5SJKkHU1/2UmSPMnI49Zl+Zi9vb29vb39h/36EUmS7Bt5SJKkHU1/2UmSPMkoQ12azWaz2Wx+M6+HJEmyb+QhSZJ2NP1lJ0nyJKMMdfnYt9+/vd/dT//3+/v9/f5+f7+/39//77wekiTJvpGHJEna0fSXnSTJk4wy1KXZbDabzeY383pIkiT7Rh6SJGlH0192kiRPMvK4dVk+Zm9vb29vb/9hv35EkiT7Rh6SJGlH0192kiRPMspQl2az2Ww2m9/M6yFJkuwbeUiSpB1Nf9lJkjzJKENdPvbt9+6777777rv/s/fXQ5Ik2TfykCRJO5r+spMkeZJRhro0m81ms9n8Zl4PSZJk38hDkiTtaPrLTpLkSUYety7Lx+zt7e3t7e0/7NePSJJk38hDkiTtaPrLTpLkSUYZ6tJsNpvNZvObeT0kSZJ9Iw9JkrSj6S87SZInGXncuiwfq/tvc/ff937v937v937v/zPvXw9JkmTfyEOSJO1o+stOkuRJRhnq0mw2m81m85t5PSRJkn0jD0mStKPpLztJkicZedy6LB+zt7e3t7e3/7BfPyJJkn0jD0mStKPpLztJkicZZahLs9lsNpvNb+b1kCRJ9o08JEnSjqa/7CRJnmSUoS4f+/Z7991333333f/Z++shSZLsG3lIkqQdTX/ZSZI8yShDXZrNZrPZbH4zr4ckSbJv5CFJknY0/WUnSfIkI49bl+Vj9vb29vb29h/260ckSbJv5CFJknY0/WUnSfIkowx1aTabzWaz+c28HpIkyb6RhyRJ2tH0l50kyZOMMtTlY99+//Z+dz/93//X//5ff//0fX+/v9/7/+7/f4/zekiSJPtGHpIkaUfTX3aSJE8yylCXZrPZbDab38zrIUmS7Bt5SJKkHU1/2UmSPMnI49Zl+Zi9vb29vb39h/36EUmS7Bt5SJKkHU1/2UmSPMkoQ12azWaz2Wx+M6+HJEmyb+QhSZJ2NP1lJ0nyJKMMdfnYt9+777777rvv/s/eXw9JkmTfyEOSJO1o+stOkuRJRhnq0mw2m81m85t5PSRJkn0jD0mStKPpLztJkicZedy6LB+zt7e3t7e3/7BfPyJJkn0jD0mStKPpLztJkicZZahLs9lsNpvNb+b1kCRJ9o08JEnSjqa/7CRJnmTkceuyfKzuv83df9/7vd/7vd/7vf/PvH89JEmSfSMPSZK0o+kvO0mSJxllqEuz2Ww2m81v5vWQJEn2jTwkSdKOpr/sJEmeZORx67J8zN7e3t7e3v7Dfv2IJEn2jTwkSdKOpr/sJEmeZJShLs1ms9lsNr+Z10OSJNk38pAkSTua/rKTJHmSUYa6fOzb791333333Xf/Z++vhyRJsm/kIUmSdjT9ZSdJ8iSjDHVpNpvNZrP5zbwekiTJvpGHJEna0fSXnSTJk4w8bl2Wj9nb29vb29t/2K8fkSTJvpGHJEna0fSXnSTJk4wy1KXZbDabzeY383pIkiT7Rh6SJGlH0192kiRPMspQl499+/3b+9399H+/v9/f7+/39/v7/f3/zushSZLsG3lIkqQdTX/ZSZI8yShDXZrNZrPZbH4zr4ckSbJv5CFJknY0/WUnSfIkI49bl+Vj9vb29vb29h/260ckSbJv5CFJknY0/WUnSfIkowx1aTabzWaz+c28HpIkyb6RhyRJ2tH0l50kyZOMMtTlY99+77777rvvvvs/e389JEmSfSMPSZK0o+kvO0mSJxllqEuz2Ww2m81v5vWQJEn2jTwkSdKOpr/sJEmeZORx67J8zN7e3t7e3v7Dfv2IJEn2jTwkSdKOpr/sJEmeZJShLs1ms9lsNr+Z10OSJNk38pAkSTua/rKTJHmSkcety/Kxuv82d/997/d+7/d+7/f+P/P+9ZAkSfaNPCRJ0o6mv+wkSZ5klKEuzWaz2Ww2v5nXQ5Ik2TfykCRJO5r+spMkeZKRx63L8jF7e3t7e3v7D/v1I5Ik2TfykCRJO5r+spMkeZJRhro0m81ms9n8Zl4PSZJk38hDkiTtaPrLTpLkSUYZ6vKxb79333333Xff/Z+9vx6SJMm+kYckSdrR9JedJMmTjDLUpdlsNpvN5jfzekiSJPtGHpIkaUfTX3aSJE8y8rh1WT5mb29vb29v/2G/fkSSJPtGHpIkaUfTX3aSJE8yylCXZrPZbDab38zrIUmS7Bt5SJKkHU1/2UmSPMnI49Zl+Vjdf5u7//5//f7p+9N//6+/f/r+9N//6++fvj/99//6+/+L+/8DJmjrygTZvccAAAAASUVORK5CYII=";

                /***/
            },

            /***/ "defualts.js":
            /*!*************************!*\
      !*** defualts.js ***!
      \*************************/

            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.setBehaviors = setBehaviors;
                exports.SHADER_SOURCE =
                    exports.DRAWING_PARAMS =
                        exports.behavior =
                            void 0;

                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        if (enumerableOnly)
                            symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            });
                        keys.push.apply(keys, symbols);
                    }
                    return keys;
                }

                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i] != null ? arguments[i] : {};
                        if (i % 2) {
                            ownKeys(source, true).forEach(function (key) {
                                _defineProperty(target, key, source[key]);
                            });
                        } else if (Object.getOwnPropertyDescriptors) {
                            Object.defineProperties(
                                target,
                                Object.getOwnPropertyDescriptors(source)
                            );
                        } else {
                            ownKeys(source).forEach(function (key) {
                                Object.defineProperty(
                                    target,
                                    key,
                                    Object.getOwnPropertyDescriptor(source, key)
                                );
                            });
                        }
                    }
                    return target;
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                var behavior = {
                    sim_resolution: 128,
                    dye_resolution: 512,
                    paused: false,
                    clamp_values: true,
                    embedded_dither: true,

                    dissipation: 0.97,
                    velocity: 0.98,
                    pressure: 0.8,
                    pressure_iteration: 20,

                    curl: 0,
                    emitter_size: 0.5,
                    render_shaders: true,
                    multi_color: true,

                    render_bloom: false,
                    bloom_iterations: 8,
                    bloom_resolution: 256,
                    intensity: 0.8,
                    threshold: 0.6,
                    soft_knee: 0.7,

                    background_color: { r: 0, g: 0, b: 0 },
                    transparent: false,
                };
                exports.behavior = behavior;
                var DRAWING_PARAMS = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false,
                    powerPreference: "default",
                };
                exports.DRAWING_PARAMS = DRAWING_PARAMS;
                var SHADER_SOURCE = {
                    blank: "",
                    vertex:
                        "\n                  precision highp float;\n              \n                  attribute vec2 aPosition;\n                  varying vec2 vUv;\n                  varying vec2 vL;\n                  varying vec2 vR;\n                  varying vec2 vT;\n                  varying vec2 vB;\n                  uniform vec2 texelSize;\n              \n                  void main () {\n                      vUv = aPosition * 0.5 + 0.5;\n                      vL = vUv - vec2(texelSize.x, 0.0);\n                      vR = vUv + vec2(texelSize.x, 0.0);\n                      vT = vUv + vec2(0.0, texelSize.y);\n                      vB = vUv - vec2(0.0, texelSize.y);\n                      gl_Position = vec4(aPosition, 0.0, 1.0);\n                  }",
                    clear:
                        "\n                  precision mediump float;\n                  precision mediump sampler2D;\n              \n                  varying highp vec2 vUv;\n                  uniform sampler2D uTexture;\n                  uniform float value;\n              \n                  void main () {\n                      gl_FragColor = value * texture2D(uTexture, vUv);\n                  }\n              ",
                    color:
                        "\n                  precision mediump float;\n              \n                  uniform vec4 color;\n              \n                  void main () {\n                      gl_FragColor = color;\n                  }\n              ",
                    background:
                        "\n                    void main() { \n                        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); \n                    } \n            ",
                    display:
                        "\n                  precision highp float;\n                  precision highp sampler2D;\n              \n                  varying vec2 vUv;\n                  uniform sampler2D uTexture;\n              \n                  void main () {\n                      vec3 C = texture2D(uTexture, vUv).rgb;\n                      float a = max(C.r, max(C.g, C.b));\n                      gl_FragColor = vec4(C, a);\n                  }\n              ",
                    displayBloom:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTexture;\n          uniform sampler2D uBloom;\n          uniform sampler2D uDithering;\n          uniform vec2 ditherScale;\n      \n          void main () {\n              vec3 C = texture2D(uTexture, vUv).rgb;\n              vec3 bloom = texture2D(uBloom, vUv).rgb;\n              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n              noise = noise * 2.0 - 1.0;\n              bloom += noise / 800.0;\n              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n              C += bloom;\n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
                    displayShading:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform vec2 texelSize;\n      \n          void main () {\n              vec3 L = texture2D(uTexture, vL).rgb;\n              vec3 R = texture2D(uTexture, vR).rgb;\n              vec3 T = texture2D(uTexture, vT).rgb;\n              vec3 B = texture2D(uTexture, vB).rgb;\n              vec3 C = texture2D(uTexture, vUv).rgb;\n      \n              float dx = length(R) - length(L);\n              float dy = length(T) - length(B);\n      \n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n      \n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              C.rgb *= diffuse;\n      \n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
                    displayBloomShading:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform sampler2D uBloom;\n          uniform sampler2D uDithering;\n          uniform vec2 ditherScale;\n          uniform vec2 texelSize;\n      \n          void main () {\n              vec3 L = texture2D(uTexture, vL).rgb;\n              vec3 R = texture2D(uTexture, vR).rgb;\n              vec3 T = texture2D(uTexture, vT).rgb;\n              vec3 B = texture2D(uTexture, vB).rgb;\n              vec3 C = texture2D(uTexture, vUv).rgb;\n      \n              float dx = length(R) - length(L);\n              float dy = length(T) - length(B);\n      \n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n      \n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              C *= diffuse;\n      \n              vec3 bloom = texture2D(uBloom, vUv).rgb;\n              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n              noise = noise * 2.0 - 1.0;\n              bloom += noise / 800.0;\n              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n              C += bloom;\n      \n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
                    bloomPreFilter:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTexture;\n          uniform vec3 curve;\n          uniform float threshold;\n      \n          void main () {\n              vec3 c = texture2D(uTexture, vUv).rgb;\n              float br = max(c.r, max(c.g, c.b));\n              float rq = clamp(br - curve.x, 0.0, curve.y);\n              rq = curve.z * rq * rq;\n              c *= max(rq, br - threshold) / max(br, 0.0001);\n              gl_FragColor = vec4(c, 0.0);\n          }\n      ",
                    bloomBlur:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n      \n          void main () {\n              vec4 sum = vec4(0.0);\n              sum += texture2D(uTexture, vL);\n              sum += texture2D(uTexture, vR);\n              sum += texture2D(uTexture, vT);\n              sum += texture2D(uTexture, vB);\n              sum *= 0.25;\n              gl_FragColor = sum;\n          }\n      ",
                    bloomFinal:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform float intensity;\n      \n          void main () {\n              vec4 sum = vec4(0.0);\n              sum += texture2D(uTexture, vL);\n              sum += texture2D(uTexture, vR);\n              sum += texture2D(uTexture, vT);\n              sum += texture2D(uTexture, vB);\n              sum *= 0.25;\n              gl_FragColor = sum * intensity;\n          }\n      ",
                    splat:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTarget;\n          uniform float aspectRatio;\n          uniform vec3 color;\n          uniform vec2 point;\n          uniform float radius;\n      \n          void main () {\n              vec2 p = vUv - point.xy;\n              p.x *= aspectRatio;\n              vec3 splat = exp(-dot(p, p) / radius) * color;\n              vec3 base = texture2D(uTarget, vUv).xyz;\n              gl_FragColor = vec4(base + splat, 1.0);\n          }\n      ",
                    advectionManualFiltering:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uSource;\n          uniform vec2 texelSize;\n          uniform vec2 dyeTexelSize;\n          uniform float dt;\n          uniform float dissipation;\n      \n          vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n              vec2 st = uv / tsize - 0.5;\n      \n              vec2 iuv = floor(st);\n              vec2 fuv = fract(st);\n      \n              vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n              vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n              vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n              vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n      \n              return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n          }\n      \n          void main () {\n              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n              gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n              gl_FragColor.a = 1.0;\n          }\n      ",
                    advection:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uSource;\n          uniform vec2 texelSize;\n          uniform float dt;\n          uniform float dissipation;\n      \n          void main () {\n              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n              gl_FragColor = dissipation * texture2D(uSource, coord);\n              gl_FragColor.a = 1.0;\n          }\n      ",
                    divergence:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uVelocity;\n      \n          void main () {\n              float L = texture2D(uVelocity, vL).x;\n              float R = texture2D(uVelocity, vR).x;\n              float T = texture2D(uVelocity, vT).y;\n              float B = texture2D(uVelocity, vB).y;\n      \n              vec2 C = texture2D(uVelocity, vUv).xy;\n              if (vL.x < 0.0) { L = -C.x; }\n              if (vR.x > 1.0) { R = -C.x; }\n              if (vT.y > 1.0) { T = -C.y; }\n              if (vB.y < 0.0) { B = -C.y; }\n      \n              float div = 0.5 * (R - L + T - B);\n              gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n          }\n      ",
                    curl: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uVelocity;\n      \n          void main () {\n              float L = texture2D(uVelocity, vL).y;\n              float R = texture2D(uVelocity, vR).y;\n              float T = texture2D(uVelocity, vT).x;\n              float B = texture2D(uVelocity, vB).x;\n              float vorticity = R - L - T + B;\n              gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n          }\n      ",
                    vorticity:
                        "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uCurl;\n          uniform float curl;\n          uniform float dt;\n      \n          void main () {\n              float L = texture2D(uCurl, vL).x;\n              float R = texture2D(uCurl, vR).x;\n              float T = texture2D(uCurl, vT).x;\n              float B = texture2D(uCurl, vB).x;\n              float C = texture2D(uCurl, vUv).x;\n      \n              vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n              force /= length(force) + 0.0001;\n              force *= curl * C;\n              force.y *= -1.0;\n      \n              vec2 vel = texture2D(uVelocity, vUv).xy;\n              gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n          }\n      ",
                    pressure:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uPressure;\n          uniform sampler2D uDivergence;\n      \n          vec2 boundary (vec2 uv) {\n              return uv;\n              // uncomment if you use wrap or repeat texture mode\n              // uv = min(max(uv, 0.0), 1.0);\n              // return uv;\n          }\n      \n          void main () {\n              float L = texture2D(uPressure, boundary(vL)).x;\n              float R = texture2D(uPressure, boundary(vR)).x;\n              float T = texture2D(uPressure, boundary(vT)).x;\n              float B = texture2D(uPressure, boundary(vB)).x;\n              float C = texture2D(uPressure, vUv).x;\n              float divergence = texture2D(uDivergence, vUv).x;\n              float pressure = (L + R + B + T - divergence) * 0.25;\n              gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n          }\n      ",
                    gradientSubtract:
                        "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uPressure;\n          uniform sampler2D uVelocity;\n      \n          vec2 boundary (vec2 uv) {\n              return uv;\n              // uv = min(max(uv, 0.0), 1.0);\n              // return uv;\n          }\n      \n          void main () {\n              float L = texture2D(uPressure, boundary(vL)).x;\n              float R = texture2D(uPressure, boundary(vR)).x;\n              float T = texture2D(uPressure, boundary(vT)).x;\n              float B = texture2D(uPressure, boundary(vB)).x;\n              vec2 velocity = texture2D(uVelocity, vUv).xy;\n              velocity.xy -= vec2(R - L, T - B);\n              gl_FragColor = vec4(velocity, 0.0, 1.0);\n          }\n      ",
                };
                exports.SHADER_SOURCE = SHADER_SOURCE;

                function setBehaviors(params) {exports.behavior = behavior = _objectSpread({}, behavior, {}, params);}

                /***/
            },

            /***/ "smoke.js":
            /*!**********************!*\
      !*** smoke.js ***!
      \**********************/

            /***/ function (module, exports, __webpack_require__) {
                "use strict";
                /* Refs
      https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
       */

                var _defualts = __webpack_require__(
                    /*! ./defualts */ "defualts.js"
                );

                var _initializer = __webpack_require__(
                    /*! ./initializer */ "initializer.js"
                );

                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        if (enumerableOnly)
                            symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            });
                        keys.push.apply(keys, symbols);
                    }
                    return keys;
                }

                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i] != null ? arguments[i] : {};
                        if (i % 2) {
                            ownKeys(source, true).forEach(function (key) {
                                _defineProperty(target, key, source[key]);
                            });
                        } else if (Object.getOwnPropertyDescriptors) {
                            Object.defineProperties(
                                target,
                                Object.getOwnPropertyDescriptors(source)
                            );
                        } else {
                            ownKeys(source).forEach(function (key) {
                                Object.defineProperty(
                                    target,
                                    key,
                                    Object.getOwnPropertyDescriptor(source, key)
                                );
                            });
                        }
                    }
                    return target;
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps)
                        _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                module.exports =

                    (function () {
                        function Smoke(canvas) {
                            this.PARAMS = _defualts.behavior;

                            _classCallCheck(this, Smoke);


                            canvas.width = canvas.clientWidth;
                            canvas.height = canvas.clientHeight;
                            this.canvas = canvas;

                            var _initWebGL = (0, _initializer.initWebGL)(),
                                programs = _initWebGL.programs,
                                webGL = _initWebGL.webGL,
                                colorFormats = _initWebGL.colorFormats,
                                pointers = _initWebGL.pointers;

                            this.programs = programs;
                            this.webGL = webGL;
                            this.colorFormats = colorFormats;
                            this.pointers = pointers;
                        }

                        _createClass(Smoke, [
                            {
                                key: "activate",
                                value: function activate() {
                                    (0, _initializer.activator)(
                                        this.canvas,
                                        this.webGL,
                                        this.colorFormats,
                                        this.programs,
                                        this.pointers
                                    );
                                },

                            },
                            {
                                key: "deactivate",
                                value: function deactivate() {},

                            },
                            {
                                key: "reset",
                                value: function reset() {
                                    (0, _initializer.initWebGL)();
                                    this.activate();
                                },
                                /**
                                 *
                                 *
                                 *
                                 * @param params:
                                 *
                                 */
                            },
                            {
                                key: "mapBehaviors",
                                value: function mapBehaviors(params) {
                                    this.PARAMS = _objectSpread({}, this.PARAMS, {}, params);
                                    (0, _defualts.setBehaviors)(this.PARAMS);
                                },
                                /**
                                 *
                                 *
                                 *
                                 * @param shouldSet:
                                 *
                                 */
                            },
                            {
                                key: "setAsBackground",
                                value: function setAsBackground() {
                                    var shouldSet =
                                        arguments.length > 0 && arguments[0] !== undefined
                                            ? arguments[0]
                                            : true;


                                    canvas.style.zIndex = shouldSet ? "-99" : "0";


                                    canvas.style.position = shouldSet ? "absolute" : "relative";
                                },
                                /**
                                 *
                                 *
                                 *
                                 * @param type:
                                 * @param value:
                                 * @param options:
                                 *
                                 * @param canvas
                                 */
                            },
                            {
                                key: "applyBackground",
                                value: function applyBackground(type, value) {
                                    var options =
                                        arguments.length > 2 && arguments[2] !== undefined
                                            ? arguments[2]
                                            : null;
                                    var canvas =
                                        arguments.length > 3 && arguments[3] !== undefined
                                            ? arguments[3]
                                            : this.canvas;
                                    type = type.toLowerCase();


                                    this.PARAMS.transparent = true;


                                    switch (type) {
                                        case "gradient":
                                            gradient();
                                            break;

                                        case "image":
                                            image();
                                            break;

                                        case "solid":


                                        default:
                                            this.PARAMS.transparent = false;
                                            this.PARAMS.background_color = value;
                                    }
                                    /* Reset WebGL */

                                    this.reset();


                                    function gradient() {
                                        /**
                                         *
                                         *
                                         * @type {string}
                                         */
                                        var gradient = "";


                                        switch (options) {
                                            case "radial":
                                                gradient = "radial-gradient(" + value + ")";
                                                break;

                                            case "conic":
                                                gradient = "conic-gradient(" + value + ")";
                                                break;

                                            case "repeating-linear":
                                                gradient = "repeating-linear-gradient(" + value + ")";
                                                break;

                                            case "repeating-radial":
                                                gradient = "repeating-radial-gradient(" + value + ")";
                                                break;

                                            case "linear":
                                            default:
                                                gradient = "linear-gradient(" + value + ")";
                                        }

                                        canvas.style.backgroundImage = gradient;
                                    }

                                    function image() {
                                        canvas.style.backgroundImage = "url('" + value + "')";

                                        if (options) {

                                            canvas.style.backgroundRepeat = options.repeat
                                                ? "repeat"
                                                : "no-repeat";

                                            canvas.style.backgroundPosition = options.position
                                                ? options.position
                                                : "center";

                                            canvas.style.backgroundSize = options.size
                                                ? options.size
                                                : "contain";

                                            canvas.style.backgroundColor = options.color
                                                ? options.color
                                                : "none";
                                        }
                                    }
                                },
                                /**
                                 *
                                 *
                                 *
                                 *
                                 * @param url: Path to dither in root directory.
                                 */
                            },
                            {
                                key: "setDitherURL",
                                value: function setDitherURL(url) {
                                    (0, _initializer.setDitherURL)(url);
                                },
                            },
                        ]);

                        return Smoke;
                    })();

                /***/
            },

            /***/ "initializer.js":
            /*!****************************!*\
      !*** initializer.js ***!
      \****************************/

            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.initWebGL = initWebGL;
                exports.activator = activator;
                exports.setDitherURL = setDitherURL;

                var defualts = _interopRequireWildcard(
                    __webpack_require__(/*! ./defualts */ "defualts.js")
                );

                var dither = _interopRequireWildcard(
                    __webpack_require__(
                        /*! ../assets/dither.png */ "./assets/dither.png"
                    )
                );

                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    } else {
                        var newObj = {};
                        if (obj != null) {
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                                    var desc =
                                        Object.defineProperty && Object.getOwnPropertyDescriptor
                                            ? Object.getOwnPropertyDescriptor(obj, key)
                                            : {};
                                    if (desc.get || desc.set) {
                                        Object.defineProperty(newObj, key, desc);
                                    } else {
                                        newObj[key] = obj[key];
                                    }
                                }
                            }
                        }
                        newObj["default"] = obj;
                        return newObj;
                    }
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps)
                        _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                var active = false;
                var cancel = false;
                var ditherURL = "./assets/dither.png";
                function initWebGL() {
                    var pointers = [];
                    pointers.push(new Pointer());

                    var webGL = canvas.getContext("webgl2", defualts.DRAWING_PARAMS);
                    var isWebGL2 = !!webGL;
                    if (!isWebGL2)
                        webGL =
                            canvas.getContext("webgl", defualts.DRAWING_PARAMS) ||
                            canvas.getContext(
                                "experimental-webgl",
                                defualts.DRAWING_PARAMS
                            );

                    let colorFormats = getFormats();

                    if (!colorFormats.supportLinearFiltering) {
                        defualts.behavior.render_shaders = false;
                        defualts.behavior.render_bloom = false;
                    }


                    let SHADER = {
                        baseVertex: compileShader(
                            webGL.VERTEX_SHADER,
                            defualts.SHADER_SOURCE.vertex
                        ),
                        clear: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.clear
                        ),
                        color: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.color
                        ),
                        background: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.background
                        ),
                        display: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.display
                        ),
                        displayBloom: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.displayBloom
                        ),
                        displayShading: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.displayShading
                        ),
                        displayBloomShading: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.displayBloomShading
                        ),
                        bloomPreFilter: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.bloomPreFilter
                        ),
                        bloomBlur: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.bloomBlur
                        ),
                        bloomFinal: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.bloomFinal
                        ),
                        splat: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.splat
                        ),
                        advectionManualFiltering: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.advectionManualFiltering
                        ),
                        advection: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.advection
                        ),
                        divergence: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.divergence
                        ),
                        curl: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.curl
                        ),
                        vorticity: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.vorticity
                        ),
                        pressure: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.pressure
                        ),
                        gradientSubtract: compileShader(
                            webGL.FRAGMENT_SHADER,
                            defualts.SHADER_SOURCE.gradientSubtract
                        ),
                    };
                    var programs = formShaderPrograms(
                        colorFormats.supportLinearFiltering
                    );
                    /* Worker Classes and Functions */

                    /**
                     *
                     * Bir cihazın mobil olup olmadığını algılar
                     *
                     * @returns {boolean}
                     */

                    function isMobile() {
                        return /Mobi|Android/i.test(navigator.userAgent);
                    }
                    /**
                     * Biçimleri Al:
                     * Renk uzantılarını, doğrusal filtreleme uzantılarını etkinleştirin ve kullanılabilir renk biçimleri olan RGBA,
                     * RG (Kırmızı-Yeşil) ve R (Kırmızı)'yi döndür.
                     *
                     * @returns {{formatRGBA: {internalFormat, format}, supportLinearFiltering: OES_texture_half_float_linear,
                     * formatR: {internalFormat, format}, halfFloatTexType: *, formatRG: {internalFormat, format}}}
                     */

                    function getFormats() {
                        /* Color Formats */
                        var formatRGBA;
                        var formatRG;
                        var formatR;
                        var halfFloat;
                        var supportLinearFiltering;
                        /* WebGL renk uzantılarını etkinleştirir ve doğrusal filtreleme uzantısını alır*/

                        if (isWebGL2) {
                            webGL.getExtension("EXT_color_buffer_float");
                            supportLinearFiltering = webGL.getExtension(
                                "OES_texture_float_linear"
                            );
                        } else {
                            halfFloat = webGL.getExtension("OES_texture_half_float");
                            supportLinearFiltering = webGL.getExtension(
                                "OES_texture_half_float_linear"
                            );
                        }

                        var HALF_FLOAT_TEXTURE_TYPE = isWebGL2
                            ? webGL.HALF_FLOAT
                            : halfFloat.HALF_FLOAT_OES;
                        /* Renk tamponları temizlendiğinde rengi siyaha ayarla */

                        webGL.clearColor(0.0, 0.0, 0.0, 1.0);
                        /* Renk biçimlerini al */

                        if (isWebGL2) {
                            formatRGBA = getSupportedFormat(
                                webGL.RGBA16F,
                                webGL.RGBA,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                            formatRG = getSupportedFormat(
                                webGL.RG16F,
                                webGL.RG,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                            formatR = getSupportedFormat(
                                webGL.R16F,
                                webGL.RED,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                        } else {
                            formatRGBA = getSupportedFormat(
                                webGL.RGBA,
                                webGL.RGBA,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                            formatRG = getSupportedFormat(
                                webGL.RGBA,
                                webGL.RGBA,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                            formatR = getSupportedFormat(
                                webGL.RGBA,
                                webGL.RGBA,
                                HALF_FLOAT_TEXTURE_TYPE
                            );
                        }
                        exports.initWebGL = initWebGL;
                        /**
                         *
                         *
                         *
                         * @returns {{internalFormat: *, format: *}|null|({internalFormat, format}|null)}
                         * @param internalFormat
                         * @param format
                         * @param type
                         */

                        function getSupportedFormat(internalFormat, format, type) {
                            let isSupportRenderTextureFormat;
                            let texture = webGL.createTexture();
                            /* Set texture parameters */

                            webGL.bindTexture(webGL.TEXTURE_2D, texture);
                            webGL.texParameteri(
                                webGL.TEXTURE_2D,
                                webGL.TEXTURE_MIN_FILTER,
                                webGL.NEAREST
                            );
                            webGL.texParameteri(
                                webGL.TEXTURE_2D,
                                webGL.TEXTURE_MAG_FILTER,
                                webGL.NEAREST
                            );
                            webGL.texParameteri(
                                webGL.TEXTURE_2D,
                                webGL.TEXTURE_WRAP_S,
                                webGL.CLAMP_TO_EDGE
                            );
                            webGL.texParameteri(
                                webGL.TEXTURE_2D,
                                webGL.TEXTURE_WRAP_T,
                                webGL.CLAMP_TO_EDGE
                            );


                            webGL.texImage2D(
                                webGL.TEXTURE_2D,
                                0,
                                internalFormat,
                                4,
                                4,
                                0,
                                format,
                                type,
                                null
                            );


                            var fbo = webGL.createFramebuffer();
                            webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);
                            webGL.framebufferTexture2D(
                                webGL.FRAMEBUFFER,
                                webGL.COLOR_ATTACHMENT0,
                                webGL.TEXTURE_2D,
                                texture,
                                0
                            );


                            var status = webGL.checkFramebufferStatus(webGL.FRAMEBUFFER);
                            isSupportRenderTextureFormat =
                                status === webGL.FRAMEBUFFER_COMPLETE;


                            if (!isSupportRenderTextureFormat) {
                                switch (internalFormat) {
                                    case webGL.R16F:
                                        return getSupportedFormat(webGL.RG16F, webGL.RG, type);

                                    case webGL.RG16F:
                                        return getSupportedFormat(
                                            webGL.RGBA16F,
                                            webGL.RGBA,
                                            type
                                        );

                                    default:
                                        return null;
                                }
                            }

                            return {
                                internalFormat: internalFormat,
                                format: format,
                            };
                        }

                        return {
                            formatRGBA: formatRGBA,
                            formatRG: formatRG,
                            formatR: formatR,
                            halfFloatTexType: HALF_FLOAT_TEXTURE_TYPE,
                            supportLinearFiltering: supportLinearFiltering,
                        };
                    }
                    /**
                     * Shader'ı Derle:
                     * Sağlanan GLSL kaynağını kullanarak `type` türünde yeni bir webGL shader'ı oluşturur.
                     * `type` şunlardan biridir
                     * `VERTEX_SHADER` veya `FRAGMENT_SHADER`
                     *
                     * @returns {WebGLShader}: Parametreli tür ve kaynaktan oluşan bir webGL gölgelendiricisi
                     * @param type
                     * @param source
                     */

                    function compileShader(type, source) {
                        var shader = webGL.createShader(type);
                        webGL.shaderSource(shader, source);
                        webGL.compileShader(shader);

                        if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
                            const info = webGL.getShaderInfoLog(shader);
                            webGL.deleteShader(shader);
                            throw new Error('Could not compile WebGL shader. \n\n' + info);
                        }

                        return shader;
                    }

                    /**
                     * formShaderPrograms fonksiyonu, belirtilen gölgelendirici (shader) kaynak kodlarını kullanarak,
                     * WebGL için GLProgram nesneleri oluşturur ve bunları bir nesne içinde döndürür.
                     *
                     * Bu sayede uygulama, gerekli olan tüm shader programlarına kolayca erişebilir.
                     * Her bir GLProgram, vertex ve fragment shader'ların birleşiminden oluşan bir programdır.
                     *
                     * @param {boolean} supportLinearFiltering - GPU'nun lineer filtrelemeyi destekleyip desteklemediğini belirtir.
                     *                                           Eğer true ise advection için normal gölgelendirici kullanılır,
                     *                                           aksi halde advectionManualFiltering gölgelendiricisi kullanılır.
                     *
                     *  @returns {{displayBloomProgram: GLProgram, vorticityProgram: GLProgram, displayShadingProgram: GLProgram,
                     *  displayBloomShadingProgram: GLProgram, gradientSubtractProgram: GLProgram, advectionProgram: GLProgram,
                     *  bloomBlurProgram: GLProgram, colorProgram: GLProgram, divergenceProgram: GLProgram, clearProgram: GLProgram,
                     *  splatProgram: GLProgram, displayProgram: GLProgram, bloomPreFilterProgram: GLProgram, curlProgram: GLProgram,
                     *  bloomFinalProgram: GLProgram, pressureProgram: GLProgram, backgroundProgram: GLProgram}}:
                     */
                    function formShaderPrograms(supportLinearFiltering) {
                        return {
                            // clearProgram: Bir texture veya framebuffer'ın içeriğini bir değerle çarparak temizlemek için kullanılır.
                            clearProgram: new GLProgram(
                                SHADER.baseVertex, // Ortak vertex shader (tam ekran quad)
                                SHADER.clear,      // Clear fragment shader
                                webGL
                            ),

                            // colorProgram: Tek renkli bir arka plan veya belirli bir renge boyama yapmak için kullanılır.
                            colorProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.color,
                                webGL
                            ),

                            // backgroundProgram: Arka plan desenleri, gradyanlar veya özel efektler için kullanılır.
                            backgroundProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.background,
                                webGL
                            ),

                            // displayProgram: Yoğunluk veya renk verisini direkt ekrana ya da hedef framebuffer'a çizer.
                            displayProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.display,
                                webGL
                            ),

                            // displayBloomProgram: Bloom efekti uygulanmış sahneyi ekrana çizer.
                            displayBloomProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.displayBloom,
                                webGL
                            ),

                            // displayShadingProgram: Normal shading hesaplamaları (ışık, gölge) eklerken sahneyi çizer.
                            displayShadingProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.displayShading,
                                webGL
                            ),

                            // displayBloomShadingProgram: Hem bloom hem de shading efektini birleştirerek ekrana çizer.
                            displayBloomShadingProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.displayBloomShading,
                                webGL
                            ),

                            // bloomPreFilterProgram: Bloom efekti öncesi parlak pikselleri ön filtrelemede kullanılır.
                            bloomPreFilterProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.bloomPreFilter,
                                webGL
                            ),

                            // bloomBlurProgram: Bloom için oluşturulan downsample edilmiş texture'larda bulanıklaştırma (blur) işlemi yapar.
                            bloomBlurProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.bloomBlur,
                                webGL
                            ),

                            // bloomFinalProgram: Bloom aşamalarının sonunda elde edilen sonucu asıl sahneyle birleştirir.
                            bloomFinalProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.bloomFinal,
                                webGL
                            ),

                            // splatProgram: Belirli bir noktaya hız veya renk etkisi ekleyerek sıçrama/dağılma efekti oluşturur.
                            splatProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.splat,
                                webGL
                            ),

                            // advectionProgram: Hız veya yoğunluğun zamanla hareketini (advection) hesaplar.
                            // Linear filtreleme desteklenmiyorsa manuel filtreleme kullanan shader'a geçilir.
                            advectionProgram: new GLProgram(
                                SHADER.baseVertex,
                                supportLinearFiltering
                                    ? SHADER.advection
                                    : SHADER.advectionManualFiltering,
                                webGL
                            ),

                            // divergenceProgram: Hız alanının divergence'ını hesaplar, basınç çözümlerinde kullanılır.
                            divergenceProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.divergence,
                                webGL
                            ),

                            // curlProgram: Akış alanının kıvrımlılığını (curl) hesaplar, vorticity için gereklidir.
                            curlProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.curl,
                                webGL
                            ),

                            // vorticityProgram: Curl'den elde edilen kuvvetleri hız alanına uygular.
                            vorticityProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.vorticity,
                                webGL
                            ),

                            // pressureProgram: Divergence'a göre basınç alanını iteratif olarak çözer.
                            pressureProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.pressure,
                                webGL
                            ),

                            // gradientSubtractProgram: Hesaplanan basınç gradyanını hız alanından çıkararak sıkıştırılamazlığı sağlar.
                            gradientSubtractProgram: new GLProgram(
                                SHADER.baseVertex,
                                SHADER.gradientSubtract,
                                webGL
                            ),
                        };
                    }
                    return {
                        programs: programs,
                        webGL: webGL,
                        colorFormats: colorFormats,
                        pointers: pointers,
                    };
                }

                 /**
                  * activator fonksiyonu, simülasyonun başlatılması veya yeniden başlatılması için gerekli ayarları yapar.
                  * Bu fonksiyon, canvas, webGL bağlamı, renk formatları, shader programları (PROGRAMS) ve işaretçi (pointers) gibi
                  * temel bileşenleri kullanarak simülasyonun çalışma ortamını hazırlar.
                  *
                  * Eğer `active` değişkeni zaten true ise, önceden var olan işaretçi dizisini sıfırlayıp yeni bir işaretçi nesnesi ekler.
                  * Ardından, çeşitli global değişkenleri tanımlar (örneğin velocity, density, bloom gibi),
                  * ve `blit` fonksiyonunu tanımlayarak ekrana veya framebuffer'a tam ekran çizim yapma altyapısını hazırlar.
                  *
                  * @param {HTMLCanvasElement} canvas - Çizim yapılacak canvas elementi.
                  * @param {WebGLRenderingContext|WebGL2RenderingContext} webGL - WebGL bağlamı.
                  * @param {Object} colorFormat - Kullanılacak renk formatlarını içeren nesne (formatRGBA, formatRG, vb.).
                  * @param {Object} PROGRAMS - Gölgelendirici (shader) program objelerini içeren nesne.
                  * @param {Array} pointers - İşaretçi (fare, dokunma) durumlarını tutan dizi.
                  */
                 function activator(canvas, webGL, colorFormat, PROGRAMS, pointers) {
                     // Eğer 'active' zaten true ise, mevcut pointers'ı sıfırlıyoruz.
                     // Böylece yeni bir işaretçi (Pointer) nesnesi oluşturuluyor.
                     if (active) {
                         var nPointers = [];
                         nPointers.push(new Pointer());
                         pointers = nPointers;
                     }

                     // Simülasyonun aktif olduğunu belirtiyoruz.
                     active = true;

                     // Davranış parametreleri defualts.behavior üzerinden alınıyor.
                     // Örneğin sim_resolution, dye_resolution, bloom_iterations gibi ayarlar burada olabilir.
                     let PARAMS = defualts.behavior;

                     // bloomFrameBuffers, splatStack, simWidth, simHeight, dyeWidth, dyeHeight,
                     // density, velocity, divergence, curl, pressure, bloom gibi değişkenler burada tanımlanarak
                     // ileride init fonksiyonu veya diğer fonksiyonlarda kullanılmak üzere hazırlanır.
                     let bloomFrameBuffers = [];
                     let splatStack = [];
                     let simWidth;
                     let simHeight;
                     let dyeWidth;
                     let dyeHeight;
                     let density;
                     let velocity;
                     let divergence;
                     let curl;
                     let pressure;
                     let bloom;

                     // blit fonksiyonu: Ekrana veya bir framebuffer'a tam ekran bir quad (dikdörtgen) çizer.
                     // Bu quad genellikle post-processing veya framebuffer üzerine texture çizmek için kullanılır.
                     // Aşağıda IIFE (Immediately Invoked Function Expression) kullanılarak tanımlanıyor.
                     // Bu sayede gerekli buffer tanımları bir kere yapılıp sonrasında 'blit(destination)' çağrısı
                     // ile istediğimiz yere kolayca çizim yapabiliriz.
                     let blit = (function () {
                         // Bir vertex buffer oluşturup, tam ekran kaplayacak bir kare (2x2) oluşturuyoruz.
                         // Burada -1,-1 / -1,1 / 1,1 / 1,-1 koordinatları kullanılarak tam ekran bir quad elde edilir.
                         webGL.bindBuffer(webGL.ARRAY_BUFFER, webGL.createBuffer());
                         webGL.bufferData(
                             webGL.ARRAY_BUFFER,
                             new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
                             webGL.STATIC_DRAW
                         );

                         // Bu vertex'leri kullanarak iki üçgenden oluşan bir kare oluşturmak için indeks buffer'ı tanımlanır.
                         webGL.bindBuffer(
                             webGL.ELEMENT_ARRAY_BUFFER,
                             webGL.createBuffer()
                         );
                         webGL.bufferData(
                             webGL.ELEMENT_ARRAY_BUFFER,
                             new Uint16Array([0, 1, 2, 0, 2, 3]),
                             webGL.STATIC_DRAW
                         );

                         // Vertex verisini attribute 0'a (pozisyon attribute'u) bağla.
                         webGL.vertexAttribPointer(0, 2, webGL.FLOAT, false, 0, 0);
                         webGL.enableVertexAttribArray(0);

                         // Bu fonksiyon kapatılıp geri dönen fonksiyon, sadece framebuffer'ı alıp çizim yapar.
                         // destination: Hedef framebuffer (null ise ekrana, aksi halde belirtilen FBO'ya)
                         return function (destination) {
                             // destination FBO'ya çizim yapılır.
                             webGL.bindFramebuffer(webGL.FRAMEBUFFER, destination);
                             // 6 indeks ile 2 üçgenlik bir kare çizilir.
                             webGL.drawElements(webGL.TRIANGLES, 6, webGL.UNSIGNED_SHORT, 0);
                         };
                     })();


                 /**
                     * LaunchBalloon fonksiyonu, verilen konumdan belirli sayıda (numParticles) ve hızda
                     * rastgele yönlerde parçacıklar "fırlatır". Bu parçacıklar 'splat' fonksiyonuyla simülasyona eklenir,
                     * böylece ekranda baloncuk efekti oluşur.
                     *
                     * @param {number} x - Başlangıç x koordinatı (piksel cinsinden, canvas alanı içinde).
                     * @param {number} y - Başlangıç y koordinatı.
                     * @param {number} numParticles - Oluşturulacak parçacık sayısı (varsayılan 100).
                     * @param {number} speed - Parçacıkların temel hız değeri (varsayılan 4.0).
                     * @param {boolean} burst - Eğer true ise, 2 saniye sonra ek bir patlama etkisi daha uygular.
                     */
                    function LaunchBalloon(x, y, numParticles = 100, speed = 4.0, burst = false) {
                        // Ekran boyutlarını al.
                        const canvasHeight = canvas.height;
                        const canvasWidth = canvas.width;

                        // %10'luk bir marjin alanı hesaplayarak balonların tamamen ekranın kenarına gitmesini engelliyoruz.
                        const minY = canvasHeight * 0.1;
                        const maxY = canvasHeight * 0.9;
                        const minX = canvasWidth * 0.1;
                        const maxX = canvasWidth * 0.9;

                        // x ve y koordinatlarını %10 marjin içinde sınırlıyoruz.
                        // Bu sayede baloncuklar ekranın tam kenarında oluşmak yerine bir miktar içeride kalırlar.
                        x = Math.min(Math.max(x, minX), maxX);
                        y = Math.min(Math.max(y, minY), maxY);

                        // Her parçacık için rastgele bir açı ve hız belirlenir.
                        // Bu sayede dairesel bir dağılım elde edilir (her yönde parçacık gider).
                        for (let i = 0; i < numParticles; i++) {
                            const angle = Math.random() * 2 * Math.PI; // 0'dan 2PI'a kadar rastgele açı (360 derece)
                            const velocity = Math.random() * speed + 1.0; // Hız: 1.0 ile (speed+1.0) arası
                            const dx = Math.cos(angle) * velocity;
                            const dy = Math.sin(angle) * velocity;

                            // Parçacık rengi rastgele üretilen bir HSV renginin tamamlayıcı rengi olarak belirlenir.
                            const color = getComplementaryColor(generateColorHSV());

                            // Splat fonksiyonu parçacığı simülasyona ekler, böylece ekranda görünen akışkan
                            // bu parçacığın hız vektörüne ve rengine göre etkilenir.
                            splat(x, y, dx, dy, color);
                        }

                        // Eğer burst true ise, 2 saniye sonra ek bir patlama dalgası daha yap.
                        // Bu ikinci patlama, sahnede daha yoğun bir etki yaratmak için kullanılabilir.
                        if (burst) {
                            setTimeout(() => {
                                for (let i = 0; i < 100; i++) {
                                    const angle = Math.random() * 2 * Math.PI;
                                    const velocity = Math.random() * 3 + 1.0;
                                    const dx = Math.cos(angle) * velocity;
                                    const dy = Math.sin(angle) * velocity;
                                    const color = getComplementaryColor(generateColorHSV());
                                    splat(x, y, dx, dy, color);
                                }
                            }, 2000); // 2 saniye bekledikten sonra patlama efekti eklenir.
                        }
                    }

                    /**
                     * ditheringTexture, dither efektinde kullanılacak texture'dır.
                     * Dither, renk geçişlerini yumuşatmak, bantlanmayı azaltmak için kullanılır.
                     * Eğer PARAMS.embedded_dither true ise gömülü dither resmi kullanılır,
                     * aksi halde ditherURL üzerinden harici bir resim yüklenir.
                     */
                    var ditheringTexture = PARAMS.embedded_dither
                        ? createTextureAsync(dither["default"])
                        : createTextureAsync(ditherURL);

                    init();

                    StartBaloon();

                    var lastColorChangeTime = Date.now(); // Son renk değiştirme zamanını tutar.

                    update();




                    /**
                     * init fonksiyonu, simülasyon için gerekli olan frame buffer (FBO) ve renk formatlarını ayarlayarak
                     * başlangıç durumunu oluşturur. Ekran boyutuna, kullanıcı parametrelerine (PARAMS) ve donanım özelliklerine
                     * göre bellek yapıları ve tamponlar hazırlanır. Bu sayede akışkan simülasyonu (hız, yoğunluk, basınç),
                     * bloom efekti ve diğer post-processing işlemleri sağlıklı şekilde gerçekleştirilebilir.
                     */
                    function init() {
                        /* Color */
                        // colorFormat, WebGL üzerinde kullanılabilecek uygun renk formatlarını ve yarım-float türlerini içerir.
                        var texType = colorFormat.halfFloatTexType; // Yarım-float türü (örneğin: HALF_FLOAT_EXT).
                        var rgba = colorFormat.formatRGBA;          // RGBA format bilgisi.
                        var rg = colorFormat.formatRG;              // RG format bilgisi (örn: hız alanı için).
                        var r = colorFormat.formatR;                // R format bilgisi (örn: divergence, curl, basınç alanı).
                        var filtering = colorFormat.supportLinearFiltering
                            ? webGL.LINEAR    // Doğrusal filtreleme destekleniyorsa LINEAR kullan.
                            : webGL.NEAREST;  // Aksi halde NEAREST (en yakın) filtreleme kullan.

                        // PARAMS'ta belirtilen çözünürlüklere göre simülasyon boyutlarını ayarlar.
                        // getResolution, verilen temel çözünürlüğü ekran oranına göre ölçekler.
                        var simRes = getResolution(PARAMS.sim_resolution);
                        var dyeRes = getResolution(PARAMS.dye_resolution);
                        var bloomRes = getResolution(PARAMS.bloom_resolution);

                        simWidth = simRes.width;
                        simHeight = simRes.height;
                        dyeWidth = dyeRes.width;
                        dyeHeight = dyeRes.height;

                        /*
                         * Yoğunluk (density), Hız (velocity) ve Bloom için kullanılan çift çerçeve tamponları (Double FBO) oluşturulur veya yeniden boyutlandırılır.
                         * Double FBO: Biri okuma (read), diğeri yazma (write) için olmak üzere iki tampon tutar.
                         * Bu sayede bir tampon üzerine çizim yaparken diğerinden okuyabilir ve işlem sonunda aralarında swap yapabilirsiniz.
                         */

                        // Density (yoğunluk) tamponu oluştur veya yeniden boyutlandır.
                        // Eğer density zaten varsa resizeDoubleFBO ile yeniden boyutlandır, yoksa createDoubleFBO ile oluştur.
                        density = !density
                            ? createDoubleFBO(
                                dyeWidth,
                                dyeHeight,
                                rgba.internalFormat,
                                rgba.format,
                                texType,
                                filtering
                            )
                            : resizeDoubleFBO(
                                density,
                                dyeWidth,
                                dyeHeight,
                                rgba.internalFormat,
                                rgba.format,
                                texType,
                                filtering
                            );

                        // Velocity (hız alanı) tamponu aynı mantıkla oluştur veya yeniden boyutlandır.
                        velocity = !velocity
                            ? createDoubleFBO(
                                simWidth,
                                simHeight,
                                rg.internalFormat,
                                rg.format,
                                texType,
                                filtering
                            )
                            : resizeDoubleFBO(
                                velocity,
                                simWidth,
                                simHeight,
                                rg.internalFormat,
                                rg.format,
                                texType,
                                filtering
                            );

                        // Bloom efekti için tek bir FBO yeterli (double FBO gerekmez).
                        bloom = createFBO(
                            bloomRes.width,
                            bloomRes.height,
                            rgba.internalFormat,
                            rgba.format,
                            texType,
                            filtering
                        );

                        // Divergence, curl, pressure gibi tek bileşenli (R formatlı) FBO'lar oluşturulur.
                        divergence = createFBO(
                            simWidth,
                            simHeight,
                            r.internalFormat,
                            r.format,
                            texType,
                            webGL.NEAREST
                        );
                        curl = createFBO(
                            simWidth,
                            simHeight,
                            r.internalFormat,
                            r.format,
                            texType,
                            webGL.NEAREST
                        );
                        pressure = createDoubleFBO(
                            simWidth,
                            simHeight,
                            r.internalFormat,
                            r.format,
                            texType,
                            webGL.NEAREST
                        );

                        /*
                         * Bloom efekti için birden çok FBO oluşturuluyor (bloomFrameBuffers).
                         * Bu FBO'lar giderek küçülen boyutlarda zincir halinde oluşturularak blur işlemi gibi post-processing aşamalarında kullanılır.
                         * PARAMS.bloom_iterations değeri kadar yineleme yapılır.
                         */
                        bloomFrameBuffers.length = 0;

                        for (var i = 0; i < PARAMS.bloom_iterations; i++) {
                            // Bloom buffer boyutları her adımda 2'ye bölünerek küçültülür (bitwise shift kullanılarak).
                            var width = bloomRes.width >> (i + 1);   // bloomRes.width / (2^(i+1))
                            var height = bloomRes.height >> (i + 1); // bloomRes.height / (2^(i+1))

                            // Çok küçük boyutlara inildiğinde işlemin anlamı kalmayabilir, bu yüzden kırarız.
                            if (width < 2 || height < 2) break;

                            var fbo = createFBO(
                                width,
                                height,
                                rgba.internalFormat,
                                rgba.format,
                                texType,
                                filtering
                            );
                            bloomFrameBuffers.push(fbo);
                        }

                        // Sonuç olarak init fonksiyonu tamamlandığında:
                        // - Simülasyon için hız, yoğunluk, basınç, divergence, curl tamponları hazır.
                        // - Bloom efekti için gerekli tüm tamponlar ve katmanlar ayarlanmış durumda.
                        // Bu sayede step ve render fonksiyonları bu tamponları kullanarak simülasyon ve efektleri işleyebilir.
                    }


                    /**
                     * Çift Çerçeve Arabellek Nesnesi Oluştur
                     *  2 çerçeve arabelleği olan bir nesne oluşturur, biri okumalar için, diğeri yazmalar için
                     *
                     * @param w
                     * @param h
                     * @param internalFormat - GPU üzerinde kullanacağımız dahili renk formatı. (Örneğin: gl.RGBA16F)
                     * @param format
                     * @param type
                     * @param param
                     */

                    function createDoubleFBO(
                        w,
                        h,
                        internalFormat,
                        format,
                        type,
                        param
                    ) {
                        /*Çerçeve arabellek nesneleri oluşturma */
                        let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                        let fbo2 = createFBO(w, h, internalFormat, format, type, param);
                        return {
                            /* Tampon Verilerini alma ve ayarlama */
                            get read() {
                                return fbo1;
                            },

                            set read(value) {
                                fbo1 = value;
                            },

                            get write() {
                                return fbo2;
                            },

                            set write(value) {
                                fbo2 = value;
                            },

                            /*Arabellekler arasında oluşan verileri değiştirir.*/
                            swap: function swap() {
                                let temp = fbo1;
                                fbo1 = fbo2;
                                fbo2 = temp;
                            },
                        };
                    }

                    /**
                     * Bir Framebuffer Object (FBO) oluşturan fonksiyon.
                     * Bu fonksiyon, verilen boyutlarda (w x h) bir renk tamponu (texture) oluşturur,
                     * bu tamponu bir framebuffer'a bağlar ve kullanıma hazır bir FBO nesnesi döndürür.
                     *
                     * @param {number} w
                     * @param {number} h
                     * @param {GLenum} internalFormat - GPU üzerinde kullanacağımız dahili renk formatı. (Örneğin: gl.RGBA16F)
                     * @param {GLenum} format
                     * @param {GLenum} type
                     * @param {GLenum} param - Texture filtreleme parametresi. (Örneğin: gl.LINEAR veya gl.NEAREST)
                     *
                     * @returns {Object} - Geriye oluşturulan FBO hakkında bilgiler ve attach fonksiyonunu içeren bir nesne döner:
                     *                   {
                     *                     texture: WebGLTexture,   // Oluşturulan texture nesnesi.
                     *                     fbo: WebGLFramebuffer,   // Oluşturulan framebuffer nesnesi.
                     *                     width: number,           // Texture genişliği.
                     *                     height: number,          // Texture yüksekliği.
                     *                     attach: function(id) {...} // Bu texture'ı bir texture birimine bağlama işlevi.
                     *                   }
                     */
                    function createFBO(w, h, internalFormat, format, type, param) {
                        // WebGL'de TEXTURE0 birimine aktif hale getiriyoruz.
                        // TEXTURE0, texture'ların bağlanacağı ilk birimdir. Diğer birimlere de benzer şekilde bind edilebilir.
                        webGL.activeTexture(webGL.TEXTURE0);


                        let texture = webGL.createTexture();


                        webGL.bindTexture(webGL.TEXTURE_2D, texture);

                        // Texture için yatay ve dikey eksenlerdeki filtreleme modları ayarlanıyor.
                        // TEXTURE_MIN_FILTER: Texture küçültüldüğünde hangi filtreleme kullanılacak.
                        // TEXTURE_MAG_FILTER: Texture büyütüldüğünde hangi filtreleme kullanılacak.
                        // "param" genelde LINEAR ya da NEAREST olabilir.
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, param);
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, param);

                        // Texture sarmalama modlarını belirtiyoruz.
                        // CLAMP_TO_EDGE: Texture kenarlarına geldiğinde renkler "kenara sabitlenir",
                        // tekrarlanmaz.
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.CLAMP_TO_EDGE);
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.CLAMP_TO_EDGE);

                        webGL.texImage2D(
                            webGL.TEXTURE_2D,
                            0,
                            internalFormat,
                            w,
                            h,
                            0,
                            format,
                            type,
                            null
                        );

                        // Bir Framebuffer nesnesi oluşturuyoruz.
                        let fbo = webGL.createFramebuffer();

                        // Oluşturduğumuz framebuffer'ı aktif hale getiriyoruz.
                        webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);

                        // Texture'ı framebuffer'ın COLOR_ATTACHMENT0 noktasına bağlıyoruz.
                        // Bu sayede, bu framebuffer'a çizim yapıldığında renk çıktısı bu texture'a aktarılacak.
                        webGL.framebufferTexture2D(
                            webGL.FRAMEBUFFER,
                            webGL.COLOR_ATTACHMENT0,
                            webGL.TEXTURE_2D,
                            texture,
                            0
                        );

                        // Bu framebuffer'a çizim yapılacağından, viewport'u texture boyutlarına ayarlıyoruz.
                        webGL.viewport(0, 0, w, h);

                        // Framebuffer'ı temizliyoruz. Renk tamponunu (COLOR_BUFFER_BIT) sıfıra ayarlanmış renklerle dolduruyoruz.
                        webGL.clear(webGL.COLOR_BUFFER_BIT);

                        return {
                            texture: texture,
                            fbo: fbo,
                            width: w,
                            height: h,

                            /**
                             * Bu fonksiyon, verilen id numaralı texture birimine bu texture'ı bağlar.
                             * Böylece shader programlarındaki uniform sampler2D değişkenlerine atanabilir.
                             *
                             * @param {number} id
                             * @returns {number}
                             */
                            attach: function attach(id) {
                                webGL.activeTexture(webGL.TEXTURE0 + id);
                                webGL.bindTexture(webGL.TEXTURE_2D, texture);
                                return id;
                            },
                        };
                    }

                    /**
                     * resizeDoubleFBO fonksiyonu, double FBO yapısında (biri okuma (read), diğeri yazma (write) için olmak üzere iki adet FBO'dan oluşan yapı)
                     * boyut değişikliği yaparken kullanılır.
                     * Bu sayede simülasyon veya işlem gerektiren durumlarda çözünürlük, iç format veya filtreleme ayarlarını değiştirmek mümkün olur.
                     *
                     * @param {Object} target
                     * @param {number} w
                     * @param {number} h
                     * @param {GLenum} internalFormat - Texture oluşturulurken GPU'da kullanılacak dahili veri formatı. (Örneğin: gl.RGBA16F)
                     * @param {GLenum} format
                     * @param {GLenum} type
                     * @param {GLenum} param - Texture filtreleme parametresi. (Örneğin: gl.LINEAR veya gl.NEAREST)
                     *
                     * @returns {Object} Geriye boyutlandırılmış ve yeniden oluşturulmuş double FBO nesnesini döndürür.
                     */
                    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                        // resizeFBO, varolan bir FBO'nun içeriğini yeni boyutlara uyarlayarak (bir kopyalama işlemi yaparak)
                        // yeni FBO yaratır ve eski veriyi saklar.
                        target.read = resizeFBO(
                            target.read,
                            w,
                            h,
                            internalFormat,
                            format,
                            type,
                            param
                        );

                        // Ardından "write" FBO'yu baştan oluşturuyoruz.
                        // write FBO genelde boş bir FBO olarak oluşturulur.
                        // Yeni boyutlar ve formatlarla "createFBO" çağrılarak temiz bir canvas elde edilir.
                        target.write = createFBO(
                            w,
                            h,
                            internalFormat,
                            format,
                            type,
                            param
                        );

                        return target;
                    }


                    /**
                     * resizeFBO fonksiyonu, mevcut bir FBO'nun boyutlarını (w x h) değiştirip,
                     * yeni bir FBO oluşturarak eski FBO'daki veriyi kopyalar.
                     * Bu işlem, çözünürlüğün veya formatın değişmesi gerektiğinde kullanılır.
                     *
                     * @param {Object} target         - Boyutlandırılacak mevcut FBO nesnesi.
                     * @param {number} w
                     * @param {number} h
                     * @param {GLenum} internalFormat - GPU üzerinde kullanılacak dahili renk formatı. Örneğin: gl.RGBA16F
                     * @param {GLenum} format
                     * @param {GLenum} type
                     * @param {GLenum} param          - Texture filtreleme parametresi. Örneğin: gl.LINEAR veya gl.NEAREST
                     *
                     * @returns {Object} Oluşturulan yeni boyutlu FBO nesnesi.
                     */
                    function resizeFBO(
                        target,
                        w,
                        h,
                        internalFormat,
                        format,
                        type,
                        param
                    ) {

                        // Yeni boyutlar ve format bilgileriyle yepyeni bir FBO oluşturulur.
                        // Bu FBO henüz boş, herhangi bir veri içermiyor.
                        let newFBO = createFBO(w, h, internalFormat, format, type, param);

                        // clearProgram adlı özel bir shader programı bağlanarak kullanıma hazır hale getirilir.
                        // Bu program muhtemelen bir tekstürün içerdiği veriyi kopyalamak/temizlemek gibi bir iş yapıyor.
                        PROGRAMS.clearProgram.bind();

                        // clearProgram shader'ına uTexture adında bir uniform değişkenine 'target' (eski FBO) texture'ı bağlanıyor.
                        // target.attach(0), mevcut target FBO'nun texture'ını TEXTURE0 birimine atar ve shader'ın uTexture'u için kullanılır.
                        webGL.uniform1i(
                            PROGRAMS.clearProgram.uniforms.uTexture,
                            target.attach(0)
                        );

                        // clearProgram'a bir "value" uniform'u veriyoruz. Bu örnekte değer 1 veriliyor.
                        // Bu büyük olasılıkla kopyalama veya temizleme işlemi için bir çarpan ya da sabit değer olarak kullanılıyor.
                        webGL.uniform1f(PROGRAMS.clearProgram.uniforms.value, 1);

                        // blit fonksiyonu, kaynak FBO'daki veriyi hedef FBO'ya kopyalayan veya
                        // hedef FBO'ya çizim yapan bir yardımcı fonksiyon olarak düşünülebilir.
                        // Burada newFBO.fbo, hedef framebuffer olarak ayarlandı.
                        // Bu sayede eski FBO'nun verileri yeni boyutlu FBO'ya transfer edilir.
                        blit(newFBO.fbo);

                        // İşlemler tamamlandıktan sonra yeni boyutlandırılmış FBO geriye döndürülür.
                        // Artık newFBO, eski veriyi içeren, istenen boyutlarda ve formatta bir framebuffer'dır.
                        return newFBO;
                    }

                    /**
                     * createTextureAsync fonksiyonu, verilen bir URL'den bir görüntüyü asenkron olarak
                     * indirip bir WebGL texture nesnesi oluşturur. Başlangıçta 1x1 boyutunda beyaz bir
                     * piksel ile oluşturulur (geçici olarak). Görüntü yüklendiğinde, gerçek boyutlarıyla
                     * texture güncellenir.
                     *
                     * Bu yaklaşım, web sayfası yüklenirken henüz resim gelmemişken dahi
                     * bir placeholder (yer tutucu) texture kullanmanıza izin verir.
                     *
                     * @param {string} url - Yüklenecek görüntünün URL adresi.
                     * @returns {Object} obj - Texture nesnesini ve bazı yardımcı fonksiyonları içeren bir obje:
                     *   {
                     *     texture: WebGLTexture,   // Oluşturulmuş WebGL texture nesnesi.
                     *     width: number,           // Texture'ın genişliği (resim yüklendiğinde güncellenir).
                     *     height: number,          // Texture'ın yüksekliği (resim yüklendiğinde güncellenir).
                     *     attach: function(id): number // Bu texture'ı belirtilen texture birimine bağlar ve id'yi döndürür.
                     *   }
                     */
                    function createTextureAsync(url) {
                        // Yeni bir WebGL texture oluşturuluyor.
                        let texture = webGL.createTexture();
                        // Bu texture'ı aktif hale getirip, parametrelerini belirliyoruz.
                        webGL.bindTexture(webGL.TEXTURE_2D, texture);

                        // Texture filtreleme modları ayarlanıyor:
                        // TEXTURE_MIN_FILTER ve TEXTURE_MAG_FILTER, texture boyutları ekrana göre
                        // küçültülürken veya büyütülürken hangi filtrelemenin kullanılacağını belirler.
                        // Burada LINEAR filtreleme kullanılıyor.
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, webGL.LINEAR);
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, webGL.LINEAR);

                        // Sarmalama modları ayarlanıyor.
                        // TEXTURE_WRAP_S ve TEXTURE_WRAP_T, texture kenarlarının nasıl davranacağını belirler.
                        // REPEAT ile texture sınırdan çıktığında tekrar eder.
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.REPEAT);
                        webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.REPEAT);

                        // Henüz gerçek resmi yüklemedik. Bu nedenle, 1x1 boyutunda beyaz bir piksel koyarak
                        // texture'ı geçici olarak dolduruyoruz. Bu sayede shader'lar bu texture'a hemen erişebilir.
                        webGL.texImage2D(
                            webGL.TEXTURE_2D,
                            0,
                            webGL.RGB,
                            1,
                            1,
                            0,
                            webGL.RGB,
                            webGL.UNSIGNED_BYTE,
                            new Uint8Array([255, 255, 255]) // Beyaz renk (R=255,G=255,B=255)
                        );

                        // Texture bilgilerini ve attach fonksiyonunu içeren bir obje oluşturuyoruz.
                        let obj = {
                            texture: texture,
                            width: 1,   // Başlangıçta 1x1 boyutunda.
                            height: 1,
                            /**
                             * attach fonksiyonu, bu texture'ı belirtilen 'id' indeksli
                             * texture birimine bağlar. Böylece shader programlarında kullanabileceğimiz
                             * uniform sampler2D'lere atanabilir.
                             *
                             * @param {number} id
                             * @returns {number} id - Aynı id geri döndürülür, böylece shader'da gl.uniform1i ile kullanılabilir.
                             */
                            attach: function attach(id) {
                                webGL.activeTexture(webGL.TEXTURE0 + id);
                                webGL.bindTexture(webGL.TEXTURE_2D, texture);
                                return id;
                            },
                        };

                        // Asenkron resim yükleme işlemi başlatılıyor.
                        let image = new Image();
                        image.src = url;

                        // Resim yüklendiğinde (onload), gerçek boyutlar ve piksel verisi ile texture güncellenir.
                        image.onload = function () {
                            // Resmin orijinal genişlik ve yüksekliği obj'ye kaydediliyor.
                            obj.width = image.width;
                            obj.height = image.height;

                            // Texture tekrar bağlanarak gerçek resim data'sı ile yenileniyor.
                            webGL.bindTexture(webGL.TEXTURE_2D, texture);
                            webGL.texImage2D(
                                webGL.TEXTURE_2D,
                                0,
                                webGL.RGB,
                                webGL.RGB,
                                webGL.UNSIGNED_BYTE,
                                image
                            );
                            // Bu noktada texture artık gerçek resim verisine sahip.
                        };

                        // Resim henüz yüklenmemiş olsa bile obj'yi geri döndürüyoruz.
                        // Daha sonra onload tetiklendiğinde texture güncellenecek!!!
                        return obj;
                    }
                    function update() {
                        resizeCanvas();
                        input();
                        if (!PARAMS.paused) step(0.016);
                        render(null);
                        return requestAnimationFrame(update);
                    }

                    /**
                     * update fonksiyonu, her animasyon karesinde çağrılan temel döngüyü temsil eder.
                     * Bu fonksiyon, ekran boyutunu kontrol eder, kullanıcı girişi (input) işlemlerini yönetir,
                     * simülasyon adımlarını ilerletir ve sonunda sahneyi çizer. Ardından bir sonraki frame için
                     * tekrar kendini çağırır (requestAnimationFrame).
                     */
                    function update() {
                        // Canvas boyutunun güncel olup olmadığını kontrol eder, eğer pencere boyutu değiştiyse canvas'ı yeniden boyutlandırır.
                        resizeCanvas();

                        // Kullanıcıdan veya programdan gelen girişleri (mouse hareketleri, dokunma vb.) işler.
                        input();

                        // Eğer simülasyon duraklatılmadıysa, simülasyonun ilerlemesi için bir adım at.
                        // Burada sabit bir zaman adımı (0.016 sn, yani yaklaşık 60 FPS) verilmiş.
                        if (!PARAMS.paused) step(0.016);

                        // Sahneyi hedef olarak belirtilen yere (burada null, yani ekrana) çiz.
                        render(null);

                        // Bir sonraki frame'de update fonksiyonunu tekrar çağırarak animasyon döngüsünü sürdür.
                        return requestAnimationFrame(update);
                    }

                    /**
                     * input fonksiyonu, kullanıcının veya programın oluşturduğu giriş olaylarını (splat hareketleri)
                     * simülasyona uygular. Ayrıca belirli koşullarda renk değiştirme gibi ek davranışları yönetir.
                     */
                    function input() {
                        // SplatQueue (splatStack) içindeki birikmiş "splash" efektlerini uygular.
                        // Eğer stack'te birden fazla splat varsa, en son ekleneni alıp multipleSplats ile uygular.
                        if (splatStack.length > 0) multipleSplats(splatStack.pop());

                        // pointers, genellikle dokunma veya fare işaretçilerini temsil eden bir dizi.
                        // Her pointer hareket ettiyse, o hareketin yarattığı su efekti (splat) uygulanır.
                        for (let i = 0; i < pointers.length; i++) {
                            const p = pointers[i];
                            if (p.moved) {
                                // İşaretçi koordinatlarına, hız bileşenlerine ve rengine göre splat uygula.
                                splat(p.x, p.y, p.dx, p.dy, p.color);
                                // Splat uygulandıktan sonra hareket durumu sıfırlanır.
                                p.moved = false;
                            }
                        }

                        // Eğer multi_color özelliği devre dışıysa renklendirme değiştirme işlemini yapma.
                        if (!PARAMS.multi_color) return;

                        // Belirli bir zaman aralığı geçtikten sonra (en az 100ms), pointer renklerini değiştir.
                        // Burada lastColorChangeTime bir önceki renk değiştirme zamanını tutar.
                        if (lastColorChangeTime + 100 < Date.now()) {
                            lastColorChangeTime = Date.now();
                            // Tüm işaretçilerin rengini getComplementaryColor fonksiyonu kullanarak günceller.
                            for (let i = 0; i < pointers.length; i++) {
                                const p = pointers[i];
                                p.color = getComplementaryColor(getComplementaryColor());
                            }
                        }
                    }


                    /**
                     * step(dt) fonksiyonu, simülasyonun belirli bir zaman adımında (dt) ilerlemesini sağlar.
                     * Bu fonksiyon dumanının akışkan simülasyonuna ait matematiksel hesaplamaları webGL üzerinde
                     * gerçekleştiren gölgelendirici (shader) programlarını sırasıyla çalıştırır.
                     *
                     * Adımlar genel olarak:
                     * 1. Curl hesaplama (Vorticity = akışın dönme miktarı)
                     * 2. Vorticity kuvvetiyle hızı güncelleme
                     * 3. Divergence hesaplama (basınç çözümlenmesi için)
                     * 4. Dumanın Basınç dağılımının tekrar hesaplanması (pressure iteration)
                     * 5. Basınç gradyanının hız vektöründen çıkarılması (gradient subtract)
                     * 6. Advect işlemi (hız ve yoğunluğun akışı), yani duman sıvının hareketinin simülasyonu
                     *
                     * @param {number} dt - Zaman adımı, simülasyonu bu kadar süre ileri taşır.
                     */
                    function step(dt) {
                        // BLEND kapatılır, çünkü çizim işlemlerinde karışım gerekmeyebilir.
                        webGL.disable(webGL.BLEND);

                        // Simülasyonun hesaplamaları için çalışma alanı boyutu belirleniyor.
                        // İlk adımlar velocity, curl, pressure gibi düşük çözünürlüklü (simWidth x simHeight) tamponlarda yapılıyor.
                        webGL.viewport(0, 0, simWidth, simHeight);

                        // 1) CURL HESAPLAMA
                        // curlProgram: Hız alanının dönüşünü (curl) hesaplar.
                        PROGRAMS.curlProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.curlProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        // uVelocity'ye mevcut hız alanını (velocity.read) bağlıyoruz.
                        webGL.uniform1i(
                            PROGRAMS.curlProgram.uniforms.uVelocity,
                            velocity.read.attach(0)
                        );
                        // curl.fbo içerisine curl değerleri hesaplanıp yazılıyor.
                        blit(curl.fbo);

                        // 2) VORTICITY UYGULAMA
                        // vorticityProgram: Curl değerlerinden elde edilen kuvvetleri hız alanına uygular.
                        PROGRAMS.vorticityProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.vorticityProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        webGL.uniform1i(
                            PROGRAMS.vorticityProgram.uniforms.uVelocity,
                            velocity.read.attach(0)
                        );
                        webGL.uniform1i(
                            PROGRAMS.vorticityProgram.uniforms.uCurl,
                            curl.attach(1)
                        );
                        // 'curl' parametresi, akışın ne kadar kıvrılacağını kontrol eden bir katsayıdır.
                        webGL.uniform1f(
                            PROGRAMS.vorticityProgram.uniforms.curl,
                            PARAMS.curl
                        );
                        // Zaman adımı simülasyonun ne kadar ilerlediğini anlatır.
                        webGL.uniform1f(PROGRAMS.vorticityProgram.uniforms.dt, dt);
                        // Hız alanını güncelledikten sonra velocity.write'a yazılır ve read/write değiş-tokuş yapılır.
                        blit(velocity.write.fbo);
                        velocity.swap();

                        // 3) DIVERGENCE HESAPLAMA
                        // divergenceProgram: Hız alanının divergence değerini hesaplar, bu basınç çözümlemesi için gerekli.
                        PROGRAMS.divergenceProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.divergenceProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        webGL.uniform1i(
                            PROGRAMS.divergenceProgram.uniforms.uVelocity,
                            velocity.read.attach(0)
                        );
                        blit(divergence.fbo);

                        // 4) BASINÇ DAĞILIMI HESAPLAMA (Basınç çözümlenmesi - Gauss-Seidel iterasyonu)
                        // Önce pressure tamponunu temizle veya başlangıç değerine ayarla.
                        PROGRAMS.clearProgram.bind();
                        webGL.uniform1i(
                            PROGRAMS.clearProgram.uniforms.uTexture,
                            pressure.read.attach(0)
                        );
                        // PARAMS.pressure, basınç alanının ilk değerini ayarlamak için kullanılır.
                        webGL.uniform1f(
                            PROGRAMS.clearProgram.uniforms.value,
                            PARAMS.pressure
                        );
                        blit(pressure.write.fbo);
                        pressure.swap();

                        // pressureProgram: Divergence değerlerine göre basınç alanını iteratif olarak çözer.
                        PROGRAMS.pressureProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.pressureProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        webGL.uniform1i(
                            PROGRAMS.pressureProgram.uniforms.uDivergence,
                            divergence.attach(0)
                        );

                        // pressure_iteration sayısı kadar basınç alanı düzeltilir.
                        for (var i = 0; i < PARAMS.pressure_iteration; i++) {
                            webGL.uniform1i(
                                PROGRAMS.pressureProgram.uniforms.uPressure,
                                pressure.read.attach(1)
                            );
                            blit(pressure.write.fbo);
                            pressure.swap();
                        }

                        // 5) GRADIENT SUBTRACT
                        // gradientSubtractProgram: Hesaplanan basınç gradyanını hız alanından çıkararak
                        // akışkanın basınç dağılımını dengeler, böylece sıkışmazlık sağlanır.
                        PROGRAMS.gradientSubtractProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.gradientSubtractProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        webGL.uniform1i(
                            PROGRAMS.gradientSubtractProgram.uniforms.uPressure,
                            pressure.read.attach(0)
                        );
                        webGL.uniform1i(
                            PROGRAMS.gradientSubtractProgram.uniforms.uVelocity,
                            velocity.read.attach(1)
                        );
                        blit(velocity.write.fbo);
                        velocity.swap();

                        // 6) ADVECTION (Hız alanı için)
                        // advectionProgram: Hız alanını kendisine göre taşır (advect eder),
                        // böylece akışkan hareketi (hız dağılımı) zamanla değişir.
                        PROGRAMS.advectionProgram.bind();
                        webGL.uniform2f(
                            PROGRAMS.advectionProgram.uniforms.texelSize,
                            1.0 / simWidth,
                            1.0 / simHeight
                        );
                        // Eğer lineer filtreleme yoksa advection için farklı dyeTexelSize kullanılır.
                        if (!colorFormat.supportLinearFiltering)
                            webGL.uniform2f(
                                PROGRAMS.advectionProgram.uniforms.dyeTexelSize,
                                2.0 / simWidth,
                                2.0 / simHeight
                            );

                        let velocityId = velocity.read.attach(0);
                        webGL.uniform1i(
                            PROGRAMS.advectionProgram.uniforms.uVelocity,
                            velocityId
                        );
                        webGL.uniform1i(
                            PROGRAMS.advectionProgram.uniforms.uSource,
                            velocityId
                        );
                        webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dt, dt);
                        webGL.uniform1f(
                            PROGRAMS.advectionProgram.uniforms.dissipation,
                            PARAMS.velocity
                        );
                        blit(velocity.write.fbo);
                        velocity.swap();

                        // Şimdi boyutu dyeWidth, dyeHeight olan tampon için advection gerçekleştiriyoruz (yoğunluk alanı için).
                        webGL.viewport(0, 0, dyeWidth, dyeHeight);
                        if (!colorFormat.supportLinearFiltering)
                            webGL.uniform2f(
                                PROGRAMS.advectionProgram.uniforms.dyeTexelSize,
                                1.0 / dyeWidth,
                                1.0 / dyeHeight
                            );

                        // Hız alanı ve yoğunluk kaynak olarak bağlanır.
                        webGL.uniform1i(
                            PROGRAMS.advectionProgram.uniforms.uVelocity,
                            velocity.read.attach(0)
                        );
                        webGL.uniform1i(
                            PROGRAMS.advectionProgram.uniforms.uSource,
                            density.read.attach(1)
                        );
                        // dissipation, yoğunluğun zamanla sönümlenmesini kontrol eder.
                        webGL.uniform1f(
                            PROGRAMS.advectionProgram.uniforms.dissipation,
                            PARAMS.dissipation
                        );
                        blit(density.write.fbo);
                        density.swap();
                    }


                    /**
                     * render fonksiyonu, sahneyi (yoğunluk, renk, bloom efektleri vb.) ekrana veya belirtilen bir hedef framebuffer'a çizer.
                     * Bu fonksiyon simülasyonun anlık durumunu görsel olarak çıkartmak için kullanılır.
                     *
                     * @param {WebGLFramebuffer|null} target - Çizim yapılacak hedef framebuffer.
                     *                                         Eğer null ise doğrudan ekrana (canvas) çizim yapılır.
                     */
                    function render(target) {
                        // Eğer bloom efekti aktifse, önce density.read içerisindeki veriye bloom uygulanır.
                        // applyBloom fonksiyonu density readden okunan verileri bloom framebuffer'a çizer.
                        if (PARAMS.render_bloom) applyBloom(density.read, bloom);

                        // Çizim yapılacak hedef belirlendikten sonra, şeffaflık (transparent) durumu ve target'a göre
                        // karıştırma (blending) ayarlarını yapıyoruz.
                        if (target == null || !PARAMS.transparent) {
                            // Ekrana veya şeffaf olmayan bir arka plana çizim yapılıyorsa,
                            // src:1 ve dest:(1-src_alpha) ile alfa harmanlaması (blending) etkinleştirilir.
                            webGL.blendFunc(webGL.ONE, webGL.ONE_MINUS_SRC_ALPHA);
                            webGL.enable(webGL.BLEND);
                        } else {
                            // Şeffaf hedeflere çizim yapılırken blending kapatılabilir.
                            // Bu, örneğin texture'lar tamamen opak olarak hedef framebuffer'a basılacaksa yararlıdır.
                            webGL.disable(webGL.BLEND);
                        }

                        // Çizim yapılacak genişlik ve yükseklik değerleri belirleniyor.
                        // Eğer target null ise ekran boyutları kullanılır, değilse dyeWidth ve dyeHeight kullanılır.
                        let width = target == null ? webGL.drawingBufferWidth : dyeWidth;
                        let height = target == null ? webGL.drawingBufferHeight : dyeHeight;
                        webGL.viewport(0, 0, width, height);

                        // Eğer transparent devre dışıysa, önce bir arka plan rengi çizeriz.
                        // Bu sayede altındaki herhangi bir şey görünmez, tamamen opak bir arka plan elde ederiz.
                        if (!PARAMS.transparent) {
                            PROGRAMS.colorProgram.bind();
                            let bc = PARAMS.background_color;
                            // Arka plan rengi (0-255) aralığında olduğundan, shader'da kullanmak için [0,1] aralığına çeviriyoruz.
                            webGL.uniform4f(
                                PROGRAMS.colorProgram.uniforms.color,
                                bc.r / 255,
                                bc.g / 255,
                                bc.b / 255,
                                1
                            );
                            // blit fonksiyonu, geçerli shader programını kullanarak full-screen quad çizimi yapar.
                            // Böylece arka plan rengi hedef framebuffer'a basılır.
                            blit(target);
                        }

                        // Eğer target null (ekrana çiziyoruz) ve transparent ayarı aktifse,
                        // bir backgroundProgram çağrılır. Bu genelde özel bir arka plan efekti (örneğin gradient) oluşturabilir.
                        if (target == null && PARAMS.transparent) {
                            PROGRAMS.backgroundProgram.bind();
                            webGL.uniform1f(
                                PROGRAMS.backgroundProgram.uniforms.aspectRatio,
                                canvas.width / canvas.height
                            );
                            blit(null);
                        }

                        // Eğer render_shaders parametresi açıksa gölgelendirilmiş bir gösterim kullanılır,
                        // aksi halde basit bir display programıyla renkler doğrudan ekrana verilir.
                        if (PARAMS.render_shaders) {
                            // Bloom aktifse bloom'lu shading programı, değilse normal shading programı kullanılır.
                            var program = PARAMS.render_bloom
                                ? PROGRAMS.displayBloomShadingProgram
                                : PROGRAMS.displayShadingProgram;

                            program.bind();

                            // Texel boyutu shader'a verilerek kenarların normalizasyonu sağlanır.
                            webGL.uniform2f(
                                program.uniforms.texelSize,
                                1.0 / width,
                                1.0 / height
                            );

                            // Uygulanacak temel doku density.read'ten okunur ve uTexture uniform'una bağlanır.
                            webGL.uniform1i(
                                program.uniforms.uTexture,
                                density.read.attach(0)
                            );

                            // Eğer bloom efekti açıksa ilgili uniform'lar da ayarlanır.
                            if (PARAMS.render_bloom) {
                                webGL.uniform1i(program.uniforms.uBloom, bloom.attach(1));
                                webGL.uniform1i(
                                    program.uniforms.uDithering,
                                    ditheringTexture.attach(2)
                                );

                                // Dithering için texture ölçekleme faktörü hesaplanır ve shader'a verilir.
                                let scale = getTextureScale(ditheringTexture, width, height);
                                webGL.uniform2f(
                                    program.uniforms.ditherScale,
                                    scale.x,
                                    scale.y
                                );
                            }
                        } else {
                            // render_shaders kapalıysa basit display programlarını kullan.
                            let _program = PARAMS.render_bloom
                                ? PROGRAMS.displayBloomProgram
                                : PROGRAMS.displayProgram;

                            _program.bind();

                            // Yine temel doku density.read'ten alınarak uTexture'e atanır.
                            webGL.uniform1i(
                                _program.uniforms.uTexture,
                                density.read.attach(0)
                            );

                            if (PARAMS.render_bloom) {
                                // Bloom aktifse bloom texture ve dithering yine ayarlanır.
                                webGL.uniform1i(_program.uniforms.uBloom, bloom.attach(1));
                                webGL.uniform1i(
                                    _program.uniforms.uDithering,
                                    ditheringTexture.attach(2)
                                );

                                let _scale = getTextureScale(ditheringTexture, width, height);
                                webGL.uniform2f(
                                    _program.uniforms.ditherScale,
                                    _scale.x,
                                    _scale.y
                                );
                            }
                        }

                        // Son olarak tüm ayarlar yapıldıktan sonra target'a bir full-screen quad çizilir (blit).
                        // Bu sayede density/bloom verileri son halini alır ve ekrana veya hedef framebuffer'a işlenir.
                        blit(target);
                    }


                    /**
                     * applyBloom fonksiyonu, sahnede elde edilen yoğunluk (color/density) verisini kullanarak bloom efektini uygular.
                     * Bloom efekti, parlak noktaların etrafında bir ışık halesi veya parıltı oluşturan bir post-processing tekniğidir.
                     *
                     * Aşağıdaki adımlar uygulanır:
                     * 1. Pre-filtering: Parlak kısımları eşik değere göre ayrıştırma.
                     * 2. Blur: Bu parlak kısımların tekrar tekrar küçültülerek bulanıklaştırılması.
                     * 3. Merge: Küçültülmüş ve bulanıklaştırılmış değerlerin geri büyütülerek orijinal boyutta birleştirilmesi.
                     * 4. Final intensity: Sonuç değeri orijinal sahne ile harmanlanarak bloom etkisi oluşturulur.
                     *
                     * @param {Object} source      - Bloom efektinin uygulanacağı kaynak texture (ör. density.read gibi).
                     * @param {Object} destination - Bloom efektinin nihai olarak yazılacağı hedef framebuffer.
                     */
                    function applyBloom(source, destination) {
                        // En az 2 bloom buffer gereklidir, yoksa işlem yapılamaz.
                        if (bloomFrameBuffers.length < 2) return;

                        // Son aşamada kullanacağımız 'last' değişkeni,
                        // başlangıçta tüm işlemlerin sonucunu aktaracağımız "destination" framebuffer'ı işaret eder.
                        let last = destination;

                        // İlk olarak BLEND (karıştırma) kapatılıyor çünkü henüz basit bir kopyalama/filtreleme yapacağız.
                        webGL.disable(webGL.BLEND);

                        // PreFilter aşaması: Bloom için gerekli parlak kısımları ayrıştırır.
                        PROGRAMS.bloomPreFilterProgram.bind();

                        // soft_knee ve threshold değerlerinden, parlak piksel eğrisi hesaplanır:
                        let knee = PARAMS.threshold * PARAMS.soft_knee + 0.0001;
                        let curve0 = PARAMS.threshold - knee;
                        let curve1 = knee * 2;
                        let curve2 = 0.25 / knee;

                        // Bloom pre-filter shaderına elde edilen eğri parametreleri verilir.
                        webGL.uniform3f(
                            PROGRAMS.bloomPreFilterProgram.uniforms.curve,
                            curve0,
                            curve1,
                            curve2
                        );
                        webGL.uniform1f(
                            PROGRAMS.bloomPreFilterProgram.uniforms.threshold,
                            PARAMS.threshold
                        );

                        // Kaynak texture'u uTexture'a bağlıyoruz, shader bu veriyi işleyecek.
                        webGL.uniform1i(
                            PROGRAMS.bloomPreFilterProgram.uniforms.uTexture,
                            source.attach(0)
                        );

                        // Viewport'u hedef framebuffer boyutuna ayarla ve pre-filter sonucu 'last' framebufferına çiz.
                        webGL.viewport(0, 0, last.width, last.height);
                        blit(last.fbo);

                        // Şimdi bloomBlurProgram ile tekrar tekrar bulanıklaştırma adımına geçeceğiz.
                        PROGRAMS.bloomBlurProgram.bind();

                        // displayShadingProgram ile bazı ekstra aydınlatma parametreleri girilmiş.
                        // Bu kısım opsiyoneldir, bloom'a ek bir shading (aydınlatma) efekti ekleniyorsa kullanılır.
                        PROGRAMS.displayShadingProgram.bind();
                        webGL.uniform3f(
                            PROGRAMS.displayShadingProgram.uniforms.lightDirection,
                            0.0, 0.0, 1.0 // Işık yönü (Z ekseninde yukarıdan aydınlatma)
                        );
                        webGL.uniform3f(
                            PROGRAMS.displayShadingProgram.uniforms.lightColor,
                            1.0, 1.0, 1.0 // Beyaz ışık
                        );
                        webGL.uniform1f(
                            PROGRAMS.displayShadingProgram.uniforms.shininess,
                            32.0 // Parlaklık faktörü
                        );

                        // Bloom'u aşama aşama daha küçük buffer'lara doğru downsample ederek bulanıklaştırırız.
                        for (var i = 0; i < bloomFrameBuffers.length; i++) {
                            var dest = bloomFrameBuffers[i];
                            // texelSize: bulanıklaştırma işlemi için piksel boyutu.
                            webGL.uniform2f(
                                PROGRAMS.bloomBlurProgram.uniforms.texelSize,
                                1.0 / last.width,
                                1.0 / last.height
                            );

                            // Son elde edilen buffer'ı giriş olarak veriyoruz.
                            webGL.uniform1i(
                                PROGRAMS.bloomBlurProgram.uniforms.uTexture,
                                last.attach(0)
                            );

                            // Daha küçük bir buffer'a çizim yaparak boyutu düşürüp, yatay/dikey blur uygularız.
                            webGL.viewport(0, 0, dest.width, dest.height);
                            blit(dest.fbo);

                            // Sonuç dest'e kaydedildi, şimdi last'ı dest olarak güncelliyoruz.
                            last = dest;
                        }

                        // Şimdi elde edilen bulanıklaştırılmış texture'ları tekrar toplayıp büyüterek final sonuca getireceğiz.
                        // Bunun için BLEND etkinleştirilir ve ekleme (additive blending) kullanılır.
                        webGL.blendFunc(webGL.ONE, webGL.ONE);
                        webGL.enable(webGL.BLEND);

                        // Küçük buffer'lardan büyük buffer'lara doğru geri giderek sonuçları topluyoruz.
                        for (let i = bloomFrameBuffers.length - 2; i >= 0; i--) {
                            let baseTex = bloomFrameBuffers[i];
                            webGL.uniform2f(
                                PROGRAMS.bloomBlurProgram.uniforms.texelSize,
                                1.0 / last.width,
                                1.0 / last.height
                            );
                            webGL.uniform1i(
                                PROGRAMS.bloomBlurProgram.uniforms.uTexture,
                                last.attach(0)
                            );
                            webGL.viewport(0, 0, baseTex.width, baseTex.height);
                            blit(baseTex.fbo);
                            last = baseTex;
                        }

                        // Tüm blur katmanları toplandıktan sonra BLEND tekrar kapatılır.
                        webGL.disable(webGL.BLEND);

                        // Son olarak bloomFinalProgram devreye girer.
                        // Bu program, elde edilen bloom verisini orijinal sahne ile harmanlar ve intensity'ye göre güçlendirir.
                        PROGRAMS.bloomFinalProgram.bind();

                        // Final boyut ölçeği ve intensity parametreleri ayarlanır.
                        webGL.uniform2f(
                            PROGRAMS.bloomFinalProgram.uniforms.texelSize,
                            2.0 / last.width,
                            2.0 / last.height
                        );
                        webGL.uniform1i(
                            PROGRAMS.bloomFinalProgram.uniforms.uTexture,
                            last.attach(0)
                        );
                        webGL.uniform1f(
                            PROGRAMS.bloomFinalProgram.uniforms.intensity,
                            PARAMS.intensity
                        );

                        // Sonuç değerini destination framebuffer'a çizeriz.
                        webGL.viewport(0, 0, destination.width, destination.height);
                        blit(destination.fbo);
                    }

                    /**
                     * splat fonksiyonu, simülasyon alanına bir "damla" ya da "sıçrama" etkisi uygular.
                     * Bu sayede sıvının hız (velocity) ve yoğunluk (density) dağılımları belirli bir noktadan etrafa yayılır.
                     *
                     * Bu etki, suya bir damla bırakıldığında oluşan dalgaya benzer.
                     *
                     * @param {number} x - Ekrandaki splat noktasının x koordinatı (piksel cinsinden).
                     * @param {number} y - Ekrandaki splat noktasının y koordinatı (piksel cinsinden).
                     * @param {number} dx - Sıçramaya eklenecek hızın x bileşeni.
                     * @param {number} dy - Sıçramaya eklenecek hızın y bileşeni.
                     * @param {object} color - Sıçrama rengi (r, g, b değerleri 0.0-1.0 aralığında).
                     */
                    function splat(x, y, dx, dy, color) {
                        // İlk adım: Velocity (hız) alanına splat uyguluyoruz.
                        // Simülasyonun hız tamponunun çözünürlüğünde çizim yapmak için viewport ayarlanır.
                        webGL.viewport(0, 0, simWidth, simHeight);

                        // splatProgram: Belirli bir noktada Gaussian dağılımı şeklinde hız veya yoğunluk ekleyen shader programı.
                        PROGRAMS.splatProgram.bind();

                        // Hedef olarak velocity.read'i kullanıyoruz. Buradaki velocity tamponuna yeni hız ekleyeceğiz.
                        webGL.uniform1i(
                            PROGRAMS.splatProgram.uniforms.uTarget,
                            velocity.read.attach(0)
                        );

                        // aspectRatio: Düşen damlacığın şeklini bozulmadan doğru şekilde hesaplayabilmek için en-boy oranı kullanılır.
                        webGL.uniform1f(
                            PROGRAMS.splatProgram.uniforms.aspectRatio,
                            canvas.width / canvas.height
                        );

                        // point: Splatin eklenmek istendiği nokta. Normalleştirilmiş koordinat (0.0 - 1.0) aralığına çevrilir.
                        // x / canvas.width ve 1.0 - y / canvas.height ile ekran koordinatları normalize edilir.
                        webGL.uniform2f(
                            PROGRAMS.splatProgram.uniforms.point,
                            x / canvas.width,
                            1.0 - y / canvas.height
                        );

                        // color: Splat ile eklenen hızın yönü ve şiddeti. Burada dx ve dy hız bileşenlerini temsil eder,
                        // ayrıca sabit bir parlaklık/yoğunluk değeri kullanılır (1.0).
                        // Dikkat: y bileşeni -dy yapılıyor, çünkü ekranda y yukarıdan aşağı artarken simülasyon farklı eksenlerde olabilir.
                        webGL.uniform3f(
                            PROGRAMS.splatProgram.uniforms.color,
                            dx,
                            -dy,
                            1.0
                        );

                        // radius: Splatın etki alanı. Burada emitter_size parametresi 100'e bölünerek küçük bir etki alanı yaratılır.
                        webGL.uniform1f(
                            PROGRAMS.splatProgram.uniforms.radius,
                            PARAMS.emitter_size / 100.0
                        );

                        // velocity.write fbo'suna çizim yapılır, sonra read/write değiştirilir.
                        blit(velocity.write.fbo);
                        velocity.swap();

                        // İkinci adım: Density (yoğunluk) alanına splat uygula.
                        // Bu kez daha büyük çözünürlüklü boyama alanı (dyeWidth x dyeHeight) kullanılır.
                        webGL.viewport(0, 0, dyeWidth, dyeHeight);
                        webGL.uniform1i(
                            PROGRAMS.splatProgram.uniforms.uTarget,
                            density.read.attach(0)
                        );

                        // Density için kullanılan renk, generateColorHSV() ve getComplementaryColor() ile dinamik olarak belirlenir.
                        // Burada color değişkeni yeniden atanarak yeni bir renk elde ediliyor.
                        color = getComplementaryColor(generateColorHSV());
                        webGL.uniform3f(
                            PROGRAMS.splatProgram.uniforms.color,
                            color.r,
                            color.g,
                            color.b
                        );

                        // Density'ye de splat uygulanır.
                        blit(density.write.fbo);
                        density.swap();
                    }

                    /**
                     * multipleSplats fonksiyonu, belirtilen sayıda ardışık splat uygular.
                     * Bu toplu işlemler, ekranda birden fazla damla efektinin aynı anda oluşmasına olanak tanır.
                     *
                     * @param {number} amount - Uygulanacak splat sayısı.
                     */
                    function multipleSplats(amount) {
                        for (let i = 0; i < amount; i++) {
                            // Her bir splat için bir renk oluşturuluyor ve sabit bir konuma (500,500)
                            // sabit hızla (100,0) splat basılıyor.
                            const color = getComplementaryColor(generateColorHSV());
                            splat(500, 500, 100, 0, color);
                        }
                    }

                    /**
                     * resizeCanvas fonksiyonu, eğer canvas boyutları tarayıcı penceresi veya
                     * container boyutlarıyla eşleşmiyorsa canvas'ı yeniden boyutlandırır.
                     * Bu, pencere boyutu değiştiğinde simülasyon alanının da güncellenmesini sağlar.
                     */
                    function resizeCanvas() {
                        // Eğer canvas'ın mevcut genişliği/yüksekliği,
                        // HTML elemanının clientWidth/clientHeight'inden farklıysa tekrar boyutlandır.
                        if (
                            canvas.width !== canvas.clientWidth ||
                            canvas.height !== canvas.clientHeight
                        ) {
                            canvas.width = canvas.clientWidth;
                            canvas.height = canvas.clientHeight;
                            // Boyut değiştiğinde simülasyon parametrelerini yeniden ayarlamak için init fonksiyonu çağrılır.
                            init();
                        }
                    }
                    /**
                     * Rastgele bir HSV rengi üretir.
                     *
                     * @returns {{h: number, s: number, v: number}} HSV renk bileşenleri (h, s, v)
                     *   h: Hue (0.0 - 1.0 aralığında, 1.0=360 derece)
                     *   s: Saturation (0.0 - 2.0 aralığında, bu örnekte doyurulmuş renkler kullanılıyor)
                     *   v: Value (0.5 - 1.0 aralığında, yani renkler genelde parlak)
                     */
                    function generateColorHSV() {
                        let h = Math.random();  // Hue için 0-1 arası rastgele değer, 0 ve 1 aynı renge (kırmızı) denk gelir
                        let s = 2.0;            // Saturation normalde 0-1 aralığına sığar, burada 2.0 ile aşırı doygun renkler tercih ediliyor
                        let v = Math.random() * 0.5 + 0.5; // 0.5 ile 1.0 arasında parlaklık seçimi
                        return { h, s, v };
                    }

                    /**
                     * Verilen bir HSV renginin tamamlayıcı (complementary) HSV değerlerini hesaplar.
                     *
                     * Tamamlayıcı renk, renk tekerinde 180 derece zıt konumda olan renktir.
                     *
                     * @param {{h: number, s: number, v: number}} hsv - HSV renk nesnesi
                     * @returns {{h: number, s: number, v: number}} Complementary HSV rengi
                     */
                    function getComplementaryHSV(hsv) {
                        // hue'yu derecelere çevirerek 180 derece ekliyoruz, sonra tekrar mod 360 alarak çember üzerinde kalıyoruz.
                        let complementaryHue = (hsv.h * 360 + 180) % 360;
                        // s ve v değerleri aynı kalır.
                        return { h: complementaryHue, s: hsv.s, v: hsv.v };
                    }

                    /**
                     * HSV'yi RGB renk uzayına çevirir.
                     * Bu, renklerin ekranda kullanılabilir hale gelmesi için gereklidir.
                     *
                     * @param {number} h - Hue (0 - 360 derece arası)
                     * @param {number} s - Saturation (0 - 1 arası)
                     * @param {number} v - Value (0 - 1 arası)
                     * @returns {{r: number, g: number, b: number}} RGB renk bileşenleri (0 - 1 aralığında)
                     */
                    function HSVtoRGB(h, s, v) {
                        let r, g, b;
                        // i: Hue'nun 6 ana renkten hangisine yakın olduğunu bulmak için kullanılır.
                        let i = Math.floor(h * 6);
                        let f = h * 6 - i;       // Kesirli kısım
                        let p = v * (1 - s);     // S doygunluğuna göre parlaklığı azaltan yardımcı değerler
                        let q = v * (1 - f * s);
                        let t = v * (1 - (1 - f) * s);

                        // switch içinde hue'nun konumuna göre rgb değerleri hesaplanır.
                        // Bu standart bir HSV -> RGB dönüşüm algoritmasıdır.
                        switch (i % 6) {
                            case 0:
                                r = v; g = t; b = p;
                                break;
                            case 1:
                                r = q; g = v; b = p;
                                break;
                            case 2:
                                r = p; g = v; b = t;
                                break;
                            case 3:
                                r = p; g = q; b = v;
                                break;
                            case 4:
                                r = t; g = p; b = v;
                                break;
                            case 5:
                                r = v; g = p; b = q;
                                break;
                        }

                        return { r, g, b };
                    }

                    /**
                     * Verilen HSV rengi için tamamlayıcı (complementary) rengi hesaplar ve sonunda RGB olarak döndürür.
                     * Ayrıca sonuç renge belirli oranlarda azaltma uygulanarak renk parlaklığı ve doygunluğunda değişiklik yapılır.
                     *
                     * @param {{h: number, s: number, v: number}} hsv - HSV renk nesnesi (isteğe bağlı)
                     * @returns {{r: number, g: number, b: number}|null} RGB renk objesi veya hsv null ise null döner.
                     */
                    function getComplementaryColor(hsv) {
                        if (!hsv) return null;

                        // HSV değerinin tamamlayıcı rengini elde et.
                        let complementaryHSV = getComplementaryHSV(hsv);

                        // Complementary HSV rengini RGB uzayına çevir.
                        let rgb = HSVtoRGB(complementaryHSV.h, complementaryHSV.s, complementaryHSV.v);

                        // Şimdilik sabit bir çarpanla çarparak renkleri biraz solgunlaştırıyoruz.
                        rgb.r *= 0.59317844;
                        rgb.g *= 0.59317843;
                        rgb.b *= 0.59317840;

                        return rgb;
                    }


                    /**
                     * calculateDistance fonksiyonu, iki nokta arasındaki öklid mesafesini hesaplar.
                     * Bu, 2B düzlemdeki (x1,y1) ve (x2,y2) koordinatları arasındaki doğrudan uzaklığı verir.
                     *
                     * Mesafe formülü:
                     * distance = √((x2 - x1)² + (y2 - y1)²)
                     *
                     * @param {number} x1 - İlk noktanın x koordinatı.
                     * @param {number} y1 - İlk noktanın y koordinatı.
                     * @param {number} x2 - İkinci noktanın x koordinatı.
                     * @param {number} y2 - İkinci noktanın y koordinatı.
                     * @returns {number} İki nokta arasındaki mesafe.
                     */
                    function calculateDistance(x1, y1, x2, y2) {
                        // Doğru denklemine göre distance ayarlıyoruz.
                        // Kısacası Basit bir öklid mesafe hesabı yapılıyor.
                        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                    }

                    /**
                     * getValidPosition fonksiyonu, belirtilen bir minimum mesafeye (minDistance) saygı göstererek,
                     * mevcut "firework" noktalarından çok yakın olmayan rastgele bir konum bulur.
                     *
                     * Kullanım senaryosu:
                     *   Örneğin, ekranda halihazırda çizilmiş baloncuklar ya da havai fişek efektleri var.
                     *   Yeni bir baloncuk eklerken, var olanlara çok yakın olmaması için bir minimum mesafe şartı koyarız.
                     *   Bu fonksiyon rastgele koordinatlar seçer, eğer çok yakında başka bir baloncuk varsa tekrar dener.
                     *   Belirlenen maksimum deneme sayısı (maxAppend) aşıldığında, yine de son bulduğu noktayı döndürür.
                     *
                     * @param {Array} existingFireworks - Zaten var olan 'firework' objelerini içeren bir dizi.
                     *                                    Her bir 'firework' objesi en azından {x, y} koordinatlarını içermelidir.
                     * @param {number} minDistance - Yeni noktanın diğer tüm noktalarla arasında bulunması gereken minimum mesafe.
                     * @param {number} canvasWidth - Koordinatın seçileceği alanın genişliği.
                     * @param {number} canvasHeight - Koordinatın seçileceği alanın yüksekliği.
                     * @returns {{x: number, y: number}} Bulunan geçerli (x,y) koordinatı.
                     */
                    function getValidPosition(existingFireworks, minDistance, canvasWidth, canvasHeight) {
                        let x, y, isValid;
                        const maxAppend = 10; // Rastgele noktalar seçerken en fazla 10 deneme yapılacak.
                        let appends = 0;

                        do {
                            // Rastgele bir nokta seç:
                            x = Math.random() * canvasWidth;
                            y = Math.random() * canvasHeight;
                            isValid = true; // Başlangıçta bu noktanın geçerli olduğunu varsay.

                            // Seçilen noktanın var olan her firework noktasından yeterince uzak olup olmadığını kontrol et.
                            for (let i = 0; i < existingFireworks.length; i++) {
                                const firework = existingFireworks[i];
                                const distance = calculateDistance(x, y, firework.x, firework.y);
                                // Eğer mesafe minimum mesafeden küçükse, bu nokta geçersizdir.
                                if (distance < minDistance) {
                                    isValid = false;
                                    break;
                                }
                            }

                            appends++;
                            // Eğer çok fazla deneme yaparsak (appends > maxAppend), döngüden çık.
                            // Bu durumda bulabildiğimiz son noktayı kullanıyoruz.
                            if (appends > maxAppend) {
                                break;
                            }
                        } while (!isValid);

                        // Sonuç olarak geçerli olduğu kabul edilen bir (x,y) döndür.
                        return { x, y };
                    }

                    /**
                     * StartBaloon fonksiyonu, belirli bir süre boyunca (duration), belirli aralıklarla (interval)
                     * ekranda baloncuk etkisi yaratır. Bu baloncuklar, ekranda rastgele konumlarda oluşturulur ve
                     * her biri LaunchBalloon ile patlama efekti yaratır.
                     *
                     * @param {number} duration - Balon oluşturma süresi (ms). Bu süre dolana kadar sürekli balon üretilecek.
                     * @param {number} interval - Her bir balonun ne sıklıkla oluşturulacağını belirler (ms).
                     * @param {number} minDistance - Yeni baloncuk eklerken diğer baloncuk noktalarına olan minimum mesafe.
                     */
                    function StartBaloon(duration = 4000, interval = 500, minDistance = 100) {
                        const startTime = Date.now();
                        const existingBaloon = [];

                        // Düzenli aralıklarla baloncuk oluşturan zamanlayıcı.
                        const BaloonInterval = setInterval(() => {
                            const elapsed = Date.now() - startTime;
                            // Süre dolmuşsa üretimi durdurur.
                            if (elapsed > duration) {
                                clearInterval(BaloonInterval);
                                return;
                            }

                            // Rastgele bir konum bul, ancak diğer balonlardan minDistance kadar uzakta olmalı.
                            const { x, y } = getValidPosition(existingBaloon, minDistance, canvas.width, canvas.height);
                            existingBaloon.push({ x, y });

                            // Patlama particule sayısı (numParticles) ve hız (speed) rastgele seçilir.
                            const numParticles = Math.floor(Math.random() * 50) + 200; // 200 ile 250 arası partikül sayısı
                            const speed = Math.random() * 2 + 3; // Hız aralığı 3 ile 5 arasında

                            // Belirlenen noktada bir balon patlaması başlatır.
                            LaunchBalloon(x, y, numParticles, speed);
                        }, interval);
                    }

                    /**
                     * getResolution fonksiyonu, belirtilen bir temel çözünürlük değerini (resolution)
                     * ekranın en-boy oranına (aspectRatio) göre uyarlayarak bir çözünürlük nesnesi döndürür.
                     * Bu, farklı ekran boyutlarına uyum sağlamak için kullanılır.
                     *
                     * @param {number} resolution - Temel alınacak çözünürlük değeri.
                     * @returns {{width: number, height: number}} En-boy oranına göre uyarlanmış çözünürlük.
                     */
                    function getResolution(resolution) {
                        let aspectRatio = webGL.drawingBufferWidth / webGL.drawingBufferHeight;
                        if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;

                        // aspectRatio'ya göre genişlik ve yükseklik hesapla.
                        let max = Math.round(resolution * aspectRatio);
                        let min = Math.round(resolution);

                        // Ekranın yatay mı dikey mi daha geniş olduğuna göre width/height değerlerini ayarla.
                        if (webGL.drawingBufferWidth > webGL.drawingBufferHeight)
                            return {
                                width: max,
                                height: min,
                            };
                        else
                            return {
                                width: min,
                                height: max,
                            };
                    }

                    /**
                     * getResolution fonksiyonu, belirtilen bir temel çözünürlük değerini (resolution)
                     * ekranın en-boy oranına (aspectRatio) göre uyarlayarak bir çözünürlük nesnesi döndürür.
                     * Bu, farklı ekran boyutlarına uyum sağlamak için kullanılır.
                     *
                     * @param {number} resolution - Temel alınacak çözünürlük değeri.
                     * @returns {{width: number, height: number}} En-boy oranına göre uyarlanmış çözünürlük.
                     */
                    function getResolution(resolution) {
                        let aspectRatio = webGL.drawingBufferWidth / webGL.drawingBufferHeight;
                        if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;

                        // aspectRatio'ya göre genişlik ve yükseklik hesapla.
                        let max = Math.round(resolution * aspectRatio);
                        let min = Math.round(resolution);

                        // Ekranın yatay mı dikey mi daha geniş olduğuna göre width/height değerlerini ayarla.
                        if (webGL.drawingBufferWidth > webGL.drawingBufferHeight)
                            return {
                                width: max,
                                height: min,
                            };
                        else
                            return {
                                width: min,
                                height: max,
                            };
                    }
                    canvas.addEventListener("mousemove", (e) => {
                        if (pointers.length > 0) {
                            const p = pointers[0];
                            p.moved = true;
                            const rect = canvas.getBoundingClientRect();
                            p.dx = (e.clientX - rect.left - p.x) * 5.0;
                            p.dy = (e.clientY - rect.top - p.y) * 5.0;
                            p.x = e.clientX - rect.left;
                            p.y = e.clientY - rect.top;
                            if (typeof splat === 'function') {
                                splat(p.x, p.y, p.dx, p.dy);
                            }
                        }
                    });
                }
                /**
                 *
                 *
                 *
                 * @param url
                 */

                function setDitherURL(url) {
                    ditherURL = url;
                }

                const GLProgram =
                    /*#__PURE__*/
                    (function () {
                        function GLProgram(vertexShader, fragmentShader, webGL) {
                            _classCallCheck(this, GLProgram);

                            this.uniforms = {};
                            this.webGL = webGL;
                            this.program = webGL.createProgram();
                            webGL.attachShader(this.program, vertexShader);
                            webGL.attachShader(this.program, fragmentShader);
                            webGL.linkProgram(this.program);
                            if (!webGL.getProgramParameter(this.program, webGL.LINK_STATUS))
                                throw webGL.getProgramInfoLog(this.program);
                            let uniformCount = webGL.getProgramParameter(
                                this.program,
                                webGL.ACTIVE_UNIFORMS
                            );

                            for (let i = 0; i < uniformCount; i++) {
                                let uniformName = webGL.getActiveUniform(
                                    this.program,
                                    i
                                ).name;
                                this.uniforms[uniformName] = webGL.getUniformLocation(
                                    this.program,
                                    uniformName
                                );
                            }
                        }
                        _createClass(GLProgram, [
                            {
                                key: "bind",
                                value: function bind() {
                                    this.webGL.useProgram(this.program);
                                },
                            },
                        ]);
                        return GLProgram;
                    })();

                let Pointer = function Pointer() {
                    _classCallCheck(this, Pointer);
                    /**
                     *
                     *  @type {number} geçerli kimlikler her zaman sıfırdır veya pozitif bir tam sayıdır. ( -1 geçersizdir ve olmalıdır. Yeni bir işaretçi nesnesi oluşturulduğunda yönetilebilir.)
                     *
                     */
                    /** İşaretçinin yatay (x) ve dikey (y) konumu
                     *
                     *  @type {number}
                     */
                    this.x = 0;
                    this.y = 0;
                    /** Yatay (x) ve dikey (y) eksendeki konumsal değişimi tanımlayan hız verileri statik olarak!
                     *
                     *
                     * @type {number}
                     */
                    this.dx = 0;
                    this.dy = 0;
                    /** İşaretçinin tıklanmış durumda olup olmadığını ve/veya hareket halinde olup olmadığını depolamak için kullanılan Boolean veri üyesi
                     *
                     *
                     *  @type {boolean}
                     */
                    this.moved = false;
                    /** İşaretçinin göstereceği renk!!
                     *
                     * @type {number[]}
                     */
                    this.color = [30, 0, 255];
                };

            },
        }
    );
});