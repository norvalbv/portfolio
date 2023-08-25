/* The AsTrack function accepts an AnalyticsEvent type, but it can also accept arbitrary strings because some event
 *  names are dynamically generated. Where possible though, it's better to try to centralise and control the naming of
 *  available event names to enforce consistency.
 */
export enum AnalyticsEvent {
  LandingPage = 'Landing Page',
  Contact = 'Contact Me Page',
  About = 'About Me Page',
  MyWork = 'My Work Page',
  Blog = 'Blog Page',
  UnknownPage = 'Unknown Page',
}
