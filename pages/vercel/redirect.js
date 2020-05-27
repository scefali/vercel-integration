import { withRouter } from "next/router";
import axios from "axios";
import qs from 'querystring'

// const Redirect = () => {
//   return <h1>Redirect</h1>;
// };

class Redirect extends React.Component {
  componentDidMount() {
    const rawQuery = this.props.router.asPath.split('?')[1];
    console.log('rawQuery', rawQuery)
    const query = qs.decode(rawQuery)
    console.log('query', query)
    const body = {
      code: query.code
    }
    axios.post("../api/oauth", body);
  }
  render() {
    return <h1>Redirect</h1>;
  }
}

export default withRouter(Redirect);
