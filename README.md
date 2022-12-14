### Follow the steps to install bootstrap 5 with vite in your laravel app

+ Install a fresh laravel app by running the command `laravel new your-app` or `composer create-project laravel/laravel your-app` .
+ install node version 18 as this has worked for me and the node modules folder by running `npm install` . To check your node version type `node -v` and make sure it is version 18 and above. You can also change node version by typing `nvm use 18` and this will bring you the latest node version of 18 at this point in time.
+ Next install the laravel ui for bootstrap 5 by running the command `composer require laravel/ui` .
+ After this command has executed successfully, you need to install the scaffolfing and for that use `php artisan ui bootstrap` . You can add the `--auth` flag or parameter to install the authentication scaffolfing as well that is made in bootstrap .
+ Import the bootstrap 5 into your `vite.config.js` as shown below

```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
            ],
            refresh: true,
        }),
    ],

    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    }
});
```
+ Now import bootstrap 5 in SCSS in your js folder inside `resources/js/app.js` and import the following.
```
import './bootstrap';
import '../sass/app.scss'
import * as bootstrap from 'bootstrap'
```
+ Now add the vite directive to compile and run you assets `@vite(['resources/js/app.js'])` .
+ Make sure you have the latest version of vite in your `package.json` . If not then do update to lasted version by changing it to 4.0.0 and running `npm install` .

```
"devDependencies": {
    "@popperjs/core": "^2.11.6",
    "@vitejs/plugin-react": "^2.2.0",
    "axios": "^1.1.2",
    "bootstrap": "^5.2.3",
    "laravel-vite-plugin": "^0.7.0",
    "lodash": "^4.17.19",
    "postcss": "^8.1.14",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sass": "^1.56.1",
    "vite": "^4.0.0"
},
```

**NOTE**  
If you have chosen to opt for the auth package the you must go inside `views/layouts/app.blade.php` and remove all the script tags and stylesheet tags and all the mix directives and just use the vite directive.

#### In the end run the `npm install && npm run build` to build your assets and start your local server.
---

## Installing laravel mix 
+ Inside you main root directory of your laravel app install the laravel mix `npm init -y` and then run `npm install laravel-mix --save-dev` .
+ Create a Mix Configuration File `touch webpack.mix.js` .
+ Define Your Compilation.
+ Vite may be buggy when it comes to compiling both react and bootstrap, so for that reason I opted to use the `.js` as the extension and use webpack to compile the JavaScript.
```
// webpack.mix.js

const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
```
+ Compile the assets `npx mix` . You can also use the `npx mix watch` to keep track of any changes made in your asset files.

## Update bootstrap.js
In you `resources/js/bootstrap.js` update the bootstrap imports
```
import _ from 'lodash';
window._ = _;

import 'bootstrap';


import * as Popper from '@popperjs/core'
window.Popper = Popper


import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
```

## Update scss file
In `resources/sass/app.sass` import the followings
```
// Fonts
@import url('https://fonts.googleapis.com/css?family=Nunito');

// Variables
@import 'variables';

// Bootstrap
@import '~bootstrap/scss/bootstrap';
```
---

## Example react file
```
import React from 'react';
import ReactDOM from 'react-dom';

export default function Example() {
    return (
        <div className='text-center fs-1 mt-4 text-success'>This is an example component</div>
    )
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
```

---

## Welcome file 
Inside welcome.blade.php

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    @vite(['resources/sass/app.scss','resources/js/app.js',])
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
</head>
<body>
    <div id="example"></div>
</body>
</html>
```

---

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
