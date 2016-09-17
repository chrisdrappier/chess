export const simulateMove = (app, from, to) => {
  // console.log('---------------------------------')
  // console.log('from')
  // console.log(`#${from}`)
  // console.log(`#${to}`)
  app.find(`#${from}`).simulate('click')
  app.find(`#${to}`).simulate('click')
}
