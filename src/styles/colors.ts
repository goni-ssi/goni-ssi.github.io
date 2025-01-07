const colors = [
  "gray",
  "red",
  "pink",
  "purple",
  "blue",
  "green",
  "brown",
  "orange",
  "yellow",
  "accent",
] as const;
type Color = (typeof colors)[number];

/**
 * color 진하기 단계 (@see https://www.radix-ui.com/colors)
 * 1 ~ 2: Backgrounds
 * 3 ~ 5: Interactive components
 * 6 ~ 8: Borders and separators
 * 9 ~ 10: Solid colors
 * 11 ~ 12: Accessible text
 */
const scales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
type Scale = (typeof scales)[number];

// TODO: script로 컬러 정적 생성하기
export const adaptive = colors.reduce(
  (acc, color) => {
    const colorObj = {
      ...scales.reduce(
        (acc, scale) => {
          return {
            ...acc,
            [`${color}${scale}`]: `var(--${color}-${scale})`,
          };
        },
        {} as Record<`${Color}${Scale}`, string>
      ),
    };

    return {
      ...acc,
      ...colorObj,
    };
  },
  {} as Record<`${Color}${Scale}`, string>
);
