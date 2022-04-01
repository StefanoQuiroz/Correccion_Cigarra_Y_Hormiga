let JSON_CUENTO = {
    nombre:"La cigarra y la hormiga",
    tipo:"Cuento de hadas",
    descripcion:"Adaptación libre de una fábula atribuida a Esopo. La cigarra se sorprende diariamente de lo trabajadora que es la hormiga, ella prefiere descansar y cantar durante todo el verano, pero la hormiga no se detiene en su labor hasta que llega el invierno helado. Conoce a estos dos pequeños personajes tan distintos del otro, pero que al final ambos tienen algo valioso que entregar.",
    creditos:[
                ["Adaptación:","Copec"],
                ["Ilustraciones:","Copec"],
                ["Narración:","Nicole Castillo Ramírez"],
                ["Arreglos musicales:","Copec"],
                ["Edición a cargo de:","Copec"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/cigarra_hormiga/ch_portada.jpg",
        "img/cigarra_hormiga/ch_esc_0_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_1_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_2_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_2_fondo_fin.jpg",
        "img/cigarra_hormiga/ch_esc_3_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_4_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_5_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_6_fondo.jpg",
        "img/cigarra_hormiga/ch_esc_7_fondo.jpg",
        "img/cigarra_hormiga/ch_sprite.png",
        "img/cigarra_hormiga/00_hormiga_camina_A_0.png",
        "img/cigarra_hormiga/00_hormiga_camina_B_0.png",
        "img/cigarra_hormiga/01_cigarra_toca.png",
        "img/cigarra_hormiga/01_hormiga.png",
        "img/cigarra_hormiga/02_pajaros.png",
        "img/cigarra_hormiga/03_hormiga.png",
        "img/cigarra_hormiga/05_cigarra.png",
        "img/cigarra_hormiga/05_viento.png",
        "img/cigarra_hormiga/06_puerta.jpg",
        "img/cigarra_hormiga/07_cigarra.png",
        "img/cigarra_hormiga/07_fuego.png",
    ], 
    fx_sonido:[
        {nombre:"marcha_hormigas",url:"audio/cigarra_hormiga/fx/marcha_hormigas.mp3"},
        {nombre:"musica_banjo_loop",url:"audio/cigarra_hormiga/fx/musica_banjo_loop.mp3"},
        {nombre:"hojas_caen",url:"audio/cigarra_hormiga/fx/hojas_caen.mp3"},
        {nombre:"init_lluvia",url:"audio/cigarra_hormiga/fx/init_lluvia.mp3"},
        {nombre:"lluvia",url:"audio/cigarra_hormiga/fx/lluvia.mp3"},
        {nombre:"viento",url:"audio/cigarra_hormiga/fx/viento.mp3"},
        {nombre:"viento_entre_las_hojas",url:"audio/cigarra_hormiga/fx/viento_entre_las_hojas.mp3"},
        {nombre:"knock",url:"audio/cigarra_hormiga/fx/knock.mp3"},
        {nombre:"pisadas_nieve",url:"audio/cigarra_hormiga/fx/pisadas_nieve.mp3"},
        {nombre:"chirrido_puerta",url:"audio/cigarra_hormiga/fx/chirrido_puerta.mp3"},
        {nombre:"marcha_hormigas_escena_00",url:"audio/cigarra_hormiga/fx/marcha_hormigas_escena_00.mp3"},
        {nombre:"sorbo",url:"audio/cigarra_hormiga/fx/sorbo.mp3"},
        {nombre:"reaccion_cigarra",url:"audio/cigarra_hormiga/fx/reaccion_cigarra.mp3"},
        {nombre:"martilleo_de_madera",url:"audio/cigarra_hormiga/fx/martilleo_de_madera.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/cigarra_hormiga/ch_mini_0.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_01.mp3",
            parrafos:
            [
                {
                    texto: '"¿Te has fijado en lo trabajadoras que son las hormigas?',
                    tiempo:[0,4,6]
                },
                {
                    texto: 'En el bosque de este cuento vivía una hormiga que pasaba el verano trabajando y trabajando',
                    tiempo:[4.5,12.95,1]
                },
                {
                    texto: 'para juntar alimento que le permitiera sobrevivir durante los fríos meses de invierno."',
                    tiempo:[13.45,20.2,0.5]
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/cigarra_hormiga/ch_mini_1.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_02.mp3",
            parrafos:
            [
                {
                    texto: 'En el mismo bosque, la cigarra cantaba al sol acompañada de su guitarra.',
                    tiempo:[0,6.5,5]
                },
                {
                    texto: '“Amiga, no te canses. Ven y canta conmigo.”',
                    tiempo:[7,12.7,2]
                },
                {
                    texto: 'Pero la hormiga seguía, granito a granito, llenando la despensa de su hormiguero.',
                    tiempo:[13.2,20.5,1]
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/cigarra_hormiga/ch_mini_2.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_03.mp3",
            parrafos:
            [
                {
                    texto: 'El verano pasó,',
                    tiempo:[0,1.8,1.0]
                },
                {
                    texto: 'y los pájaros comenzaron a volar en busca de un lugar más cálido para anidar.',
                    tiempo:[2.8,8.9,1.0]
                }/* ,
                {
                    texto: '',
                    tiempo:[9.4,10.4,8.0]
                }  */
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/cigarra_hormiga/ch_mini_3.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Las primeras hojas del otoño anunciaron que el frío',
                    tiempo:[0,4.4,4]
                },
                {
                    texto: 'no tardaría en llegar.',
                    tiempo:[4.9,6.8,1]
                },
                {
                    texto: 'La laboriosa hormiga terminó de ordenar los granos que había juntado durante el verano.',
                    tiempo:[7.3,13.6,2]
                },
            ]
        },
        /* {
            nombre:"Escena 5",
            miniatura:"img/cigarra_hormiga/ch_mini_4.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_05.mp3",
            parrafos:
            [
                {
                    texto: 'Vino la lluvia,',
                    tiempo:[0,1.7,9]
                },
                {
                    texto: 'el granizo,',
                    tiempo:[2.3,3.6,0.5]
                },
                {
                    texto: 'y el viento,',
                    tiempo:[4.1,5.3,0.3]
                },
                {
                    texto: 'que se llevó hasta la última hoja de los árboles.',
                    tiempo:[5.8,9.5,0.3]
                },
            ]
        }, */
        {
            nombre:"Escena 5",
            miniatura:"img/cigarra_hormiga/ch_mini_5.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_06.mp3",
            parrafos:
            [
                {
                    texto: 'Vino la lluvia,',
                    tiempo:[0,1.7,7]
                },
                {
                    texto: 'el granizo,',
                    tiempo:[2.3,3.6,0.5]
                },
                {
                    texto: 'y el viento,',
                    tiempo:[4.1,5.3,0.5]
                },
                {
                    texto: 'que se llevó hasta la última hoja de los árboles.',
                    tiempo:[5.8,9.5,0.5]
                },
                {
                    texto: 'Luego',
                    tiempo:[10,10.8,0.5]
                },
                {
                    texto: 'llegó la nieve.',
                    tiempo:[11.3,12.8,1]
                },
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/cigarra_hormiga/ch_mini_6.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_07.mp3",
            parrafos:
            [
                {
                    texto: '“¡Hormiga, por favor, ayúdame! Me estoy congelando y no encuentro nada para comer.”',
                    tiempo:[0,8.5,5]
                },
                {
                    texto: 'La hormiga acogió a la cigarra y le dio de comer.',
                    tiempo:[9,13.3,2]
                },                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/cigarra_hormiga/ch_mini_7.jpg",
            audio:"audio/cigarra_hormiga/ch_escena_08.mp3",
            parrafos:
            [
                {
                    texto: '“Gracias por ayudarme, hormiga.”<br>- le dijo la cigarra.',
                    tiempo:[0,4.7,2]
                },
                {
                    texto: '“He aprendido que tu trabajo es importante.”',
                    tiempo:[5.2,9,1]
                },
                {
                    texto: '“Cigarra, tu trabajo también es importante”<br>– le dijo la hormiga.',
                    tiempo:[9.5,15,1]
                },
                {
                    texto: '“Tu voz y tu guitarra me acompañaron mientras trabajaba y me alegraron el verano.”',
                    tiempo:[15.5,22,1]
                },
            ]
        },
        
    ]    
};

let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        let contbrillos = $('#escena_00 .brillos');
        contbrillos.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1), 'brillo', 'sprite'));
        let contparticulas = $('#escena_00 .particulas');
        contparticulas.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1), 'particula', 'sprite'));
        let conthormigas = $('#escena_00 .hormigas');
        conthormigas.append(ANIM.creaElementos(4, ANIM.getArrayLetras(1), 'hormiga', 'scale2'));
        conthormigas.append(ANIM.creaElementos(5, ANIM.getArrayLetras(1,1), 'hormiga', 'scale2'));
        
        let conthojas02 = $('#escena_02 .hojas');
        conthojas02.append(ANIM.creaElementos(12, ANIM.getArrayLetras(3), 'hoja', 'sprite'));
        
        let conthojas03 = $('#escena_03 .hojas');
        conthojas03.append(ANIM.creaElementos(9, ANIM.getArrayLetras(3), 'hoja', 'sprite'));
        
        /* let contchubascos = $('#escena_04 .chubascos');
        contchubascos.append(ANIM.creaElementos(1, ANIM.getArrayLetras(1), 'gota', 'sprite'));
        
        let contlluvia = $('#escena_04 .lluvia');
        contlluvia.append(ANIM.creaElementos(30, ANIM.getArrayLetras(2), 'gota', 'sprite')); */
        
        let contnieve = $('#escena_04 .nieve');
        contnieve.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1,2), 'copo', 'sprite'));
        let contnieve2 = $('#escena_04 .nieve2');
        contnieve2.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1,3), 'copo', 'sprite'));
        
        let contnieveB = $('#escena_05 .nieve');
        contnieveB.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1,2), 'copo', 'sprite'));
        let contnieveB2 = $('#escena_05 .nieve2');
        contnieveB2.append(ANIM.creaElementos(15, ANIM.getArrayLetras(1,3), 'copo', 'sprite'));
        
    },
    creaElementos:(cant, arr2, clase, claseAdicional ='') => {
        let count = -1;
        let arr1 = Array(cant).fill(cant);
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="${claseAdicional} ${clase} ${clase}${letra} ${clase}${(i)}"></div>`;
        });
        return newArr.join("");
    },
    getArrayLetras:(cant, from = 0) =>{
        let arrTotal = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
        return arrTotal.slice(from, from+cant);
    },
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = new TimelineMax({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            },waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].addCallback(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                },waitFor+fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound:() => {
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    arrAnimacionesSprite:[],
    arrTlParpadeos:[],
    creaParpadeo:(escena = '01', quien = 'mujer', t = 4) => {
        if(!ANIM[`tl_parpadeo_${escena}_${quien}`]){
            ANIM[`tl_parpadeo_${escena}_${quien}`] = new TimelineMax({repeat:-1});
            ANIM[`tl_parpadeo_${escena}_${quien}`]
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0})
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:1, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:1, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0, immediateRender:false},'+=0.1')
                .addCallback(function(){},`+=${t}`)
            ;
            ANIM.arrTlParpadeos.push(ANIM[`tl_parpadeo_${escena}_${quien}`]);
        }
        ANIM[`tl_parpadeo_${escena}_${quien}`].resume();  
    },
    pauseAnimaciones:() => {
        ANIM.arrAnimacionesSprite.map((item, i) => {
            item.tl.pause();
        });
        
        ANIM.arrTlParpadeos.map((item, i) => {
            item.pause(0.1);
        });
//        
        try{ANIM.tl_caminan_hormigas00.pause();}catch(err){}
        try{ANIM.tl_hormigas01.pause();}catch(err){}
        try{ANIM.tl_gota_solitaria.pause();}catch(err){}
        try{ANIM.tl_viento_05.pause();}catch(err){}
    },
    getTlAnimacionesSprite:(escena,clase,frames = 2, timeOn=1, timeOff = 0, repeatOn=1, yoyo=false, repeatOff = -1) => {
        if(!ANIM[`tl_${clase}_${escena}`]){
            ANIM[`tl_${clase}_${escena}`] = new TimelineMax({repeat:repeatOff});
            ANIM[`tl_${clase}_${escena}`]
                .fromTo(`#escena_${escena} .${clase}`,timeOn,{backgroundPosition:'0% 0%'},{backgroundPosition:`-${(frames-1)*100}% 0%`, ease:
SteppedEase.config(frames-1),repeat:repeatOn,yoyo:yoyo})
            .addCallback(function(){/*nada*/},`+=${timeOff}`)
            ;
            ANIM.arrAnimacionesSprite.push({name:`tl_${clase}_${escena}`, tl:ANIM[`tl_${clase}_${escena}`]});
        }
        return ANIM[`tl_${clase}_${escena}`];
    },
    animParticulas:(escena = '00', clase='brillo', maxX = 1920, maxY = 540) => {
            let bub = [...document.getElementById(`escena_${escena}`).getElementsByClassName(clase)];
//            console.log(typeof bub, bub);
            bub.map((item, i) => {
                item.style.left = `${Utils.randomInt(0,maxX)}px`;
                item.style.top = `${Utils.randomInt(0,maxY)}px`;
                let alpha = Utils.randomInt(3,14)/10;
                let scale = Utils.randomInt(3,14)/10;
                TweenMax.set(item,{scale:scale, alpha:alpha});
                ANIM.animParticula(item,escena);
            });
    },
    animParticula:(div, escena = '00') => {
        TweenMax.killTweensOf(div);
        
        if(escena === `0${Player.escena_actual}`){
            
            let xFin = Utils.randomInt(0,400)-200;
            let yFin = Utils.randomInt(0,400)-200;
            let t = Utils.randomInt(700,1500)/100;
            
            
            TweenMax.to(div,t,{x:xFin, y:yFin, ease:Power0.easeNone, onComplete:function(a,b){
                ANIM.animParticula(a,b);
            }, onCompleteParams:[div, escena]});
            
        }
    },
    randomPathHoja:(maxX = 2000, maxY=1080) => {
        let cant = Math.floor(Utils.randomInt(2,6)/2) + 1;
        let arr = Array(cant).fill(cant);
        let maxAngle = Utils.randomInt(0,1080);
        
        let path = arr.map((item, i) => {
            let x = Utils.randomInt(0,maxX);
            let y = Math.floor(maxY/cant)*i;
            let rX = Utils.randomInt(0,maxAngle)-maxAngle/2;
            let rY = Utils.randomInt(0,maxAngle)-maxAngle/2;
            let rZ = Utils.randomInt(0,maxAngle)-maxAngle/2;
            
            return {x:x, y:y, rotationX:rX, rotationY:rY, rotationZ:rZ};
        });
        
//        path.unshift({x:0, y:0});
        path.push({
            x: Utils.randomInt(0,maxX), 
            y:maxY,  
            rotationX:Utils.randomInt(0,maxAngle)-maxAngle/2,  
            rotationY:Utils.randomInt(0,maxAngle)-maxAngle/2,
            rotationZ:Utils.randomInt(0,maxAngle)-maxAngle/2
        });
        
        return path;
    },
    animaHojas:(escena = '00', maxX = 1920, maxY = 1080) => {
            let bub = [...document.getElementById(`escena_${escena}`).getElementsByClassName('hoja')];
            bub.map((item, i) => {
                ANIM.animaHoja(item, escena, maxX, maxY);
            });
    },
    animaHoja:(div, escena = '02', maxX = 1920, maxY = 1080) => {
        console.log(div);
        TweenMax.killTweensOf(div);
        
        if(escena === `0${Player.escena_actual}`){
            let values = ANIM.randomPathHoja(maxX,maxY);
            let t = Utils.randomInt(2,5)*values.length;
            TweenMax.set(div,{x:Utils.randomInt(0,maxX),y:0, scale:Utils.randomInt(5,9)/10});
            TweenMax.to(div,t,{ bezier:{curviness:1.25, autoRotate:false,
                        values:values},
                        ease:Power0.easeNone,
                        onComplete:function(a,b,c,d){ANIM.animaHoja(a,b,c,d);},
                        onCompleteParams:[div,escena,maxX,maxY]
                      }); 
         }
    },
    hojasCaen:(escena = '03', maxX = 1920, maxY = 1080, scale=3) => {
            let bub = [...document.getElementById(`escena_${escena}`).getElementsByClassName('hoja')];
            bub.map((item, i) => {
                ANIM.hojaCae(item, escena, maxX, maxY, scale);
            });
    },
    hojaCae:(div, escena = '03', maxX = 1920, maxY = 1080, scale=3) => {
        TweenMax.killTweensOf(div);
        
        if(escena === `0${Player.escena_actual}`){
//            let values = ANIM.randomPathHoja(maxX,maxY);
            let t = Utils.randomInt(40,100)/20;
            
            let cualHoja = ANIM.getHoja(ANIM.getArrayLetras(3), div);
            let rotationFinal = 0;
            let to = '50% -50%';
            let yDif = Utils.randomInt(0,50);
            let ease = 'Power1.easeOut';
            switch (cualHoja){
                case 'A':
                    TweenMax.set(div, {rotation:0, transformOrigin:to});
                    TweenMax.to(div, t,{rotation:40, transformOrigin:to});
                    
                    break;
                 case 'B':
//                    to = '0% 50%';
                    TweenMax.set(div, {rotation:0, transformOrigin:to});
                    TweenMax.to(div, t,{rotation:40, transformOrigin:to});
                    break;
                case 'C':
                    rotationFinal = 20;
                    yDif = Utils.randomInt(70,200);
                    ease = 'Power1.easeIn';
                    TweenMax.set(div, {rotation:0, transformOrigin:to});
                    TweenMax.to(div, t,{rotation:80, transformOrigin:to});
                     break;

            }
            
            TweenMax.set(div,{alpha:1,x:Utils.randomInt(0,maxX),y:0-(div.offsetHeight*scale), scale:scale, transformOrigin:to});
            TweenMax.to(div,t,{ y:maxY+yDif, ease:Power0.easeNone, transformOrigin:to}); 
            TweenMax.to(div,1,{ rotation:rotationFinal, delay:t, transformOrigin:to, ease:[ease]}); 
            //Solo una vez caen las hojas
           /*  TweenMax.to(div,1,{ alpha:0, delay:t+2,
                        ease:Power0.easeNone,
                        onComplete:function(a,b,c,d,e){ANIM.hojaCae(a,b,c,d,e);},
                        onCompleteParams:[div,escena,maxX,maxY,scale]
                      }); */ 
         }
    },
    getHoja:(arr, div) => {
        let letra = arr.map((item, i) => {
            if (div.classList.contains(`hoja`+item)){
                return item;
            };
        }).filter(item => item !== undefined);
//        console.log(letra);
        return letra[0];
    },
    superLoop:(cancion, tiempo, volume = 1) => {
          ANIM.waitForSound(cancion,0,tiempo,0,0,volume,false);
    },
    playBanjo:() => {
//        Player.playSoundFX('musica_banjo_loop',true);
        ANIM.waitForSound('musica_banjo_loop',0,29.7,0,0,0.4,false);
//        ANIM.fadeVolume('musica_banjo_loop',0,1,4);
    },
    playRuidoDeViento:() => {
        //        Player.playSoundFX('musica_banjo_loop',true);
                ANIM.waitForSound('viento_entre_las_hojas',0,29.7,0,0,1,false);
        //        ANIM.fadeVolume('musica_banjo_loop',0,1,4);
    },
    gotasCaen:(escena = '04', contenedor = 'chubascos', clase = 'gota', maxX = 1920, maxY = 1080, xCant=-300, scaleMin = 0.9, scaleMax = 1, velocity = 1) => {
            let bub = [...document.getElementById(`escena_${escena}`).getElementsByClassName(contenedor)[0].getElementsByClassName(clase)];
            bub.map((item, i) => {
                ANIM.gotaCae(item, escena, maxX, maxY, xCant,scaleMin,scaleMax, velocity);
            });
    },
    gotaCae:(div, escena = '04', maxX = 1920, maxY = 1080, xCant=-300, scaleMin = 0.9, scaleMax = 1, velocity = 1) => {
        TweenMax.killTweensOf(div);
        
        if(escena === `0${Player.escena_actual}`){
            let xInit = Utils.randomInt(0,maxX);
            let t = Utils.randomInt(10,20)/10;
            let scale = Utils.randomInt(scaleMin*100, scaleMax*100)/100;
            
            TweenMax.set(div,{x:xInit,y:0-(div.offsetHeight), scale:scale});
            TweenMax.to(div,t*Math.abs(velocity),{ y:maxY, x:xInit+xCant, ease:Power1.easeIn,
                        ease:Power0.easeNone,
                        onComplete:function(a,b,c,d,e,f,g,h){ANIM.gotaCae(a,b,c,d,e,f,g,h);},
                        onCompleteParams:[div,escena,maxX,maxY,xCant, scaleMin, scaleMax, velocity]
                      }); 
         }
    },
    animaEscena0:() => {
        if(!ANIM.tl_caminan_hormigas00){
            ANIM.tl_caminan_hormigas00 = new TimelineMax({repeat:1});
            ANIM.tl_caminan_hormigas00
            .fromTo('#escena_00 .hormigas', 2,{x:-700},{x:0, repeat:-1, ease:Power0.easeNone})
            ;
        }
        
        ANIM.tl_caminan_hormigas00.resume();
        
        let hormigaA = ANIM.getTlAnimacionesSprite('00','hormigaA',2,1,0);
        hormigaA.resume(); 
        let hormigaB = ANIM.getTlAnimacionesSprite('00','hormigaB',2,1,0);
        hormigaB.resume();
        
        
    }, 
    animaEscena1:() => {
        if(!ANIM.tl_hormigas01){
            ANIM.tl_hormigas01 = new TimelineMax({repeat:-1});
            ANIM.tl_hormigas01
           .fromTo('#escena_01 .hormiga',1,{backgroundPosition:'-200% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(1), immediateRender:false})
            ;
        }
        ANIM.tl_hormigas01.resume();
    },
    /* animaEscena4:() => {
        if(!ANIM.tl_gota_solitaria){
            ANIM.tl_gota_solitaria = new TimelineMax({repeat:-1, repeatDelay:1});
            ANIM.tl_gota_solitaria
            .set('#escena_04 .gotea_en_mano .gota_grande',{alpha:1})
            .fromTo('#escena_04 .gotea_en_mano .gota_grande',1,{x:0, y:0},{x:-200, y:692, ease:Power1.easeIn})
            .set('#escena_04 .gotea_en_mano .gota_grande',{alpha:0})
            
            .set('#escena_04 .gotea_en_mano .gota_chicaA',{alpha:1, scale:0.3, rotation:100, x:0, y:0, transformOrigin:'top right'})
            .set('#escena_04 .gotea_en_mano .gota_chicaB',{alpha:1, scale:0.3, rotation:200, x:0, y:0, transformOrigin:'top right'})
            .set('#escena_04 .gotea_en_mano .gota_chicaC',{alpha:1, scale:0.3, rotation:300, x:0, y:0, transformOrigin:'top right'})
            .set('#escena_04 .gotea_en_mano .gota_chicaD',{alpha:1, scale:0.3, rotation:400, x:0, y:0, transformOrigin:'top right'})
            .set('#escena_04 .gotea_en_mano .gota_chicaE',{alpha:1, scale:0.3, rotation:500, x:0, y:0, transformOrigin:'top right'})
            .to('#escena_04 .gotea_en_mano .gota_chicaA',0.5,{alpha:0, scale:0.3, rotation:100, x:-50, y:-50, transformOrigin:'top right'})
            .to('#escena_04 .gotea_en_mano .gota_chicaB',0.5,{alpha:0, scale:0.3, rotation:200, x:40, y:-40, transformOrigin:'top right'},'-=0.5')
            .to('#escena_04 .gotea_en_mano .gota_chicaC',0.5,{alpha:0, scale:0.3, rotation:300, x:60, y:60, transformOrigin:'top right'},'-=0.5')
            .to('#escena_04 .gotea_en_mano .gota_chicaD',0.5,{alpha:0, scale:0.3, rotation:400, x:-60, y:60, transformOrigin:'top right'},'-=0.5')
            .to('#escena_04 .gotea_en_mano .gota_chicaE',0.5,{alpha:0, scale:0.3, rotation:500, x:-40, y:-100, transformOrigin:'top right'},'-=0.5')
            .addCallback(function(){},'+=0.3')
            ;
        }
        ANIM.tl_gota_solitaria.resume();
    }, */
    animaEscena4:() => {
           
        if(!ANIM.tl_viento_04){
            ANIM.tl_viento_04 = new TimelineMax({repeat:-1})
            ANIM.tl_viento_04
            .addCallback(function(){
                document.getElementById('escena_04').getElementsByClassName('viento')[0].style.left = `${Utils.randomInt(0,1520)-400}px`;
                document.getElementById('escena_04').getElementsByClassName('viento')[0].style.top = `${Utils.randomInt(100,700)}px`;
                TweenMax.set('#escena_04 .viento',{alpha:Utils.randomInt(30,80)/100});
            },'+=1')
            .fromTo('#escena_04 .viento',0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addCallback(function(){
                TweenMax.set('#escena_04 .viento',{alpha:0});
            })
            ;
        }
        ANIM.tl_viento_04.resume(); 
        
        
        if(!ANIM.tl_ventisca_04){
            ANIM.tl_ventisca_04 = new TimelineMax({repeat:-1})
            ANIM.tl_ventisca_04
            .addCallback(function(){
                let div = document.getElementById('escena_04').getElementsByClassName('ventisca')[0];
                div.style.top = `${Utils.randomInt(0,(1080-div.offsetHeight))}px`;
            },'+=1')
            .fromTo('#escena_04 .ventisca',10,{x:1920},{x:-4440, ease: Power0.easeNone})
            
            ;
        }
        ANIM.tl_ventisca_04.resume();
    }, 
    animaEscena6:() => {
        // getTlAnimacionesSprite:(escena,clase,frames = 2, timeOn=1, timeOff = 0, repeatOn=1, yoyo=false, repeatOff = -1) => {
        let fuego = ANIM.getTlAnimacionesSprite('06','fuego',3,0.5);
        fuego.resume(); 
    },
    init:() => {
        ANIM.creapartes();
        Player.creaMainTL();
    

        /* let preAnimacionEscena3 = new TimelineMax();
        preAnimacionEscena3
            .addCallback(function(){
                ANIM.getTlAnimacionesSprite('02', 'pajaros',2,1,0,1, false, 10);
            })
            .fromTo('#escena_02 .pajaros', 10,{rotation:45, x:0, y:0},{rotation:45, x:-1700, y:-1500, ease:Power0.easeNone})
        ANIM.main_tl.add(preAnimacionEscena3, '2_1+=6.1'); */

        ANIM.main_tl.addCallback( function(){
            ANIM.animParticulas('00','brillo');
            ANIM.animParticulas('00','particula',1920,700);
            Player.playSoundFX('marcha_hormigas');
            Player.cambiaVolume('marcha_hormigas',0.4);
        },'escena_0+=0.01'); 

        ANIM.main_tl.addCallback( function(){
            Player.playSoundFX('musica_banjo_loop');
            //Player.cambiaVolume('musica_inicio', 0.2);
            ANIM.fadeVolume('musica_banjo_loop',1,0,5); //0.3
        } ,'escena_1+=0.01');

        /* ANIM.main_tl.addLabel('1_0_audio', 'escena_1+=0.1');
        ANIM.main_tl.addLabel('1_0_audio_fade', '1_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_banjo_loop');
            Player.cambiaVolume('musica_banjo_loop',0.4);            
        }, '1_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_banjo_loop',0.4,0,7.5);
        }, "1_0_audio_fade"); */
        
        ANIM.main_tl.addCallback( function(){ANIM.fadeVolume('marcha_hormigas',1,0,2);},'0_0-=2');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena0();},'0_0+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena0();},'0_1+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena0();},'0_2+=0.01');
        
        
        ANIM.main_tl.add( TweenMax.fromTo('#escena_01 .hormiga', 6,{x:0,y:0},{x:-332,y:298, ease:Power0.easeNone}),'fin_escena_1-=6.1');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_01 .hormiga',1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2),repeat:5}),'fin_escena_1-=6.1');


        ANIM.main_tl.addCallback( function()
        
        {
            ANIM.hojasCaen('03', 1700,900,2.5);
            Player.playSoundFX('hojas_caen',true);
        },'escena_3+=0.01');
        ANIM.main_tl.addCallback( function(){},'3_0-=2');
        
        

        ANIM.main_tl.addCallback( function(){
            Player.playSoundFX('init_lluvia');
            ANIM.fadeVolume('init_lluvia',1,0,7); //0.3
            Player.playSoundFX('viento');
            ANIM.fadeVolume('viento',1,0,7); //0.3
            //ANIM.gotasCaen();
            //ANIM.animaEscena4();
        },'escena_4+=0.01');
        
        //ANIM.main_tl.addCallback( function(){ANIM.fadeVolume('init_lluvia',1,0,4);},'4_0-=2');
        
        /* ANIM.main_tl.addCallback( function(){ANIM.animaEscena4();},'4_0+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena4();},'4_1+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena4();},'4_2+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena4();},'4_3+=0.01'); */
        
       
        ANIM.main_tl.addCallback( function(){
            ANIM.animaEscena4();
            ANIM.gotasCaen('04','nieve', 'copo',1800,1080,-400,0.4,1,1);
            ANIM.gotasCaen('04','nieve2', 'copo',1800,1080,-400,0.4,1,2);
        },'escena_5+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena5();},'4_0+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena5();},'4_1+=0.01');
        
        
        ANIM.main_tl.addCallback( function(){
            ANIM.gotasCaen('05','nieve', 'copo',1800,1080,-400,0.4,1,1);
            ANIM.gotasCaen('05','nieve2', 'copo',1800,1080,-400,0.4,1,2);
            ANIM.creaParpadeo('05','cigarra',Utils.randomInt(30,70)/10);
            try{   ANIM.tl_parpadeo_05_cigarra.pause(0.1); } catch(err){}
        },'escena_5+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena4();},'5_0+=0.01');
        ANIM.main_tl.addCallback( function(){Player.playSoundFX('knock',false,1.2); Player.resetSubtitulos();},'5_0-=4.9');
        ANIM.main_tl.add(TweenMax.to('#escena_05 .puerta',2,{scaleX:0, transformOrigin:'center right', ease:Power1.easeIn}),'5_0-=4');
        ANIM.main_tl.addCallback( function(){Player.playSoundFX('chirrido_puerta')},'5_0-=3');
        
        
        
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena6();},'6_0+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena6();},'6_1+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena6();},'6_2+=0.01');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena6();},'6_3+=0.01');
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
            ANIM.animaEscena0();
        },"escena_0"); 
     
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente(); 
            ANIM.main_tl.pause(); 
//            ANIM.interactividad(0); 
            ANIM.animaEscena0();
            Player.playSoundFX('marcha_hormigas',true);
            Player.playSoundFX('musica_banjo_loop',true);
            Player.cambiaVolume('musica_banjo_loop',0.4);
            Player.tooglePlayPauseIco(); 
            Player.resetSubtitulos(); 
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.animaEscena1();
            ANIM.interactividad(1);
//            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            if(!ANIM.tl_pajaro_03){
                ANIM.tl_pajaro_03 = new TimelineMax();
                ANIM.tl_pajaro_03
                    .addCallback(function(){
                        ANIM.getTlAnimacionesSprite('02', 'pajaros',2,1,0,1, false, 10);
                    })
                    .fromTo('#escena_02 .pajaros', 10,{rotation:45, x:0, y:0},{rotation:45, x:-1700, y:-1500, ease:Power0.easeNone})
            }
            ANIM.playRuidoDeViento();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
        },"escena_3");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.playSoundFX("viento");
            Player.cambiaVolume("viento",0.15);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        /* ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4"); */
        
       /*  ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            ANIM.superLoop('init_lluvia',10);
            ANIM.gotasCaen();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4"); */
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            ANIM.superLoop('viento',36, 0.3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log("fin_escena 4");
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            ANIM.superLoop('viento',36);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_5");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
            ANIM.animaEscena6();
        },"escena_6");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            ANIM.animaEscena6();
            ANIM.playBanjo();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        // getTlAnimacionesSprite:(escena,clase,frames = 2, timeOn=1, timeOff = 0, repeatOn=1, yoyo=false, repeatOff = -1) => {
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.playBanjo();
                let toca = ANIM.getTlAnimacionesSprite('01', 'cigarra', 3,0.5,0,1,true);
                toca.play();
            })
            .addCallback(function(){
               ANIM.fadeVolume('musica_banjo_loop',1,0,1.7);
            },'+=11')
            .addCallback(function(){
                try{    ANIM.wait_sound_musica_banjo_loop.pause(0); } catch (err){}
                let toca = ANIM.getTlAnimacionesSprite('01', 'cigarra', 3,0.5,0,1,true);
                toca.pause();
                Player.stopAudioParrafo();
            },'+=1.7')
            .addLabel('final')
            ;
        ANIM.anim_interact_1.pause();
        
       
        ANIM.anim_interact_2 = new TimelineMax();
        ANIM.anim_interact_2
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('hojas_caen',true);
                ANIM.animaHojas('02', 1700,1280);
                ANIM.getTlAnimacionesSprite('02', 'pajaros',2,1,0,1, false, 10);
            })
            .fromTo('#escena_02 .fondoB',4,{alpha:0},{alpha:1})
            .fromTo('#escena_02 .pajaros', 10,{rotation:45, x:0, y:0},{rotation:45, x:-1700, y:-1500, ease:Power0.easeNone},'-=4')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2.pause(0);
        
        ANIM.anim_interact_3 = new TimelineMax();
        ANIM.anim_interact_3
         
            .addLabel('inicio')
            .addCallback(function(){
                let hormiga = ANIM.getTlAnimacionesSprite('03', 'hormiga',2,1,0,1, false, 3);
                hormiga.play(0);
                Player.playSoundFX('reaccion_cigarra');
            })
            .set('#escena_03 .cigarra .ojos',{alpha:1})
            .fromTo('#escena_03 .cigarra .pata',0.5,{rotation:0},{rotation:-15, transformOrigin:'60px 10px', repeat:11, yoyo:true})
            .fromTo('#escena_03 .cigarra .pata .pie',0.5,{rotation:0},{rotation:20, transformOrigin:'28px 15px', repeat:11, yoyo:true}, '-=6')
            .set('#escena_03 .cigarra .ojos',{alpha:0})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3.pause(0);
        
        
        /* ANIM.anim_interact_4 = new TimelineMax();
        ANIM.anim_interact_4
         
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.tl_gota_solitaria.pause(0);
                ANIM.gotasCaen('04','lluvia');
                ANIM.superLoop('lluvia', 15,0.6);
                ANIM.fadeVolume('lluvia',0,0.6,4);
            })
            .fromTo('#escena_04 .cigarra1',1,{x:0},{x:50, ease:Power4.easeIn},'+=1')
            .set('#escena_04 .cigarra1',{alpha:0})
            .set('#escena_04 .cigarra2',{alpha:1})
            .fromTo('#escena_04 .cigarra2',3,{x:0},{x:1800, ease:Power1.easeOut})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4.pause(0); */
        
        ANIM.anim_interact_4 = new TimelineMax();
        ANIM.anim_interact_4
         
            .addLabel('inicio')
            .addCallback(function(){
            //(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
                ANIM.waitForSound('pisadas_nieve',0,1.05,10,0,0.7);
                let camina = ANIM.getTlAnimacionesSprite('04', 'cigarra',2,1,0,1, false, 4);
                camina.play(0);
            })
            .fromTo('#escena_04 .cigarra',10,{x:-1040},{x:0, ease:Power0.easeNone})
            .addCallback(function(){
                Player.playSoundFX('knock');
                Player.cambiaVolume('knock', 1.0);
            }, 10)
            .addLabel('final')
            ;
        ANIM.anim_interact_4.pause(0);
        

        ANIM.anim_interact_5 = new TimelineMax();
        ANIM.anim_interact_5
         
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.creaParpadeo('05','cigarra',Utils.randomInt(30,70)/10);
            })
            .fromTo('#escena_05 .cigarra',0.1,{x:0},{x:-10, repeat:30})
            .addCallback(function(){
                try{   ANIM.tl_parpadeo_05_cigarra.pause(0.1); } catch(err){}
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_5.pause(0);
        
        
         
        ANIM.anim_interact_6 = new TimelineMax();
        ANIM.anim_interact_6
         
            .addLabel('inicio')
            .addCallback(function(){Player.playSoundFX('sorbo');})
            .set('#escena_06 .cigarra',{backgroundPosition:'-100% 0%'})
            .set('#escena_06 .cigarra',{backgroundPosition:'0% 0%'},'+=2')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_6.pause(0);
        
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_1,
            ANIM.anim_interact_2,
            ANIM.anim_interact_3,
            ANIM.anim_interact_4,
            ANIM.anim_interact_5,
            ANIM.anim_interact_6,
            //ANIM.anim_interact_7,
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => { // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        
        TweenMax.set('.scale2',{scale:2, transformOrigin:'top left'});
        TweenMax.set('.scale17',{scale:1.7, transformOrigin:'top left'});
        TweenMax.set('#escena_02 .fondoB',{alpha:0});
        TweenMax.killTweensOf('#escena_02 .hoja');
        TweenMax.set('#escena_02 .hoja',{x:0, y:0});
        TweenMax.set('#escena_02 .pajaros',{rotation:45, x:0, y:0});
        TweenMax.set('#escena_03 .cigarra .ojos',{alpha:0});
        
        /* TweenMax.set('#escena_04 .gotea_en_mano .gota_chica',{alpha:0});
        TweenMax.set('#escena_04 .gotea_en_mano .gota_chicaA',{scale:0.3, rotation:100, x:0, y:0, transformOrigin:'top right'});
        TweenMax.set('#escena_04 .gotea_en_mano .gota_chicaB',{scale:0.3, rotation:200, x:0, y:0, transformOrigin:'top right'});
        TweenMax.set('#escena_04 .gotea_en_mano .gota_chicaC',{scale:0.3, rotation:300, x:0, y:0, transformOrigin:'top right'});
        TweenMax.set('#escena_04 .gotea_en_mano .gota_chicaD',{scale:0.3, rotation:400, x:0, y:0, transformOrigin:'top right'});
        TweenMax.set('#escena_04 .gotea_en_mano .gota_chicaE',{scale:0.3, rotation:500, x:0, y:0, transformOrigin:'top right'});
        
        TweenMax.killTweensOf('#escena_04 .chubascos .gota');
        TweenMax.killTweensOf('#escena_04 .lluvia .gota');
        TweenMax.set('#escena_04 .chubascos .gota',{y:-100});
        TweenMax.set('#escena_04 .lluvia .gota',{y:-100});
        TweenMax.set('#escena_04 .cigarra1',{alpha:1, x:0});
        TweenMax.set('#escena_04 .cigarra2',{alpha:0}); */
        
        TweenMax.set('#escena_04 .cigarra',{x:-1050});
        TweenMax.set('#escena_05 .cigarra .parpados .der',{scaleX:-1});
        
        ANIM.pauseWaitSound();
        ANIM.pauseAnimaciones();
        
        $('.indicador_interactividad').css({'display':'none'});
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario", alphabutton = 1) => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:alphabutton});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
              /**/
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
//                        ANIM.playBanjo();
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1.play(0);
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
//                        ANIM.anim_interact_2.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2.play(0);
                    });
                 }
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_3.play(0);
                    });
                 }
                 
                 break;
            /* case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
//                        ANIM.anim_interact_4.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4.play(0);
                    });
                 }
                 break; */
             case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4.play(0);
                    });
                 }
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5.play(0);
                    });
                 }
                
                 break; 
             case 6:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6.play(0);
                    });
                 }
                
                 break;
            
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};