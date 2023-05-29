import { c, cB, cM } from '../../../_utils/cssr'

// vars:
// --n-menu-border-radius
// --n-menu-divider-color

export default c([
  cB('cascader-menu', [
    cM('rtl', 'direction: rtl;', [
      cB('cascader-submenu', [
        c('&:first-child', `
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
        border-top-right-radius: var(--n-menu-border-radius);
        border-bottom-right-radius: var(--n-menu-border-radius);
      `),
        c('&:last-child', `
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        border-top-left-radius: var(--n-menu-border-radius);
        border-bottom-left-radius: var(--n-menu-border-radius);
      `),
        c('&:not(:first-child)', `
        border-left: 0;
        border-right: 1px solid var(--n-menu-divider-color);
      `)
      ]),
      cB('cascader-option', [
        cM('show-prefix', {
          paddingRight: 0
        })
      ])
    ])
  ]),
  cB('cascader', [
    cM('rtl', 'direction: rtl')
  ])
])
