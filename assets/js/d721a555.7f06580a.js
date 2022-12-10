"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="Bag of word and TF IDF",s={unversionedId:"bagofword",id:"bagofword",title:"Bag of word and TF IDF",description:"mettre une d\xe9finition de bag of word",source:"@site/docs/bagofword.md",sourceDirName:".",slug:"/bagofword",permalink:"/nlp_project/docs/bagofword",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bagofword.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Nettoyage des donn\xe9es",permalink:"/nlp_project/docs/nettoyage"},next:{title:"Logistic Regression",permalink:"/nlp_project/docs/logestic_reg"}},c={},l=[{value:"3.1 Construire les vecteurs BoW &amp; Tfidf",id:"31-construire-les-vecteurs-bow--tfidf",level:3},{value:"CountVectorizer &amp; TfidfVectorizer",id:"countvectorizer--tfidfvectorizer",level:4},{value:"3.2 Split Train / Test",id:"32-split-train--test",level:2}],f={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bag-of-word-and-tf-idf"},"Bag of word and TF IDF"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"mettre une d\xe9finition de bag of word")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.model_selection import train_test_split\nX = df['cleaned_news'].values.tolist()\ny = df['category'].values.tolist()\n")),(0,o.kt)("h3",{id:"31-construire-les-vecteurs-bow--tfidf"},"3.1 Construire les vecteurs BoW & Tfidf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\n")),(0,o.kt)("h4",{id:"countvectorizer--tfidfvectorizer"},"CountVectorizer & TfidfVectorizer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cv = CountVectorizer(stop_words='english')\ncv_X = cv.fit_transform(X)\nprint(cv_X.shape)\n\ntf = TfidfVectorizer(stop_words='english') #ici on peut ajouter min_df, max_df. voir la doc de TfidfVectorizer !!\ntf_X = tf.fit_transform(X)\nprint(tf_X.shape)\n")),(0,o.kt)("h2",{id:"32-split-train--test"},"3.2 Split Train / Test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train))\n\ncv_train = cv.transform(X_train)\ncv_test = cv.transform(X_test)\n\nfrom sklearn import preprocessing\n\nle = preprocessing.LabelEncoder()\n\nle.fit(df.category.unique())\n\nle.classes_\n\ntrain_category = le.fit_transform(y_train)\ntest_category = le.fit_transform(y_test)\n\n#classes labels\n#le.inverse_transform([0, 1, 2, 3, 4])\nd = zip([0, 1, 2, 3, 4], le.inverse_transform([0, 1, 2, 3, 4]))\nclass_labels_dict = {}\nfor k,v in d:\n    class_labels_dict[k] = v\n\nclass_labels_dict\n\n#{0: 'business', 1: 'entertainment', 2: 'politics', 3: 'sport', 4: 'tech'}\n")))}p.isMDXComponent=!0}}]);