#ifdef GL_ES
precision mediump float;
#endif

// Balonun merkezi, piksel cinsinden (ör. (x=400, y=300))
uniform vec2 uCenter;

// Balon yarıçapı (piksel cinsinden)
uniform float uRadius;

// Balonun rengi (RGB, [0..1] aralığında)
uniform vec3 uColor;

// Dış kenardaki bulanık geçiş genişliği (kenar yumuşatma için)
uniform float uFeather;

// Ekranın/çizim alanının boyutu (piksel cinsinden)
uniform vec2 uResolution;

void main () {
    // gl_FragCoord.xy ekranda bu piksele denk gelen koordinattır (0,0) sol-alt köşede
    // ama bazen WebGL’de (0,0) sol-alt değil üst- sol da olabilir. Projeye göre ayarlayabilirsiniz.
    // Örneğin, ekranda y ekseni ters ise gl_FragCoord.y yerine (uResolution.y - gl_FragCoord.y) kullanabilirsiniz.
    vec2 fragCoord = vec2(gl_FragCoord.x, gl_FragCoord.y);

    // Pikselin balon merkezine uzaklığını hesapla
    float dist = distance(fragCoord, uCenter);

    // Balonun dairesel alanına göre alfa değeri hesapla:
    //  - dist < uRadius   => alfa yüksek (iç kısım)
    //  - dist ~ uRadius   => alfa düşmeye başlar (kenar)
    //  - dist > uRadius + uFeather => alfa 0
    //
    // smoothstep(edge0, edge1, x) = 0..1 arasında yumuşak geçiş
    // Balonun kenarında yumuşak bir geçiş (feather) elde etmek için:
    float alpha = 1.0 - smoothstep(uRadius - uFeather, uRadius, dist);

    // Rengi yarı saydam şekilde çıkışa yaz
    gl_FragColor = vec4(uColor, alpha);
}