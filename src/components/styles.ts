export function loadClasses(html: string, styles: { [c: string]: string }) {
  let newhtml = html.toString();
  for (const classname in styles) {
    const finalclass = styles[classname];
    newhtml = newhtml.replace(
      new RegExp(classname, 'g'),
      finalclass
    )
    // console.log(classname, finalclass, newhtml)
  }
  // console.log(html, newhtml, styles)
  return newhtml;
}