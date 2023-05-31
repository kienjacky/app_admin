import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";
import DashboardView from "../views/DashboardView.vue"
import UserView from "../views/UserView.vue";

const routes = [
	{
		path: "/",
		name: "login",
		component: LoginView,
	},
	{
		path: "/register",
		name: "register",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
	},
	{
		path: "/dashboard",
		name: "home",
		component: HomeView,
		children: [
			{
				path:"/dashboard",
				component: DashboardView
			},
			{
				path:"/user",
				component: UserView
			}
		]

		// Todo check signin
		// meta: {
		// 	authRequired: true,
		// },
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: () =>
			import("../views/Dashboard.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const auth = getAuth();

	if (to.matched.some((record) => record.meta.authRequired)) {
		if (auth.currentUser) {
			next();
		} else {
			alert("You've must been logged to access this area");
			router.push("/");
		}
	} else {
		next();
	}
});

export default router;
