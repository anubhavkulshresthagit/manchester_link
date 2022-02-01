console.log("working");


var flag=0;
var on=0;
var runDone=0;
function onOff(){
   if(flag==0)
   {
      document.getElementById("leds").src = "images/greenLed.png";
      flag=1;
      on=1;
   }
   else{
      document.getElementById("leds").src = "images/redLed.png";
      initial();
      flag=0;
      on=0;
   }
}


//////////Toggling the switch

var pos1 = 0;
var arr=[0,0,0,0,0,0,0,0];

function toogle1(){
   if(on==1)
  { var element;
    if(pos1==0)
    {
        document.getElementById("s7").style.transform = "rotate(180deg)";
        document.getElementById("s7").style.transformOrigin = "top center";
        document.getElementById("s7").style.marginTop = "11px";
        element = document.getElementById("data7");
        element.innerHTML = "1";
        arr[0]=1;
        pos1=1;
    }
    else{
        document.getElementById("s7").style.transform = "rotate(0deg)";
        document.getElementById("s7").style.transformOrigin = "bottom center";
        document.getElementById("s7").style.marginTop = "8px";
        element = document.getElementById("data7");
        element.innerHTML = "0";
        arr[0]=0;
        pos1=0;
    }
    }
    else{
       alert("first turn on the function generator");
    }
}
var pos2=0;
function toogle2()
{
   if(on==1)
  { if(pos2==0)
   {
    document.getElementById("s6").style.transform = "rotate(180deg)";
    document.getElementById("s6").style.transformOrigin = "top center";
    document.getElementById("s6").style.marginTop = "11px";
    element = document.getElementById("data6");
        element.innerHTML = "1";
        arr[1]=1;
    pos2=1;
   }
   else{
    document.getElementById("s6").style.transform = "rotate(0deg)";
    document.getElementById("s6").style.transformOrigin = "bottom center";
    document.getElementById("s6").style.marginTop = "8px";
    element = document.getElementById("data6");
        element.innerHTML = "0";
        arr[1]=0;
    pos2=0;
   }}
   else{
      alert("first turn on the function generator");

   }
}
var pos3=0;
function toogle3()
{
   if(on==1)
   {if(pos3==0)
   {
    document.getElementById("s5").style.transform = "rotate(180deg)";
    document.getElementById("s5").style.transformOrigin = "top center";
    document.getElementById("s5").style.marginTop = "11px";
    element = document.getElementById("data5");
        element.innerHTML = "1";
        arr[2]=1;
    pos3=1;
   }
   else{
    document.getElementById("s5").style.transform = "rotate(0deg)";
    document.getElementById("s5").style.transformOrigin = "bottom center";
    document.getElementById("s5").style.marginTop = "8px";
    element = document.getElementById("data5");
        element.innerHTML = "0";
        arr[2]=0;
    pos3=0;
   }}
   else
   {
      alert("first turn on the function generator");
   }
}
var pos4=0;
function toogle4()
{
   if(on==1)
   {if(pos4==0)
   {
    document.getElementById("s4").style.transform = "rotate(180deg)";
    document.getElementById("s4").style.transformOrigin = "top center";
    document.getElementById("s4").style.marginTop = "11px";
    element = document.getElementById("data4");
    element.innerHTML = "1";
    arr[3]=1;
    pos4=1;
   }
   else{
    document.getElementById("s4").style.transform = "rotate(0deg)";
    document.getElementById("s4").style.transformOrigin = "bottom center";
    document.getElementById("s4").style.marginTop = "8px";
    element = document.getElementById("data4");
    element.innerHTML = "0";
    pos4=0;
    arr[3]=0;
   }}
   else{
      alert("first turn on the function generator");
   }
}
var pos5=0;
function toogle5()
{if(on==1)
  { if(pos5==0)
   {
    document.getElementById("s3").style.transform = "rotate(180deg)";
    document.getElementById("s3").style.transformOrigin = "top center";
    document.getElementById("s3").style.marginTop = "11px";
    document.getElementById("s3").style.marginLeft = "1px";
    element = document.getElementById("data3");
    element.innerHTML = "1";
    arr[4]=1;
    pos5=1;
   }
   else{
    document.getElementById("s3").style.transform = "rotate(0deg)";
    document.getElementById("s3").style.transformOrigin = "bottom center";
    document.getElementById("s3").style.marginTop = "8px";
    element = document.getElementById("data3");
    element.innerHTML = "0";
    arr[4]=0;
    pos5=0;
   }}
   else{
      alert("first turn on the function generator");
   }
}
var pos6=0;
function toogle6()
{
   if(on==1)
   {if(pos6==0)
   {
    document.getElementById("s2").style.transform = "rotate(180deg)";
    document.getElementById("s2").style.transformOrigin = "top center";
    document.getElementById("s2").style.marginTop = "11px";
    element = document.getElementById("data2");
    element.innerHTML = "1";
    arr[5]=1;
    pos6=1;
   }
   else{
    document.getElementById("s2").style.transform = "rotate(0deg)";
    document.getElementById("s2").style.transformOrigin = "bottom center";
    document.getElementById("s2").style.marginTop = "8px";
    element = document.getElementById("data2");
    element.innerHTML = "0";
    arr[5]=0;
    pos6=0;
   }}
   else{
      alert("first turn on the function generator"); 
   }
}
var pos7=0;
function toogle7()
{
   if(on==1)
  {  
   if(pos7==0)
   {
   
    document.getElementById("s1").style.transform = "rotate(180deg)";
    document.getElementById("s1").style.transformOrigin = "top center";
    document.getElementById("s1").style.marginTop = "11px";
    element = document.getElementById("data1");
    element.innerHTML = "1";
    arr[6]=1;
    pos7=1;
   }
   else{
    document.getElementById("s1").style.transform = "rotate(0deg)";
    document.getElementById("s1").style.transformOrigin = "bottom center";
    document.getElementById("s1").style.marginTop = "8px";
    element = document.getElementById("data1");
    element.innerHTML = "0";
    arr[6]=0;
    pos7=0;
   }}
   else{
      alert("first turn on the function generator");
   }
}
var pos8=0;
function toogle8()
{if(on==1)
   {if(pos8==0)
   {
    document.getElementById("s0").style.transform = "rotate(180deg)";
    document.getElementById("s0").style.transformOrigin = "top center";
    document.getElementById("s0").style.marginTop = "11px";
    element = document.getElementById("data0");
    element.innerHTML = "1";
    arr[7]=1;
    pos8=1;
   }
   else{
    document.getElementById("s0").style.transform = "rotate(0deg)";
    document.getElementById("s0").style.transformOrigin = "bottom center";
    document.getElementById("s0").style.marginTop = "7px";
    element = document.getElementById("data0");
    element.innerHTML = "0";
    arr[7]=0;
    pos8=0;
   }}
   else{
      alert("first turn on the function generator");
   }
}

function playAudio(url) {
    new Audio(url).play();
  }


  function run()
  {
if(on==1)
{
  runDone=1;
   //////////////////////////////////////     CLOCK SIGNAL   ///////////////////////////////////
     
 var dps = [];
 var chart = new CanvasJS.Chart("chartContainer", {
   zoomEnabled: true,
  
     exportEnabled: true,
     title :{
         text: "Clock Signal"
     },
     
     
     
    /*   axisX:{
             title: "Time",
             lineColor: "#369EAD",
             
            },
      axisY:{
             title: "Time",
             lineColor: "#369EAD",
             
            }, */
      legend: {
     horizontalAlign: "right",
     verticalAlign: "center"
   },
   axisY:{
     includeZero: false
   },
     
     data: [{
         type: "line",
         markerSize: 0,
         dataPoints: dps 
     }]
    
 });



 var xVal = 0;
 var yVal = 0;
 var counter =0;
 var flag=0;
 var flag1 =0;
 var flag2 =0;
 var flag3 =0;
 var dataLength = 100; // number of dataPoints visible at any point

 var updateChart = function (count) {
     count = count || 1;
     // count is number of times loop runs to generate random dataPoints.
     for (var j = 0; j < count; j++) {	
     
/*  var check= (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity; */
     
      {
      
          
      if(flag==0)
      {
        if(flag1==0)
        {
             xVal = xVal;
             yVal = 0;
             flag1=1;
        }
        else
        {
             xVal = xVal;
             yVal = 1;
             flag1 = 0;
             flag=1;
        }
     
      }
      else
      {
        if(flag3==0)
        {
           if(flag2==0)
         {
             xVal = xVal + 0.5;
             yVal = 1;
             flag2=1;
         }
         else
         {
            xVal = xVal;
            yVal = 0;
            flag2=0;
            flag3=1;
         }
        }
        else
        {
          xVal = xVal + 0.5;
          yVal = 0;
          flag3=0;
          flag=0;
        }
        
      }
       
         
      }
     
    
     
     
     
     
        
         dps.push({
             x: (xVal),
             //x: (xVal)*(fre/10);
             y: (yVal),
         });
        
        
         
     
        
         
        
     }
     if (dps.length > dataLength) {
         dps.shift();
     }
     chart.render();
 };
 
 updateChart(dataLength); 






 ////////////////////////////////    NRZ  SIGNAL        //////////////////////////////////////////


 var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "NRZ Unipolar Signal"
        },
        
        zoomEnabled: true,
      zoomType: "xy",
        
       /*   axisX:{
                title: "Time",
                lineColor: "#369EAD",
                
               },
         axisY:{
                title: "Time",
                lineColor: "#369EAD",
                
               }, */
         legend: {
        horizontalAlign: "right",
        verticalAlign: "center"
      },
      axisY:{
        includeZero: false
      },
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    var runner = arr.length;
    var flag=0;
    var flag1=0;
    var dataLength = 20; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        dps.push({
          x:(0),
          y:(0),
        })
        
        
        for (var j = 0; j < runner; j++) {	
        
        if(j==0)
        {
          if(arr[j]==0)
          {
            xVal = xVal+1;
            yVal = 0;
            
            dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
          else
          {
            xVal = xVal;
            yVal = 1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
             
             xVal +=1;
             yVal = 1;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
        }
        else
        {
          if(arr[j]==0)
          {
           if(arr[j-1]==0)
           {
             xVal +=1;
             yVal=0;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
           }
           else
           {
            xVal = xVal;
            yVal = 0;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal+=1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
           }
          }
          else
          {
            if(arr[j-1]==1)
            {
              xVal +=1;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
            }
            else
            {
               xVal = xVal;
               yVal = 1;
               dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal +=1;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            }
          }
        }
         
        
           
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 


 ////////////////////////////////////////   Manchester  coding     /////////////////////////

 
 var dps = [];
    var chart = new CanvasJS.Chart("chartContainer2", {
        exportEnabled: true,
        title :{
            text: "Bi-Phase (Manchester) Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    var flag=0;
    var flag1=0;
    
    var dataLength = 50; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.

        dps.push({
          x:(0),
          y:(0),
         })
        
        if(arr[0]==0)
         yVal = -1;
        else
         yVal = 1;
        
        dps.push({
         x:(xVal),
         y:(yVal),
        })
        
        
        for (var j = 0; j < runner; j++) {	
        
        if(j==0){
           if(arr[0]==0)
           {
             xVal+=0.5;
              dps.push({
                x:(xVal),
                y:(yVal),
             })
             
             yVal=1;
             dps.push({
                x:(xVal),
                y:(yVal),
             })
             
             xVal +=0.5;
             dps.push({
                x:(xVal),
                y:(yVal),
             })
           }
           else
           {
              xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              yVal = -1;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
           }
           
           
           }
           else
           {
             if(arr[j]==0)
             {
               if(arr[j-1]==1)
               {
                 xVal+=0.5;
                 dps.push({
              x:(xVal),
              y:(yVal),
              })
              
               yVal =1;
               dps.push({
              x:(xVal),
              y:(yVal),
              })
                
                xVal+=0.5;
                dps.push({
              x:(xVal),
              y:(yVal),
              })
               }
               else
               {
                  yVal = -1;
                  dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              xVal+=0.5;
                 dps.push({
              x:(xVal),
              y:(yVal),
              })
              
               yVal =1;
               dps.push({
              x:(xVal),
              y:(yVal),
              })
                
                xVal+=0.5;
                dps.push({
              x:(xVal),
              y:(yVal),
              })
              
                  
               }
             }
             else
             {
               if(arr[j-1]==0)
               {
                 xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              yVal = -1;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
               }
               else
               {
                 yVal =1;
                 dps.push({
              x:(xVal),
              y:(yVal),
              })
                
                 xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              yVal = -1;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
              
              xVal+=0.5;
              dps.push({
              x:(xVal),
              y:(yVal),
              })
               
               }
             }
           }
           
           if(j==runner-1)
           {
            yVal =  0;
             dps.push({
               x:(xVal),
               y:(yVal),
             })
           }
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 



    /////////////////////////////////////////////   differential manchester     ////////////////////////////////////


    
 var dps = [];
 var chart = new CanvasJS.Chart("chartContainer3", {
    zoomEnabled: true,
     exportEnabled: true,
     title :{
         text: "Differential (Manchester) Signal"
     },
   
     
     data: [{
         type: "line",
         markerSize: 0,
         dataPoints: dps 
     }]
    
 });



 var xVal = 0;
 var yVal = 0;
 var flag=0;
 var flag1=0;
 
 var dataLength = 50; // number of dataPoints visible at any point

 var updateChart = function (count) {
     count = count || 1;
     // count is number of times loop runs to generate random dataPoints.
     
  
      dps.push({
        x:(0),
        y:(0),
      })
    
     
     for (var j = 0; j < runner; j++) {	
     
     
       if(j==0)
       {
         yVal=1;
         dps.push({
        x:(xVal),
        y:(yVal),
      })
         
         xVal+=0.5;
          dps.push({
        x:(xVal),
        y:(yVal),
      })
      
        yVal = -1;
         dps.push({
        x:(xVal),
        y:(yVal),
      })
      
       xVal +=0.5;
        dps.push({
        x:(xVal),
        y:(yVal),
      })
         
         
       }
    else{
    
       if(arr[j]==0)
       {
          yVal = yVal*-1;
          dps.push({
        x:(xVal),
        y:(yVal),
      })
      
        xVal +=0.5;
        dps.push({
        x:(xVal),
        y:(yVal),
      })
      
      yVal = yVal*-1;
          dps.push({
        x:(xVal),
        y:(yVal),
      })
      
       xVal +=0.5;
         dps.push({
        x:(xVal),
        y:(yVal),
      })
      
       }
       else
       {
         xVal+=0.5;
          dps.push({
        x:(xVal),
        y:(yVal),
      })
      
        yVal = yVal*-1;
         dps.push({
        x:(xVal),
        y:(yVal),
      })
      
        xVal+=0.5;
         dps.push({
        x:(xVal),
        y:(yVal),
      })
       }
    }
    
    
    if(j==runner-1)
    {
     yVal =  0;
      dps.push({
        x:(xVal),
        y:(yVal),
      })
    }
         
        
     }
     if (dps.length > dataLength) {
         dps.shift();
     }
     chart.render();
 };
 
 
 updateChart(dataLength); 


}
else{
   alert("first turn on the function generator");
}
  }

/////////////////////////////////////////////////////   blank Graph     /////////////////////////////////

  function initial(){
     
   ///////////////////////////////////      clock        ///////////////////////////////

   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer", {
       exportEnabled: true,
       title :{
           text: "Clock Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   ////////////////////////////////////////////   Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer1", {
       exportEnabled: true,
       title :{
           text: "NRZ Unipolar Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   /////////////////////////////////////////////  manchester  //////////////////////////////

   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer2", {
       exportEnabled: true,
       title :{
           text: "Bi-Phase (Manchester) Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 


   /////////////////////////////////////////////  manchester  //////////////////////////////

   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer3", {
       exportEnabled: true,
       title :{
           text: "Differential (Manchester) Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength);
   

   
   ////////////////////////////////////////////   Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer4", {
       exportEnabled: true,
       title :{
           text: "Decoding of Manchester Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 
  }

  function study(){
   Swal.fire({
      title: 'Biphase (Manchester) Coding:',
      text: 'The encoding rules for biphase (Manchester) code are as follows. A data "0" is encoded as a low level during first half of the bit time and a high level during the second half. A data "1" is encoded as a high level during first half of the bit time and a low level during the second half. Thus tring of 1s and 0s as well as any mixture of them will not pass any synchronization problem in receiver. ',
      imageUrl: 'images/figure.png',
      imageWidth: 680,
      imageHeight: 260,
      imageAlt: 'Custom image',
      outerWidth: 100,
      width: 740,
      
    })
  }

  

  function demod()
  {
    if(runDone==1)
    {
         

 var dps = [];
 var chart = new CanvasJS.Chart("chartContainer4", {
   zoomEnabled: true,
     exportEnabled: true,
     title :{
         text: "Decoding of Manchester Signal"
     },
     
  
     
    /*   axisX:{
             title: "Time",
             lineColor: "#369EAD",
             
            },
      axisY:{
             title: "Time",
             lineColor: "#369EAD",
             
            }, */
      legend: {
     horizontalAlign: "right",
     verticalAlign: "center"
   },
   axisY:{
     includeZero: false
   },
     
     data: [{
         type: "line",
         markerSize: 0,
         dataPoints: dps 
     }]
    
 });



 var xVal = 0;
 var yVal = 0;
 var runner = arr.length;
 var flag=0;
 var flag1=0;
 var dataLength = 100; // number of dataPoints visible at any point

 var updateChart = function (count) {
     count = count || 1;
     // count is number of times loop runs to generate random dataPoints.
     dps.push({
       x:(0),
       y:(0),
     })
     
     
     for (var j = 0; j < runner; j++) {	
     
     if(j==0)
     {
       if(arr[j]==0)
       {
         xVal = xVal+1;
         yVal = 0;
         
         dps.push({
           x:(xVal),
           y:(yVal),
         })
       }
       else
       {
         xVal = xVal;
         yVal = 1;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
          
          xVal +=1;
          yVal = 1;
          dps.push({
           x:(xVal),
           y:(yVal),
         })
       }
     }
     else
     {
       if(arr[j]==0)
       {
        if(arr[j-1]==0)
        {
          xVal +=1;
          yVal=0;
          dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         
        }
        else
        {
         xVal = xVal;
         yVal = 0;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         xVal+=1;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
        }
       }
       else
       {
         if(arr[j-1]==1)
         {
           xVal +=1;
           yVal=1;
           dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         
         }
         else
         {
            xVal = xVal;
            yVal = 1;
            dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         xVal +=1;
           yVal=1;
           dps.push({
           x:(xVal),
           y:(yVal),
         })
         }
       }
     }
      
     
     if(j==runner-1)
     {
      yVal =  0;
       dps.push({
         x:(xVal),
         y:(yVal),
       })
     }
         
        
     }
     if (dps.length > dataLength) {
         dps.shift();
     }
     chart.render();
 };
 
 updateChart(dataLength); 
    }
    else{
      alert("fisrt making a manchester signal")
    }
  }

