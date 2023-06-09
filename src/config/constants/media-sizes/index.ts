const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileStart: '576px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  minMobileS: `(min-width: ${sizes.mobileS})`,
  minMobileM: `(min-width: ${sizes.mobileM})`,
  minMobileL: `(min-width: ${sizes.mobileL})`,
  minMobileStart: `(min-width: ${sizes.mobileStart})`,
  minTablet: `(min-width: ${sizes.tablet})`,
  minLaptop: `(min-width: ${sizes.laptop})`,
  minLaptopL: `(min-width: ${sizes.laptopL})`,
  minDesktop: `(min-width: ${sizes.desktop})`,
  minDesktopL: `(min-width: ${sizes.desktop})`,
  maxMobileS: `(max-width: ${sizes.mobileS})`,
  maxMobileM: `(max-width: ${sizes.mobileM})`,
  maxMobileL: `(max-width: ${sizes.mobileL})`,
  maxMobileStart: `(max-width: ${sizes.mobileStart})`,
  maxTablet: `(max-width: ${sizes.tablet})`,
  maxLaptop: `(max-width: ${sizes.laptop})`,
  maxLaptopL: `(max-width: ${sizes.laptopL})`,
  maxDesktop: `(max-width: ${sizes.desktop})`,
  maxDesktopL: `(max-width: ${sizes.desktop})`,
};
