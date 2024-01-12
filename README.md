# Fast&Fabulous (front)

## Project presentation
### Project contributors
This project was made into the context of the **_Semester 4 tutored project_** at the **_IUT Nord Franche-Comté_** by:
- [**Simon BONNIN**](https://github.com/sbonnin3)
- [**Nathan BOSCHI**](https://github.com/nathanboschi25)
- [**Théo GOUSSOT**](https://github.com/tgoussot)
- [**Manon GRANDMOUGIN**](https://github.com/Manonnnnnn)

### Project links
- [**_Back-end repository_**](https://github.com/tgoussot/API_Fast_Fabulous)
- [**_Project demo_**](https://f-f-three.vercel.app/)

### Project technologies and tools
- **_Vue.js_** for the front-end
- **_Node.js_** for the back-end (see [**_Back-end repository_**](https://github.com/tgoussot/API_Fast_Fabulous))
- **_PostgreSQL_** for the database (see [**_Back-end repository_**](https://github.com/tgoussot/API_Fast_Fabulous))
- **_Docker_** for the deployment
- **_Git_** for the version control
- **_Trello_** for the project management

## Project structure

### Vue plugins
- **_vue-router_** for routing (see `src/router`)
- **_vuex_** for state management (see `src/store`)
- **_vue-i18n_** for internationalization (config in `src/plugins/i18n.plugin.js`)
- **_vuetify_** for ui components (config in `src/plugins/vuetify.plugin.js`) - **_mdi-icons_** for icons
- **_axios_** for HTTP requests
- **_three.js_** for 3D rendering

### Project tree
> **src**
> > **assets**
> > - Separated into forder for each type of assets
>
> > **components**
> > - Separated into three folders: `common`, `public` and `dashboard`.
> 
> > **locales**
> > - Folder for i18n translations in JSON format (Files named `[languageName].lang.json`).
> 
> > **router**
> > - Contains the `index.js` file with the **_vue-router_** routes, and public and dashboard files for each app part's routes.
> 
> > **services**
> > - In `from_datasets` folder are the files for the datasets services (used for dev. only). In `from_api` folder are the files for the API services. All services are named `[serviceName].service.js`.
> 
> > **store**
> > - Contains the `index.js` file with the **_vuex_** store. It can be separated into modules if needed (named `[moduleName].store.js`).
> 
> > **views**
> > - Separated into three folders: `public`, `dashboard`. Each folder contains the views for each app part. In the views root folder are the views that are used in both parts (e.g. login/logout, register, 404, etc.).
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
