import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Sticky, Icon, Popup, Cell, CellGroup, Divider, Overlay, Field, Popover, Grid, GridItem} from 'vant';

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Button);
app.use(Sticky);
app.use(Icon);
app.use(Popup);
app.use(Cell);
app.use(CellGroup);
app.use(Divider);
app.use(Overlay);
app.use(Field);
app.use(Popover);
app.use(Grid);
app.use(GridItem);

app.mount('#app')
