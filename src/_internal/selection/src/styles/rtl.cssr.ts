import {
  c,
  cB,
  cE,
  cM
} from '../../../../_utils/cssr'

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
  `), cB('base-selection-tag-wrapper', `
    padding: 0 0 3px 7px;
  `, [
          c('&:last-child', 'padding-left: 0;')
        ])
        /// end
      ])
    ])

])
