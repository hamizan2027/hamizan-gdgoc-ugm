export default function ResponsiveLogo() {
  return (
    <div>
      <a href="/home" className="shrink-0" aria-label="GDGoC UGM home">
        <picture>
          <source media="(min-width: 1224px)" srcSet="/gdgoc-ugm-logo-desktop.png" />

          <img
            src="/gdgoc-ugm-logo.png"
            alt="Google Developer Groups on Campus UGM"
            width="116"
            height="64"
            className="h-8 w-auto"
          />
        </picture>
      </a>
    </div>
  );
}
