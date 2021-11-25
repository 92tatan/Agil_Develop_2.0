import React from "react";
import { Button} from "react-bootstrap";

export const Login = ()=> {
    return(
        <div class="col-md-12 text-center">
        
        <h1 className="text-center mt-5" >pantalla de Login</h1>

        <Button  variant="secondary" href="/Home"  >Login!</Button>
        </div>
    )


}