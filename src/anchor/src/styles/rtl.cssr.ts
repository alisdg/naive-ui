import { c, cE, cB, cM, cNotM } from '../../../_utils/cssr'

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
    cB('anchor-link', 'padding: 0 16px 0 0;', // override `padding: var(--n-link-padding)`. but this should be something like --n-link-padding-rtl or something. better approach is to define a variable like --n-link-padding-base: 16px and use it in both rtl and ltr variables.
      [
        cE('title', `
      text-align: right;
      padding-left: 16px;
      padding-right: 0;
      `)
      ])
  ])
])
