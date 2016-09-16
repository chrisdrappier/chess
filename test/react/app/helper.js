export const simulateMove = (app, from, to) => {
  app.find(`#${from}`).simulate('click')
  app.find(`#${to}`).simulate('click')
}
