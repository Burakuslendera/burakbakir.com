#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uCenter;
uniform float uRadius;
uniform vec3 uBaseColor;
uniform float uFeather;
uniform vec2 uResolution;
uniform vec3 uLightDirection;

void main () {
    vec2 fragCoord = gl_FragCoord.xy / uResolution;
    vec2 normalizedCoord = fragCoord - vec2(0.5);
    float dist = distance(fragCoord * uResolution, uCenter);
    float edgeAlpha = 1.0 - smoothstep(uRadius - uFeather, uRadius, dist);
    vec3 normalizedLightDir = normalize(uLightDirection);
    vec3 fragCoord3D = vec3(normalizedCoord, 0.0);
    float lightIntensity = max(dot(normalize(fragCoord3D), normalizedLightDir), 0.0);
    vec3 highlightColor = vec3(1.0, 1.0, 1.0) * lightIntensity;
    vec3 color = mix(uBaseColor, highlightColor, lightIntensity * 0.5);
    float alpha = 0.2 + edgeAlpha * 0.8;
    gl_FragColor = vec4(color, alpha);
}