/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPU.
   */
  transparent: "rgba(0, 0, 0, 0)",
  grey1: "rgb(247,247,247)",
  grey2: "rgb(209,209,209)",
  white: "rgb(255,255,255)",
  red1: "rgb(243,88,62)",
  blue1: "rgb(89,111,144)",
};
