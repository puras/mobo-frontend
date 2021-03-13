/**
 * @project mobo-frontend
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-13 09:30
 */
export function hasClass(ele: Element, cls: string): boolean {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export function addClass(ele: Element, cls: string) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

export function removeClass(ele: Element, cls: string) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
