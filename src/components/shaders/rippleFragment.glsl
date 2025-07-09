uniform sampler2D uImage;
uniform vec2 uMouse;
uniform float uTime;
uniform float uIsHovering;
varying vec2 vUv;

void main() {
  vec2 rippleCenter = uMouse; // Ripple mouse ke center se start hoga
  float dist = distance(vUv, rippleCenter);

  // Ripple strength aur radius adjust kar
  float rippleStrength = uIsHovering * smoothstep(0.5, 0.0, dist);
  float ripple = rippleStrength * 0.05 * sin(10.0 * dist - uTime * 5.0);

  // UVs ko distort kar taaki wave effect dikhe
  vec2 uv = vUv + normalize(vUv - rippleCenter) * ripple;

  // Texture sample kar
  vec4 color = texture2D(uImage, uv);

  // Debug ke liye red tint jab hover ho
  if (uIsHovering > 0.5) {
    color.r += rippleStrength * 0.3;
  }

  gl_FragColor = color;
}