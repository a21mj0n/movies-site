import Home from "../pages/Home.vue";
import Celebrities from "../pages/Celebrities";
import Celebrity from "../pages/Celebrity";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie"
import News from "../pages/News";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movies",
    name: 'movies',
    component: Movies,
  },
  {
    path: "/movies/:id",
    name: 'movie',
    component: Movie,
    props: true,
  },
  {
    path: "/celebrities",
    name: "celebrities",
    component: Celebrities,
  },
  {
    path: "/celebrities/:id",
    name: "celebrity",
    component: Celebrity,
    props: true,
  },
  {
    path: "/news",
    name: 'news',
    component: News,
  },
];
export default routes;