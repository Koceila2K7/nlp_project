"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},s="Logistic Regression",a={unversionedId:"logestic_reg",id:"logestic_reg",title:"Logistic Regression",description:"La r\xe9gression logistique est un mod\xe8le de classification utilis\xe9 en apprentissage automatique pour pr\xe9dire une variable cible qui prend deux valeurs possibles (par exemple, oui/non, vrai/faux). Elle est souvent utilis\xe9e pour pr\xe9dire l'appartenance d'un \xe9chantillon \xe0 l'une ou l'autre des classes.",source:"@site/docs/logestic_reg.md",sourceDirName:".",slug:"/logestic_reg",permalink:"/nlp_project/docs/logestic_reg",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/logestic_reg.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bag of word and TF IDF",permalink:"/nlp_project/docs/bagofword"},next:{title:"Random forest",permalink:"/nlp_project/docs/random_forest"}},l={},c=[{value:"4.1 Logistic Regression with Bag of words",id:"41-logistic-regression-with-bag-of-words",level:2},{value:"4.2 Logistic Regression with TF-IDF",id:"42-logistic-regression-with-tf-idf",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logistic-regression"},"Logistic Regression"),(0,i.kt)("p",null,"La r\xe9gression logistique est un mod\xe8le de classification utilis\xe9 en apprentissage automatique pour pr\xe9dire une variable cible qui prend deux valeurs possibles (par exemple, oui/non, vrai/faux). Elle est souvent utilis\xe9e pour pr\xe9dire l'appartenance d'un \xe9chantillon \xe0 l'une ou l'autre des classes."),(0,i.kt)("p",null,"La r\xe9gression logistique est bas\xe9e sur une fonction de r\xe9gression logistique, qui est une fonction math\xe9matique utilis\xe9e pour mod\xe9liser la probabilit\xe9 d'appartenance \xe0 l'une des classes en fonction de diff\xe9rentes variables explicatives (\xe9galement appel\xe9es variables ind\xe9pendantes ou caract\xe9ristiques). La r\xe9gression logistique utilise cette fonction pour estimer la probabilit\xe9 de chaque classe pour chaque \xe9chantillon en fonction des valeurs des variables explicatives."),(0,i.kt)("p",null,"Pour entra\xeener un mod\xe8le de r\xe9gression logistique, on utilise un jeu de donn\xe9es d'entra\xeenement qui comprend des \xe9chantillons avec leurs valeurs de variables explicatives et leur valeur de la variable cible connue. On utilise ces donn\xe9es pour ajuster les coefficients de la fonction de r\xe9gression logistique de mani\xe8re \xe0 minimiser l'erreur de pr\xe9diction du mod\xe8le. Une fois le mod\xe8le entra\xeen\xe9, on peut utiliser les coefficients ajust\xe9s pour pr\xe9dire la classe d'un nouvel \xe9chantillon en fonction de ses valeurs de variables explicatives."),(0,i.kt)("p",null,"La r\xe9gression logistique est souvent utilis\xe9e dans de nombreux domaines, tels que la m\xe9decine, le marketing et la finance, pour pr\xe9dire la probabilit\xe9 d'un \xe9v\xe9nement futur (par exemple, la probabilit\xe9 qu'un patient d\xe9veloppe une maladie, la probabilit\xe9 qu'un client ach\xe8te un produit ou la probabilit\xe9 qu'une entreprise d\xe9pose son bilan). Elle est \xe9galement souvent utilis\xe9e comme base pour construire d'autres mod\xe8les de classification plus complexes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.model_selection import train_test_split\nX = df['cleaned_news'].values.tolist()\ny = df['category'].values.tolist()\n")),(0,i.kt)("h2",{id:"41-logistic-regression-with-bag-of-words"},"4.1 Logistic Regression with Bag of words"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.linear_model import LogisticRegressionCV\n\nbow_lr = LogisticRegressionCV(cv=5,n_jobs = 3).fit(cv_train, train_category)\nprint(bow_lr)\n\nbow_lr.scores_\n\nbow_test_predictions = bow_lr.predict(cv_test)\n\nprint(bow_test_predictions)\nprint(test_category)\n\nc = 0\nfor x,y in zip(test_category, bow_test_predictions):\n    if x == y:\n        c+=1\n\nprint('Accuracy:',c/len(test_category))\n# .95\n")),(0,i.kt)("h2",{id:"42-logistic-regression-with-tf-idf"},"4.2 Logistic Regression with TF-IDF"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.linear_model import LogisticRegressionCV\n\ntf_train = tf.transform(X_train)\ntf_test = tf.transform(X_test)\n\nlr = LogisticRegressionCV(cv = 5)\ntfidf_lr = lr.fit(tf_train, train_sentiments)\nprint(tfidf_lr)\n\ntfidf_test_predictions = tfidf_lr.predict(tf_test)\nprint(tf_test.shape)\nprint(tfidf_test_predictions)\nprint(test_category)\n\nc = 0\nfor x,y in zip(test_category, tfidf_test_predictions):\n    if x == y:\n        c+=1\n\nprint('Accuracy:',c/len(test_category))\n\n#Accuracy : .97\n\n save model\nimport pickle\n\n#save the model to disk\nfilename = 'lr_model.sav'\npickle.dump(tfidf_lr, open(filename, 'wb'))\n\n# load the model from disk\nloaded_model = pickle.load(open(filename, 'rb'))\nresult = loaded_model.score(tf_test, test_category)\nprint(result)\n#0.97\n")))}p.isMDXComponent=!0}}]);