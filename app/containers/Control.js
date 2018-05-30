import Control from '../components/Control'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/game'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  submitAction: actions.submit
}, dispatch)

const onSubmit = (values, dispatch, props) => {
  console.log('v', values)
  props.submitAction(values.control)
  props.reset()
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'control',
    onSubmit
  })
)

export default enhance(Control)
