import { connect } from 'react-redux'
import Requests from '../../components/Requests'

function mapStateToProps(state) {
  return {
    isMobile: state.site.isMobile,
  }
}

export default connect(mapStateToProps)(Requests)
