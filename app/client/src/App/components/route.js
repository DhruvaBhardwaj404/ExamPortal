import Home from './Home/Home.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Exam from './Exam/Exam.jsx'
import NotFound from './NotFound.jsx'

export const route=[
    { path:'/Home',component:Home},
    {path:'/Exam',component:Exam},
    {path:'/Dashboard', component:Dashboard}, 
    {path:'/Dashboard/Enrolled', component:Dashboard},
    { path:'/*',component:NotFound},
]