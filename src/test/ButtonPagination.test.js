const {
  renderButtons,
} = require('../Components/ButtonPagination/ButtonPagination')

describe('renderButtons', () => {
  it('should render buttons when the number of buttons is less than the visible buttons', () => {
    const data = { total_count: 90 }
    const pages = 3
    const setPages = jest.fn()

    const buttons = renderButtons(data, pages, setPages)

    expect(buttons.length).toBe(3)
  })

  it('should render the button when the number of buttons is 1', () => {
    const data = { total_count: 30 }
    const pages = 1
    const setPages = jest.fn()

    const buttons = renderButtons(data, pages, setPages)

    expect(buttons.length).toBe(1)
  })

  it('should render numbered buttons when the number of buttons is equal to the visible buttons', () => {
    const data = { total_count: 150 }
    const pages = 4
    const setPages = jest.fn()

    const buttons = renderButtons(data, pages, setPages)

    expect(buttons.length).toBe(5)
  })
})
