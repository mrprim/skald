import Display from '../components/Display'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  messages: getMessages(state)
})

const getMessages = state => {
  let messages = [...state.game.messages]
  messages.reverse()
  messages = messages.filter((msg, i) => i <= 50)
  return messages.reverse()
}
const mapDispatchToProps = dispatch => ({})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Display)
