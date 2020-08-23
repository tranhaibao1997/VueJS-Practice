import User from './user/User.vue'
import Home from './Home.vue'
import UserStart from './user/UserStart.vue'
import UserDetail from './user/UserDetail.vue'
import UserEdit from './user/UserEdit.vue'

export const routes = [
    { path: "", component: Home },
    {
        path: "/user", component: User, children: [
            { path: "", component: UserStart },
            { path: ":id", component: UserDetail },
            { path: ":id/edit", component: UserEdit, name: "userEdit" }
        ]
    }


]