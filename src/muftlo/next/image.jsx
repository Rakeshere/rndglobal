export default function Image({ src, alt = "", fill, priority, quality, placeholder, blurDataURL, style, ...rest }) {
  const s = typeof src === "object" && src ? src.src : src;
  const st = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style;
  return <img src={s} alt={alt} style={st} loading={priority ? "eager" : "lazy"} {...rest} />;
}
