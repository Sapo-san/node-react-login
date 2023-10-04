import { useSelector } from 'react-redux'
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {

    const credentials = useSelector((state) => state.credentials.cookie)

    return (
      <Route
        {...rest}
        render={ props => {
                if (credentials) { // Si está autenticado...
                    return <Component {...props} />
                }
                
                // Si no está autenticado, redirigir
                return <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
            }
        }
      />
    );
}

export default PrivateRoute