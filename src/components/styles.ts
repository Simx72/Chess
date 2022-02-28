export function loadClasses(html: string, styles: {[c:string]: string}) {
  for (const classname in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, classname)) {
      const finalclass = styles[classname];
      html.replace(
        `class="${classname}"`,
        `class="${finalclass}"`
      )
    }
  }
}