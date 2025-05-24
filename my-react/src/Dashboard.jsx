import { Link } from 'react-router-dom';

const Dashboard = () => {

    const dashboardItems = [
        {id:1, title:"My Profile",},
        {id:2, title:"My Project",},
        {id:3, title:"My Teams",},
    ];

    return(
        <div>
            <h1>Dashboard Page</h1>
            <ul>
                {dashboardItems.map((item)=>(
                    <li key={item.id}>
                        <Link to ={`/dashboard/${item.id}`}>
                            <h2>{item.title}</h2>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Dashboard
