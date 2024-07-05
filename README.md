# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

# Team 02
Alena Bordiug <br/>
Mykola Melnychuk <br/>
Maksym Ruzhynskyi <br/>
Volodymyr Saienko <br />
Oher Oleksandr <br/>
Tetiana Mykhailiuk <br/>
Maksym Lytvyn <br/>

Khrystyna Maksimiv <br/>
