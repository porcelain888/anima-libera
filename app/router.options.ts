import type { RouterOptions } from '@nuxt/schema'
import { RouterOptions as VueRouterOptions } from "vue-router";

export default <RouterOptions> {
	routes(_routes: VueRouterOptions['routes']) {
		const additionalRoutes: object[] = [];
		// const additionalRoutes = [{
		// 	path: '/foo/baz',
		// 	component: () => import('~/pages/about.vue')
		// }];
		return [..._routes, ...additionalRoutes];
	}
}
