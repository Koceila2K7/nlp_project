"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:8},i="LDA",c={unversionedId:"lda",id:"lda",title:"LDA",description:"8 LDA",source:"@site/docs/lda.md",sourceDirName:".",slug:"/lda",permalink:"/nlp_project/docs/lda",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lda.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Word2Vec",permalink:"/nlp_project/docs/w_to_vec"},next:{title:"BERT",permalink:"/nlp_project/docs/bert"}},l={},s=[{value:"8 LDA",id:"8-lda",level:3}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lda"},"LDA"),(0,o.kt)("h3",{id:"8-lda"},"8 LDA"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"from sklearn.decomposition import LatentDirichletAllocation\nfrom sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\n\ncv_lda = CountVectorizer(stop_words='english', max_features=100000)\n\nbow_matrix = cv_lda.fit_transform(df.cleaned_news.values.tolist())\nK = 5\n\ntf_lda = TfidfVectorizer(stop_words='english', max_df=0.8, min_df = 0.05) # a modifier les autres tfidf\n\n\ntf_matrix = tf_lda.fit_transform(df.cleaned_news.values.tolist())\n\nlda = LatentDirichletAllocation(n_components= K )\n\nlda_matrix = lda.fit_transform(tf_matrix)\n\ndocument_topic = lda_matrix.argmax(axis = 1).tolist()\n\n# save model\nimport pickle\n\n# save the model to disk\nfilename = 'tfidf_lda.sav'\npickle.dump(tf_lda, open(filename, 'wb'))\n\nfrom collections import Counter\nCounter(document_topic)\n\ntopic_words = {}\nn_top_words = 20\nvocab  = tf_lda.get_feature_names()\nfor topic, comp in enumerate(lda.components_):\n    # for the n-dimensional array \"arr\":\n    # argsort() returns a ranked n-dimensional array of arr, call it \"ranked_array\"\n    # which contains the indices that would sort arr in a descending fashion\n    # for the ith element in ranked_array, ranked_array[i] represents the index of the\n    # element in arr that should be at the ith index in ranked_array\n    # ex. arr = [3,7,1,0,3,6]\n    # np.argsort(arr) -> [3, 2, 0, 4, 5, 1]\n    # word_idx contains the indices in \"topic\" of the top num_top_words most relevant\n    # to a given topic ... it is sorted ascending to begin with and then reversed (desc. now)\n    word_idx = np.argsort(comp)[::-1][:n_top_words]\n\n    # store the words most relevant to the topic\n    topic_words[topic] = [vocab[i] for i in word_idx]\n\n\nfor topic, words in topic_words.items():\n    print('Topic: %d' % topic)\n    print('  %s' % ', '.join(words))\n\n\"\"\"\nTopic: 0\n  game, england, win, cup, play, players, match, world, injury, games, team, club, season, coach, ireland, time, final, good, open, second\nTopic: 1\n  people, year, market, new, mr, firm, sales, technology, company, growth, 2004, mobile, users, uk, software, economy, 000, music, net, million\nTopic: 2\n  mr, labour, government, blair, party, election, wales, brown, minister, people, howard, secretary, prime, public, plans, told, chancellor, tory, tax, tories\nTopic: 3\n  film, best, awards, award, star, music, films, tv, year, director, number, including, new, series, uk, british, london, years, office, life\nTopic: 4\n  court, mr, company, bid, offer, case, firm, deal, bank, club, financial, legal, group, sale, chief, executive, pay, board, agreed, accused\n\"\"\"\n\n\"\"\"\ntopic 0 -> sport\n\ntopic 1 -> politics\n\ntopic 2 -> tech\n\ntopic 3 -> business\n\ntopic 4 -> entertainment\n\"\"\"\n\ntest_category\n\n# save model\nimport pickle\n\n# save the model to disk\nfilename = 'lda_model.sav'\npickle.dump(lda, open(filename, 'wb'))\n\n\n\n")))}p.isMDXComponent=!0}}]);