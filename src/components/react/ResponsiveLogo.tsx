import { useMediaQuery } from 'react-responsive'


export default function ResponsiveLogo() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  return (
    <div>
      <a href="/home" className="shrink-0" aria-label="GDGoC UGM home">
          <img
              src={isDesktopOrLaptop ?  "/gdgoc-ugm-logo-desktop.png" : "/gdgoc-ugm-logo.png"}
              alt="Google Developer Groups on Campus UGM"
              width="116"
              height="64"
              className="h-8 w-auto"
          />
      </a>
  </div>
  );
};
