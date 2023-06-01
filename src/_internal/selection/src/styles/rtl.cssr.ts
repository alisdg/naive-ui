import {
  c,
  cB,
  cE,
  cM
} from '../../../../_utils/cssr'

// vars:
// --n-padding-single-rtl
// --n-padding-multiple-rtl

export default c([
  cB('base-selection',
    [
      cM('rtl', 'direction: rtl;', [
        cB('base-suffix', `
          position: absolute;
          right: unset;
          left: 10px;
        `),
        cB('base-selection-input-tag', [
          cE('mirror', `
            left: unset;
            right: 0;
          `)
        ]),
        cB('base-selection-popover', `
          margin-left: -8px;
          margin-right: unset;
        `),
        cB('base-selection-overlay', `
          padding: var(--n-padding-single-rtl);
        `),
        cB('base-selection-tag-wrapper', 'padding: 0 0 3px 7px;', [
          c('&:last-child', 'padding-left: 0;')
        ]),
        cB('base-selection-label', [
          cB('base-selection-input', `
            padding: var(--n-padding-single-rtl);
          `)
        ]),
        cB('base-selection-tags', `
          padding: var(--n-padding-multiple-rtl);
        `)
      ])
    ])

])
