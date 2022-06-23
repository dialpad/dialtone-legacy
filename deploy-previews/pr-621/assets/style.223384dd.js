var e=(()=>`/*! @docsearch/css 3.1.0 | MIT License | \xA9 Algolia, Inc. and contributors | https://docsearch.algolia.com */:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,.5),0 -4px 8px 0 rgba(0,0,0,.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex;min-width:calc(40px + .8em)}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;position:relative;padding:0 0 2px;border:0;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Keys,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::-webkit-input-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-moz-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input:-ms-input-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-ms-input-placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{-webkit-animation:none;animation:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{-webkit-animation:fade-in .1s ease-in forwards;animation:fade-in .1s ease-in forwards;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:top center;transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"\\bb  "}.DocSearch-Prefill{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding:0 0 1px;color:var(--docsearch-muted-color);border:0;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}
`)();export{e as default};
