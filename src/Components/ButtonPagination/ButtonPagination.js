import * as S from './ButtonPagination.styled'

export const renderButtons = (data, pages, setPages) => {
    const buttonCount = Math.min(~~(data?.total_count / 30), 34)
    const buttons = []
  
    const visibleButtons = 5
    const ellipsisStart = (
      <S.ButtonNumber key="ellipsis-start">...</S.ButtonNumber>
    )
    const ellipsisEnd = <S.ButtonNumber key="ellipsis-end">...</S.ButtonNumber>

    if (buttonCount <= visibleButtons) {
      for (let i = 1; i <= buttonCount; i++) {
        buttons.push(
          <S.ButtonNumber
            key={i}
            onClick={() => setPages(i)}
            className={pages === i ? 'active' : ''}
          >
            {i}
          </S.ButtonNumber>,
        )
      }
    } else {
      const firstButton = (
        <S.ButtonNumber
          key={1}
          onClick={() => setPages(1)}
          className={pages === 1 ? 'active' : ''}
        >
          1
        </S.ButtonNumber>
      )
      const lastButton = (
        <S.ButtonNumber
          key={buttonCount}
          onClick={() => setPages(buttonCount)}
          className={pages === buttonCount ? 'active' : ''}
        >
          {buttonCount}
        </S.ButtonNumber>
      )

      buttons.push(firstButton)

      const sideButtons = Math.floor((visibleButtons - 3) / 2)
      let start = pages - sideButtons
      let end = pages + sideButtons

      if (start <= 1) {
        start = 2
        end = start + sideButtons * 2
      } else if (end >= buttonCount) {
        end = buttonCount - 1
        start = end - sideButtons * 2
      }

      if (start > 2) {
        buttons.push(ellipsisStart)
      }

      for (let i = start; i <= end; i++) {
        buttons.push(
          <S.ButtonNumber
            key={i}
            onClick={() => setPages(i)}
            className={pages === i ? 'active' : ''}
          >
            {i}
          </S.ButtonNumber>,
        )
      }

      if (end < buttonCount - 1) {
        buttons.push(ellipsisEnd)
      }

      buttons.push(lastButton)
    }
    return buttons
  }