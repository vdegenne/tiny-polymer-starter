import { css } from 'lit-element'

export const LayoutStyles = css`
.flex {
  display: flex;
}
.vflex {
  display: flex;
  flex-direction: column;
}
.hflex {
  display: flex;
}

.flex.centered,
.vflex.centered,
.hflex.centered {
  justify-content: center;
  align-items: center;
}

.flex.separated,
.hflex.separated {
  justify-content: space-between;
}

.vflex.separated {
  align-items: space-between;
}
`
