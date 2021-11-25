import { Drawer } from "../../layouts";
import { Route } from "react-router-dom";

const RouterWithLayout = props => {
    const {layout: Layout, element: Element, ...rest} = props;

    return(
        <Route 
        {...rest}
        render={(matchProps) => (
            <Drawer>
              <Element {...matchProps} />
            </Drawer>
          )}
        />
    );
}

export default RouterWithLayout;