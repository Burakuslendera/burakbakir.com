#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uCenter;
uniform float uRadius;
uniform vec3 uColor;
uniform float uFeather;
uniform vec2 uResolution;

void main () {
    vec2 fragCoord = vec2(gl_FragCoord.x, gl_FragCoord.y);
    float dist = distance(fragCoord, uCenter);
    float alpha = 1.0 - smoothstep(uRadius - uFeather, uRadius, dist);
    gl_FragColor = vec4(uColor, alpha);
}