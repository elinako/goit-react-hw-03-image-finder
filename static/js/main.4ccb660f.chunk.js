(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={ImageGalleryItem:"galleryItemStyles_ImageGalleryItem__47YDM",ImageGalleryItemImage:"galleryItemStyles_ImageGalleryItemImage__1kcoZ"}},23:function(e,a,t){e.exports={ImageGallery:"immageGalleryStyles_ImageGallery__1yF7I"}},24:function(e,a,t){e.exports={Button:"buttonStyles_Button__3pT-Z"}},26:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),s=t(3),i=t(4),m=t(6),u=t(5),h=t(7),p=t.n(h),g=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={searchValue:""},e.inputValueHolder=function(a){e.setState({searchValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.searchValue),e.setState({searchValue:""})},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{className:p.a.Searchbar,onSubmit:this.handleSubmit},r.a.createElement("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchValue,onChange:this.inputValueHolder}),r.a.createElement("button",{type:"submit",className:p.a.SearchFormButton},r.a.createElement("span",{className:p.a.SearchFormButtonLabel},"Search")))))}}]),t}(n.Component),d=t(22),y=t.n(d),f=t(1),b=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=18754352-1a008cfcfe771c0acf1dc35e2&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},S=b;b.propTypes={query:t.n(f).a.string};var v=t(9),_=t.n(v),E=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).componentDidMount=function(){window.addEventListener("keydown",e.handleEscapeModal)},e.componentWillUnmount=function(){window.removeEventListener("keydown",e.handleEscapeModal)},e.handleEscapeModal=function(a){"Escape"===a.code&&e.props.onClose()},e.closeModal=function(){e.props.onClose()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.image;return r.a.createElement("div",{className:_.a.Overlay,onClick:this.closeModal},r.a.createElement("div",{className:_.a.Modal},r.a.createElement("img",{src:e.largeImageURL,alt:e.tags})))}}]),t}(n.Component),I=t(10),O=t.n(I),w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.image,a=this.state.showModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:O.a.ImageGalleryItem,onClick:this.toggleModal},r.a.createElement("img",{src:e.webformatURL,alt:e.tags,id:e.id,className:O.a.ImageGalleryItemImage})),a&&r.a.createElement(E,{image:e,onClose:this.toggleModal}))}}]),t}(n.Component),j=t(23),k=t.n(j),F=t(71);Object(F.a)();var M=function(e){var a=e.arrayOfImages;return r.a.createElement("ul",{className:k.a.ImageGallery},a.map((function(e){return r.a.createElement(w,{image:e,key:Object(F.a)()})})))},C=t(24),N=t.n(C),B=function(e){var a=e.onClick;return r.a.createElement("button",{className:N.a.Button,onClick:a},"Load more")},G=t(25),L=t.n(G),A=t(8),V=t.n(A),x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],searchQuery:"",page:1,loading:!1,error:null},e.handleSearchValue=function(a){e.setState({searchQuery:a,images:[],page:1})},e.searchImages=function(){e.setState({loading:!0});var a=e.state,t=a.searchQuery,n=a.page;S(t,n).then((function(a){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a)),page:e.page+1,loading:!1}}))})).catch((function(a){return e.setState({error:a})}))},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.searchImages(),a.images!==this.state.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onSubmit:this.handleSearchValue}),t?r.a.createElement(L.a,{className:V.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):r.a.createElement(M,{arrayOfImages:a}),a.length>0&&r.a.createElement(B,{onClick:this.searchImages}),null!==n&&r.a.createElement("p",null,"Something went wrong..."))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,{className:V.a.App})),document.getElementById("root"))},7:function(e,a,t){e.exports={Searchbar:"searchbarStyles_Searchbar__1cvdt",SearchForm:"searchbarStyles_SearchForm__3l2uH",SearchFormButton:"searchbarStyles_SearchFormButton__2Gm90",SearchFormButtonLabel:"searchbarStyles_SearchFormButtonLabel__Sd9tO",SearchFormInput:"searchbarStyles_SearchFormInput__4v2zY"}},8:function(e,a,t){e.exports={App:"stylesApp_App__1jk5Y",Loader:"stylesApp_Loader__4RkEb"}},9:function(e,a,t){e.exports={Overlay:"modalStyles_Overlay__39_RW",Modal:"modalStyles_Modal__31VTA"}}},[[26,1,2]]]);
//# sourceMappingURL=main.4ccb660f.chunk.js.map