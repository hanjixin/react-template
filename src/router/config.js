import components from './components'
const router = {
  mode: '',
  routes: [
    {
      path: "/Tab",
      component: components.myTables
    },
    {
      path: "/sandwiches",
      component: components.Sandwiches
    },
    {
      path: "/tacos",
      component: components.Tacos,
      routes: [
        {
          path: "/tacos/bus",
          component: components.Bus
        },
        {
          path: "/tacos/cart",
          component: components.Cart
        }
      ]
    }, 
    {
      path: '/404',
      component: components.NotFound
    }

  ]
} 
export default router