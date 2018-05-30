import Display from '../components/Display'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  commands: state.game.commands
})

const mapDispatchToProps = dispatch => ({})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Display)
