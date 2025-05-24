import { useParams } from "react-router-dom"

const DashboardItems = () => {

    const{id} =useParams();

    return(
        <div>
            <h1>Dashboard Items</h1>
        </div>
    )



}

export default DashboardItems