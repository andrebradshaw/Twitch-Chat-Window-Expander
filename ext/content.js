async function initResizePopOutComponents(){
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    var purple_trans = '#6725c8c7';
    var purple_light_trans = '#7d39e199';
    var icons = {
        expand: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEwSURBVFiF7ZcxbsIwFIa/qkhNz8DK1gtE4hy9AWeAC5QFqedoVHVrl7CCGMPEDbqyMyCZAbdKXohfnDhi8S9Fsiy/939+suJngC1gHF9Gd2VK7u0ImJYCDsBJJCl6ABTARMwlwIsdTxFEa+C5h6GmJ+BHeGKAPZDbcW4pQysRHvsywM7SfTNMJco7z23unQT4Wxga4pY5TQChIZrMnQChIFzmFYAMmN9IIA+Nz8FsE7sAPnwSvXkAvCvm/3pUEp2BL+CBazl/PSCOwIz6jy0qKioqylsJsARSj5jUxvTurLpeRks8btG7X8dNDYmrmWgjralxtmR9zdtANDalocw1iBrAEOYuiArA3R8mhmF2LlWuhAHMSCwYAxsx9wmsOhougFcxV6uu9jxXW2eH1Of5BXcXq382IwkIAAAAAElFTkSuQmCC",
        shrink: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVFiF7de9ThtBGIXhhwgLEyGqSCahSpSegp7rQLmEdHAhKfgp00WRImjy05A2bUCioKWgChJQIBlRIJxiZ9F45Rl2ZIci8pEse2fn+87rtXfnDBxgH11Ppy6+41AwHwSQFEQPnQKDTqhJmR8Ez6/NgVEQC7jBdgHANvqhNmU+5DWnuiQD/MR8VLQcxvcKAPZCzXI0Nocfkfl8sygFMQmAR81zEOMCtDZPQbwdA+BNqXmt+M/yewyAujZ5h81GnxfxIjrewGesFhg3tYrj0OtVNH6B6xigh1M8zzS7LzCO567gpHH+RvXznNcAV/iIpUzD3QKAHdWlf5Y4/weXBf2mmmqqqf5jzYT3Dj5I57j6UfyrZd81vJd/FG/irh7oqTLcIPP60tJcmJvr1Q+eD6vhOV4aXo67quV4JRynvs0oxXOP8Q630djDcpzSkwWSUWpmuHEi2WvptN3KfFKhtBVEKr1OKpZnIXLReZIbk5EQbbZmfWwVABRtzb5lzGv1DCfoxzSr3eZ0fwZHOMO64Xv1X6qLT1j4C7C/pPHSQDGmAAAAAElFTkSuQmCC",
        resize: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000.000000 1000.000000" version="1.0"><g stroke="none" fill="#43de6d" transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">        <path d="M9235 9969 c-31 -17 -9164 -9151 -9181 -9181 -8 -15 -14 -49 -14 -76 0 -38 6 -57 29 -88 34 -46 535 -544 571 -568 28 -18 110 -22 143 -5 31 16 9165 9148 9183 9181 8 15 14 49 14 76 0 38 -6 57 -29 88 -34 46 -535 544 -571 568 -28 18 -114 21 -145 5z"/>        <path d="M5923 4093 c-1911 -1908 -3479 -3476 -3484 -3485 -5 -9 -9 -38 -9 -64 l0 -48 228 -228 228 -228 53 0 53 0 3478 3472 c1914 1909 3482 3478 3485 3485 3 8 5 35 5 61 l0 46 -228 228 -228 228 -53 0 -53 0 -3475 -3467z"/>        <path d="M7042 2957 l-2442 -2442 0 -45 0 -45 213 -213 212 -212 45 0 45 0 2443 2443 2442 2442 0 45 0 45 -213 213 -212 212 -45 0 -45 0 -2443 -2443z"/>        <path d="M8088 1922 l-1478 -1477 0 -45 c0 -44 1 -45 178 -222 177 -178 178 -178 222 -178 l45 0 1472 1473 1473 1472 0 55 0 56 -173 172 c-172 171 -174 172 -218 172 l-44 0 -1477 -1478z"/></g>        </svg>`,
        resize_hover: `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">        <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#43de6d" stroke="none">        <path d="M5318 4622 l-3798 -3797 0 -59 0 -60 312 -314 c172 -172 325 -320 340 -328 15 -8 49 -14 75 -14 l48 0 3797 3798 3798 3797 0 59 0 60 -312 314 c-172 172 -325 320 -340 328 -15 8 -49 14 -75 14 l-48 0 -3797 -3798z"/>        <path d="M6763 3147 l-2483 -2482 0 -50 0 -49 268 -268 268 -268 49 0 50 0 2482 2483 2483 2482 0 50 0 49 -268 268 -268 268 -49 0 -50 0 -2482 -2483z"/>        <path d="M8058 1902 l-1268 -1267 0 -50 0 -50 248 -247 247 -248 50 0 50 0 1267 1268 1268 1267 0 50 0 50 -248 247 -247 248 -50 0 -50 0 -1267 -1268z"/>        </g>        </svg>`,    
    };
    const attr = (o, k, v) => o.setAttribute(k, v);
    const a = (l, r) => r.forEach(a => attr(l, a[0], a[1]));
    function inlineStyler(elm,css){
        Object.entries(JSON.parse(
        css.replace(/(?<=:)\s*(\b|\B)(?=.+?;)/g,'"')
            .replace(/(?<=:\s*.+?);/g,'",')
            .replace(/[a-zA-Z-]+(?=:)/g, k=> k.replace(/^\b/,'"').replace(/\b$/,'"'))
            .replace(/\s*,\s*}/g,'}')
        )).forEach(kv=> { elm.style.setProperty([kv[0]],kv[1],'important')});
    }
    function topZIndexer(){
        let n = new Date().getTime() / 1000000;
        let r = (n - Math.floor(n)) * 100000;
        return (Math.ceil(n+r) * 10);
    }
    var headernavcolor = window.getComputedStyle(document.getElementsByClassName('top-nav')?.[0]?.firstChild).backgroundColor;
    function setCSS(style_id){
        if(document.getElementById(`${style_id}_style`)) document.getElementById(`${style_id}_style`).outerHTML = '';
        let csselm = document.createElement('style');
        a(csselm,[['class',`${style_id}_style`]]);
        document.head.appendChild(csselm);
        csselm.innerHTML = `
        .mover-top-gradient {
            background: linear-gradient(to top right, ${headernavcolor}, ${headernavcolor}, #772ce885);
            background-size: 150% 150%;
            animation: move_gradient 5s ease infinite;
        }
        .mover-bottom-gradient {
            background: linear-gradient(to bottom right, ${headernavcolor}, ${headernavcolor}, #772ce885);
            background-size: 150% 150%;
            animation: move_gradient 5s ease infinite;
        }
        @keyframes move_gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }`;
    }
    setCSS('twitch_pop_custom_css');

    function dragElement() {
        var el = document.getElementById(this.getAttribute('panel_move_id')); /*requires the trigger elm contains the ID of the elm to be moved as ['panel_move_id','TARGET_ID']*/
        var actor = this;
        var pos1 = 0,    pos2 = 0,    pos3 = 0,    pos4 = 0;
        if (document.getElementById(this.id)) document.getElementById(this.id).onmousedown = dragMouseDown;
        else this.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            inlineStyler(el,`{z-index: ${topZIndexer()}}`);
        }
        function elementDrag(e) {
            console.log(actor.getAttribute('id'));
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            inlineStyler(el,`{z-index: ${topZIndexer()}}; top: ${(el.offsetTop - pos2)}px; left: ${(el.offsetLeft - pos1)}px; opacity: 0.85; transition: opacity 100ms;}`);
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            el.style.opacity = "1";
            inlineStyler(el,`{z-index: ${topZIndexer()}}`);
        }
    }

    var mathob = {
        '+':(a,b=> a+b),
        '-':(a,b=> a-b),
        '*':(a,b=> a*b),
        '/':(a,b=> a/b),
    };
    function adjustElementSize(){
        var cbod = document.getElementById(this.getAttribute('resize_container'));
        var footer = document.getElementById(cbod.getAttribute('foot_resizer_id'));
        var is_chat = /chat/.test(this.getAttribute('class'));
        var is_nav = /nav/.test(this.getAttribute('class'));
        var foot_height = 0; //is_nav ? 19 : 0;
        var pos1 = 0,    pos2 = 0,    pos3 = 0,    pos4 = 0;

        var width = cbod.getBoundingClientRect().width;
        var height = cbod.getBoundingClientRect().height;
        var starting_left = cbod.getBoundingClientRect().left;

        if (document.getElementById(this.id)) document.getElementById(this.id).onmousedown = dragMouseDown;
        else this.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            inlineStyler(cbod,`{width: ${(width - (pos3 - e.clientX))}px; height: ${((height - (pos4 - e.clientY)) - (foot_height))}px; opacity: 0.8; transiation: opacity 100ms;}`);
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            cbod.style.opacity = '1';
            updateSideNaveGridLayout();
        }
    }

    var chat_is_beside = document.getElementsByClassName('right-column--beside')?.[0];
    var chat_beside_class = chat_is_beside.getAttribute('class');
    //
    var chat_is_hidden = document.getElementsByClassName('right-column--below')?.[0];
    // var chat_sidebar_hide_elm = document.getElementsByClassName('simplebar-track vertical')?.[0];
    window.onresize = ()=>{
        if(chat_is_hidden) chat_is_hidden.setAttribute('class','Layout-sc-nxg1ff-0 kdzwbB right-column right-column--beside');
    };

    function updateSideNaveGridLayout(){
        let grid_elm = document.getElementsByClassName('side-bar-contents')?.[0]?.firstChild?.firstChild;
        inlineStyler(grid_elm,`{display: grid; grid-template-columns:${Array.from(document.getElementsByClassName('side-nav-section')).map(n=> ' 1fr').reduce((a,b)=> a+b)}; grid-gap: 0px;}`);
    }
    function hideAnnoyingButtons(){
        if(document.getElementsByClassName('channel-leaderboard')?.[0]) document.getElementsByClassName('channel-leaderboard')[0].style.display = 'none';
        if(document.getElementsByClassName('right-column__toggle-visibility')?.[0]) {
            document.getElementsByClassName('right-column__toggle-visibility')[0].style.display = 'none';
            document.getElementsByClassName('right-column__toggle-visibility')[0].getElementsByTagName('button')[0].style.display = 'none';
        }
    }
    function setChatPopOutBtns(){
        hideAnnoyingButtons();
        var main_chat_holder = document.getElementsByClassName('channel-root__right-column channel-root__right-column--expanded')?.[0];
        a(main_chat_holder,[['id','main_chat_holder']]);

        var chat_label = document.getElementById('chat-room-header-label');
        chat_label.innerText = (/twitch\.tv\/(\w+)/.exec(window.location.href)?.[1] ? /twitch\.tv\/(\w+)/.exec(window.location.href)[1].toUpperCase() : '') + ' ' + chat_label.innerText;
        inlineStyler(chat_label,`{transform: translate(2px,0px); font-size: 12px;}`);

        var main_chat_header = document.getElementsByClassName('stream-chat-header')?.[0];
        inlineStyler(main_chat_header,`{height: 32px; display: grid; grid-template-columns: 20px 1fr 20px; grid-gap: 10px; user-select: none;}`);
        a(main_chat_header,[['id','main_chat_header'],['class','move_header'],['panel_move_id','main_chat_holder']]);

        var init_btn = document.createElement('div');
        a(init_btn,[['id','init_chat_pop_btn'],['popout_container_id','main_chat_holder'],['movable_container_id','main_chat_holder']]);
        init_btn.innerHTML = `<svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 eOJUoR"><g><path d="M12 4h2.586L9.293 9.293l1.414 1.414L16 5.414V8h2V2h-6v2z"></path><path d="M4 4h6v2H4v10h10v-6h2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"></path></g></svg>`;
        main_chat_header.insertBefore(init_btn,main_chat_header.firstChild);
        inlineStyler(init_btn,`{cursor: pointer;}`);
        init_btn.onmouseenter = ()=> { inlineStyler(init_btn,`{background: #772ce885;}`); };
        init_btn.onmouseleave = ()=> { inlineStyler(init_btn,`{background: transparent;}`); };
        init_btn.onclick = ()=> { popOutChat(); init_btn.outerHTML = ''; };
    }
    setChatPopOutBtns();

    function popOutChat(){
        if(document.getElementById('chat_foot_resizer')) document.getElementById('chat_foot_resizer').outerHTML = '';
        var main_chat_holder = document.getElementById('main_chat_holder');
        a(main_chat_holder,[['foot_resizer_id','chat_foot_resizer']]);
        inlineStyler(main_chat_holder,`{position: fixed; z-index: ${topZIndexer()}; height: ${window.innerHeight - 100}px;}`);
        
        var main_chat_header = document.getElementById('main_chat_header');
        a(main_chat_header,[['class','mover-top-gradient']]);
        inlineStyler(main_chat_header,`{grid-template-columns: 1fr 2px;}`);

        let chat_label = document.getElementById('chat-room-header-label');
        a(chat_label.parentElement,[['panel_move_id','main_chat_holder'],['id','chat_header_move']]);
        inlineStyler(chat_label.parentElement,`{cursor: move; transform: translate(6px,0px);}`);
        chat_label.parentElement.onmouseover = dragElement;

        let footer_elm = document.createElement('div');
        a(footer_elm,[['class','mover-bottom-gradient'],['id','chat_footer_holder']]);
        main_chat_holder.appendChild(footer_elm);
        inlineStyler(footer_elm,`{height: 19px; display: grid; grid-template-columns: 1fr 19px;}`);

        let footer_text = document.createElement('div');
        footer_elm.appendChild(footer_text);
        a(footer_text,[['panel_move_id','main_chat_holder'],['id','chat_footer_move']]);
        inlineStyler(footer_text,`{width: calc(100% - 19px); cursor: move;}`);
        footer_text.onmouseover = dragElement;

        let foot_resizer = document.createElement('div');
        a(foot_resizer,[['id','chat_foot_resizer'],['class','chat_foot_resizer foot_resizer'],['resize_container','main_chat_holder'],['style_info','display: grid; grid-template-columns: 1fr 20px; grid-gap: 10px;']]);
        inlineStyler(foot_resizer,`{width: 19px; cursor: nw-resize; z-index: ${topZIndexer()};}`);
        foot_resizer.innerHTML = icons.resize;
        footer_elm.appendChild(foot_resizer)
        foot_resizer.onmouseover = adjustElementSize;
    }

    function setFollowBarPopOut(){
        let elm = document.getElementById('sideNav');
// side-bar-contents
        // inlineStyler(document.getElementsByClassName('side-bar-contents')?.[0],`{display:grid; grid-template-columns: 1fr 1fr 1fr; grid-gap:0px;}`);
        Array.from(elm.getElementsByClassName('side-nav-header-icon')).forEach(itm=> {itm.outerHTML = '';});
        // inlineStyler(elm,`{position: fixed;  top: 50px; left:0px; border: 0px solid transparent; z-index:${topZIndexer()}; height: ${window.innerHeight-100}px;}`); side-nav--expanded
        let side_nav_sections = Array.from(elm.getElementsByClassName('side-nav-section')).forEach(sect=> {
            let head = sect.getElementsByClassName('side-nav-header')?.[0];
            inlineStyler(head,`{display: grid; grid-template-columns: 20px 1fr;}`);
            let head_text = head.getElementsByTagName('h5')?.[0];
            var head_text_snake_cased = head_text.innerText.toLowerCase().replace(/\s+/g,'_');
            a(head_text,[['class','nav_text']]);
            inlineStyler(head_text,`{transform: translate(0px,-10px); font-size: 12px;}`);
            a(sect,[['id',`main_${head_text.innerText.toLowerCase().replace(/\s+/g,'_')}_holder`]]);
            var init_btn = document.createElement('div');
            a(init_btn,[['id',`init_${head_text_snake_cased}_pop_btn`],['popout_container_id',`sideNav`],['class','nav_pop_btn'],['movable_container_id',`sideNav`]]);
            init_btn.innerHTML = `<svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 eOJUoR"><g><path d="M12 4h2.586L9.293 9.293l1.414 1.414L16 5.414V8h2V2h-6v2z"></path><path d="M4 4h6v2H4v10h10v-6h2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"></path></g></svg>`;
            head.insertBefore(init_btn,head.firstChild);
            inlineStyler(init_btn,`{cursor: pointer;}`);
            init_btn.onmouseenter = ()=> { inlineStyler(init_btn,`{background: #772ce885;}`); };
            init_btn.onmouseleave = ()=> { inlineStyler(init_btn,`{background: transparent;}`); };
            init_btn.onclick = ()=> { popOutFollowSection(init_btn); };
        });
        // collapse-toggle
    }
    setFollowBarPopOut()

    function popOutFollowSection(elm){
        // let main = document.getElementById('sideNav');
        var sect = document.getElementById(elm.getAttribute('popout_container_id'));
        inlineStyler(sect,`{position: fixed; z-index: ${topZIndexer()};}`);

        var resize_elm = sect?.firstChild;
        a(resize_elm,[['id','nav_grid_resize_container'],['foot_resizer_id','nav_foot_resizer']])//resize_container
        inlineStyler(resize_elm,`{width: 450px;}`);

        var grid_elm = sect.getElementsByClassName('side-bar-contents')?.[0]?.firstChild?.firstChild;
        a(grid_elm,[['id','nav_grid_container']]);
        inlineStyler(grid_elm,`{display: grid; grid-template-columns:${Array.from(document.getElementsByClassName('side-nav-section')).map(n=> ' 1fr').reduce((a,b)=> a+b)}; grid-gap: 0px;}`);
        // style="width: 400px;" 
        // inlineStyler(document.getElementsByClassName('side-bar-contents')?.[0],`{display:grid; grid-template-columns: 1fr 1fr 1fr; grid-gap:0px;}`);

        Array.from(document.getElementsByClassName('side-nav-header')).forEach(sn=> {
            a(sn,[['class','mover-top-gradient']]);
            inlineStyler(sn,`{display: grid; grid-template-columns: 1fr;}`);
            a(sn,[['panel_move_id',`sideNav`],['id',`sideNav`]]);
            inlineStyler(sn,`{cursor: move;}`);
            sn.onmouseover = dragElement;
        });        
        Array.from(document.getElementsByClassName('nav_text')).forEach(sn=> {
            let head_text_snake_cased = sn.innerText.toLowerCase().replace(/\s+/g,'_');
            inlineStyler(sn,`{transform: translate(0px,6px); font-size: 10px;}`);
            // sn.parentElement.onmouseover = dragElement;
        });
        Array.from(document.getElementsByClassName('nav_pop_btn')).forEach(sn=> {
            sn.outerHTML = '';
        });

        // var nav_input_holder = document.getElementsByClassName('side-nav-search-input')?.[0];
        // inlineStyler(nav_input_holder,`{padding:0px;}`);
        
        var footer_elm = document.createElement('div');
        a(footer_elm,[['class','mover-bottom-gradient'],['id',`nav_footer_holder`]]);
        // nav_input_holder.appendChild(footer_elm);
        resize_elm.appendChild(footer_elm);
        inlineStyler(footer_elm,`{height: 19px; display: grid; grid-template-columns: 1fr 19px;}`);

        var footer_text = document.createElement('div');
        footer_elm.appendChild(footer_text);
        a(footer_text,[['panel_move_id',`sideNav`],['id',`nav_footer_move`]]);
        inlineStyler(footer_text,`{width: calc(100% - 19px); cursor: move;}`);
        // footer_text.onmouseover = dragElement;

        var foot_resizer = document.createElement('div');
        a(foot_resizer,[['id',`nav_foot_resizer`],['class',`nav_foot_resizer foot_resizer`],['resize_container',`nav_grid_resize_container`],['style_info','display: grid; grid-template-columns: 1fr 20px; grid-gap: 10px;']]);
        inlineStyler(foot_resizer,`{width: 19px; cursor: nw-resize; z-index: ${topZIndexer()};}`);
        foot_resizer.innerHTML = icons.resize;
        footer_elm.appendChild(foot_resizer)
        foot_resizer.onmouseover = adjustElementSize;
    }


    function popOutVideo(){ 
        if(document.getElementById('video_mover_header')) document.getElementById('video_mover_header').outerHTML = '';
        let follower_nav_panel = document.getElementById('nav_cont_holder_resize');
        let follower_nav_panel_rect = follower_nav_panel.getBoundingClientRect();
        let topnav_rect = document.getElementsByClassName('top-nav')?.[0]?.getBoundingClientRect();
        let elm = document.getElementsByClassName('persistent-player')?.[0];
        a(elm,[['id','video_main_content_holder'],['default_width',elm.getBoundingClientRect().width],['default_height',elm.getBoundingClientRect().height]]);
        inlineStyler(elm,'{position: fixed; top: '+topnav_rect.height+'px; left: '+'240'+'px; z-index:'+topZIndexer()+'; width: '+(window.innerWidth - 600)+'px;}');
        let mover = document.createElement('div');
        inlineStyler(mover,'{height: 28px; width: 100%; cursor: move; text-align: center; user-select: none;}');
        a(mover,[['id','video_mover_header'],['class','mover-top-gradient'],['panel_resize_id','video_main_content_holder'],['panel_move_id','video_main_content_holder']]);
        elm.insertBefore(mover,elm.firstChild);
        mover.innerText = ('Watching '+ (/twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1] ? /twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1] : 'Video') );
        mover.onmouseover = dragElement;

        var video_footer_elm = document.createElement('div');
        a(video_footer_elm,[['class','mover-bottom-gradient'],['id','video_footer_elm']]);
        inlineStyler(video_footer_elm,`{display: grid; grid-template-columns: ${Math.floor(elm.getBoundingClientRect().width - 15)}px 19px; grid-gap: 0px;  border-bottom-left-radius: 0.2em; border-bottom-right-radius: 0.2em; height: ${15}px; z-index: ${topZIndexer()};}`);
        elm.appendChild(video_footer_elm);

        var footertext = document.createElement('div');
        video_footer_elm.appendChild(footertext);
        a(footertext,[['panel_move_id','video_main_content_holder']]);
        inlineStyler(footertext,`{width: ${Math.floor(main_chat_holder.getBoundingClientRect().width - 15)}px; cursor: move;}`);
        footertext.onmouseover = dragElement;

        var resizer = document.createElement('div');
        a(resizer, [['panel_resize_id','video_main_content_holder'],['id','video_footer_resizer'],['panel_resize_height_id','video_main_content_holder'],['style', `width: ${15}px; height: ${15}px; background: transparent; cursor: nw-resize; text-align: left; border-radius: 0.4em;`]]);
        video_footer_elm.appendChild(resizer);
        resizer.innerHTML = icons.resize_hover;
        resizer.onmouseover = adjustElementSize;
    }
    // popOutVideo()


}

initResizePopOutComponents();



