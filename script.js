        function getdata(){
            var location= document.getElementById('location').value;
            var place=document.getElementById('place');
            var temperature=document.getElementById('temperature');
            var description=document.getElementById('description');

        //get datd from api
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=3bff8c893c3eea188e192e902c85d5e3&units=metric').then(response=>response.json())
        .then(data=>{
            //console.log(data)
            document.getElementById('data').style.display='block';
            draw();

            var city= data['name'];
            //get value from the data main array, temp
            var temp= data['main']['temp'];
            //description is in the first array of waether
            var more= data['weather'][0]['description'];


            //render values
            place.innerHTML= 'Place: '+city;
            temperature.innerHTML='Temperature: '+temp + ' deg C';
            description.innerHTML=more;
            draw();

            function draw() {
            var c= document.getElementById("canvas");
            var ctx = c.getContext("2d");
            var c2= document.getElementById("canvas2");
            var ctx2 = c2.getContext("2d");
            

                //temp2= parseFloat(temp);
               // console.log(more)
                if(more==='mist'){
                    function init() {
                    mist = new Image();
                        mist.src = 'images/misty.png';
                        mist.onload = function(){
                            mist_x = -mist.width;
                        };
                    
                        return setInterval(loop, 10);
                    }
                    
                    function update(){
                        mist_x += 0.6;
                        if (mist_x > 1000 ) {
                            mist_x = -mist.width;
                            ctx.clearRect(0,0, 1300,500);
                        };
                    }
                    function loop() {
                        var shading = ctx.createLinearGradient(0, 0, 0, 170);
                        shading.addColorStop(0, "grey");
                        shading.addColorStop(1, "whitesmoke");
                        ctx.fillStyle = shading;
                        ctx.fillRect(0, 0, 1300, 400);
                        ctx.drawImage(mist, mist_x, 180);
                        
                        
                
                        update();
                    }
                    
                    init();
                                    
                }else if( more==='few clouds' || more==='scattered clouds' || more==='broken clouds'  ){
                var width = 300;
                var height = 200;
                var cloud;
                var cloud_x;
                ctx.clearRect(0,0, 1300,500)
                function init() {
                    cloud = new Image();
                    cloud1 = new Image();
                        cloud.src = 'images/clouds.jpg';
                        cloud1.src = 'images/clouds1.jpg';
                        cloud.onload = function(){
                            cloud_x = -cloud.width;
                        };
                    
                        return setInterval(loop, 10);
                    }
                    
                    function update(){
                        cloud_x += 0.3;
                        if (cloud_x > 1000 && cloud2_x<0) {
                            cloud_x = -cloud.width;
                            ctx.clearRect(0,0, 1520,500)
                        };
                    }
                    function loop() {
                        ctx2.fillText(city, 0, 0)
                        ctx.drawImage(cloud, cloud_x, 0);
                        ctx.drawImage(cloud1, 0,0);
                        ctx2.fillText('location',0,0);
                        update();
                        
                    }
                    
                    init();
                    
            }else if(  more==='clear sky'){
                var width = 300;
                var height = 200;
                var sky;
                ctx.clearRect(0,0, 1300,500)
                function init() {
                    sky = new Image();
                        sky.src = 'images/sky.jpg';
                        return setInterval(loop, 10);
                    } function loop() {
                        ctx.drawImage(sky, 0,0);
                        
                    }
                     init();       
                    
            }else if( more==='shower rain' || more==='rain' || more==='overcast clouds'){
                function rain() {
                var w = 1300;
                var h = 400;
                
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
         
                var arr = [];
                var drops = 800;
                for(var i= 0; i< drops;i++) {
                arr.push({
                    //x=x coord, y=y coord, ylentgh= lentgh of drop, l=x width very samll (1)
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    ylength: Math.random() * 10 + 10
                })};
                
                var particles = [];
                for(var i = 0; i < drops; i++) {
                particles[i] = arr[i];
                };
                
                function makerain() {
                ctx.clearRect(0, 0, w, h);
                for(var i = 0; i < particles.length; i++) {
                    var p = particles[i];
                    ctx.beginPath();
                    //make particle of dimensions
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.l * 1, p.y + p.l * p.ylength);
                    ctx.stroke();
                    
                    
                };
                update();
                 };
                function update() {
                for(var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.x +=1;
                    p.y += p.ylength;
                    //is they go out of screen, remake on canvas
                    if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                    }
                }
                }
                setInterval(makerain, 30);    
            
            };
            rain();
                                
            }else if( more==='shower rain' || more==='rain' || more==='thunderstorm' || more=='haze'){
                function rain() {
                var w = 1300;
                var h = 400;
                
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
         
                var arr = [];
                var drops = 800;
                for(var i= 0; i< drops;i++) {
                arr.push({
                    //x=x coord, y=y coord, ylentgh= lentgh of drop, l=x width very samll (1)
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    ylength: Math.random() * 10 + 10
                })};
                
                var particles = [];
                for(var i = 0; i < drops; i++) {
                particles[i] = arr[i];
                };
                
                function makerain() {
                ctx.clearRect(0, 0, w, h);
                for(var i = 0; i < particles.length; i++) {
                    var p = particles[i];
                    ctx.beginPath();
                    //make particle of dimensions
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.l * 1, p.y + p.l * p.ylength);
                    ctx.stroke();
                    ctx2.fillText('location',0,0);
                };
                update();
                 };
                function update() {
                for(var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.x +=1;
                    p.y += p.ylength;
                    //is they go out of screen, remake on canvas
                    if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                    }
                }
                }
                setInterval(makerain, 30);    
            
            };
            rain();
                                
            }else if( more==='snow' ){
                function snow() {
                var w = 1300;
                var h = 400;
         
                var arr = [];
                var drops = 800;
                for(var i= 0; i< drops;i++) {
                arr.push({
                    //x=x coord, y=y coord, ylentgh= lentgh of drop, l=x width very samll (1)
                    x: Math.random() * w,
                    y: Math.random() * h,
                    ylength: Math.random() * 7 + 3,
                })};
                
                var particles = [];
                for(var i = 0; i < drops; i++) {
                particles[i] = arr[i];
                };
                
                function makerain() {
                ctx.clearRect(0, 0, w, h);
                for(var i = 0; i < particles.length; i++) {
                    var p = particles[i];
                    ctx.beginPath();
                    ctx.arc(p.x,p.y, Math.random()*7,0, 2*Math.PI)
                    ctx.fillStyle='lightgrey';
                    ctx.fill();
                };
                update();
                 };
                function update() {
                for(var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.y += p.ylength;
                    //is they go out of screen, remake on canvas
                    if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = 0;
                    }
                }
                }
                setInterval(makerain, 50);    
            
            };
            snow();
                                
            }
        };
        })
        .catch(err=> {
            document.getElementById('errorinfo').innerHTML='error, no such place!';
            console.log(err);
        })};
        
    