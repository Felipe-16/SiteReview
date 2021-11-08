import Home from './pages/home/Home.vue';
import Cadastro from './pages/cadastro/Cadastro.vue';
import Filmes from './pages/filmes/Filmes.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/filmes', component: Filmes, titulo: 'Filmes' },
]
