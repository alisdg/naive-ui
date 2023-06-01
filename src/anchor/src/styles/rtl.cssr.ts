import { c, cE, cB, cM, cNotM } from '../../../_utils/cssr'

// vars
// --n-link-padding-rtl

export default cB('anchor', [
  cM('rtl', `
        direction: rtl;
    `, [
    cNotM('block', `
            padding-left: 0;
            padding-right: var(--n-rail-width);
  `, [
      cB('anchor-link-background', `
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      border-top-left-radius: 10.5px;
      border-bottom-left-radius: 10.5px;
    `),
      cNotM('show-rail', [
        c('>', [
          cB('anchor-link', `
          padding-right: 0;
          `)
        ])
      ])
    ]),
    cM('block', [
      cB('anchor-link', `
      padding: 2px 8px;
      `)
    ]),

    cB('anchor-link-background', `
    right: calc(var(--n-rail-width) / 2);
    left: unset;
  `),
    cB('anchor-rail', `
    right: 0;
    left: unset;
  `, [
      cE('bar', `
      right: 0;
      left: unset;
    `)
    ]),
    cB('anchor-link', 'var(--n-link-padding-rtl)',
      [
        cE('title', `
      text-align: right;
      padding-left: 16px;
      padding-right: 0;
      `)
      ])
  ])
])
