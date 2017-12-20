# PLUGIN_easy-reveal
#####Le easy-reveal, c'est easy!
Les éléments apparaîssent quand tu scrolles, comme par magie!

## T'as besoin de quelques trucs pour que ce soit EASY:
#### Tout d'abord tu télécharges le git, qui comprends tous les fichiers dont t'as besoin!!

#### Il te faut ajouter la class element, à tous les éléments que tu veux faire apparaîtrent au scroll!!!

### Dans le BOTTOM de ton HTML, tu tapes le code ci-dessous:
```
<script src="js/jquery.min.js">
<script src="js/main.min.js"></script>
<script src="js/easy-reveal.min.js"></script>

```
Fais gaffe au chemin que tu y inscrits, on a sans doutes pas la même composition de fichiers ;)

Pour jquery, tu peux choper ce lien-ci
[Le lien Jquery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js)
### Dans ton CSS, tu copie colles ceci en haut de ton CSS!!!
```
.element{
    opacity: 1 ;
    visibility: visible ;
    transform: translateY(0) ;
    transition: 1s ease-in-out;
}

.cacher{
    opacity: 0 ;
    visibility: hidden ;
    transform: translateY(15px);
    transition: 0.1s ease-in-out;
}

```

### Dans ton JS, tu fais rien! Tout est programmé dans le easy-reveal.min.js

### Si tu veux voir 'Kesako' le easy-reveal, c'est par ici que ça se passe.
[ICI ](http://cepegra-labs.be/webdesign/2017/vdel/JS/_PLUGINS/easy-reveal/dist/)
