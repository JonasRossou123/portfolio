var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        "id": "347_0",
        "name": "Skills",
        "children": [{
            "id": "126510_2",
            "name": "Languages",
            "data": {
                "band": "Skills",
                "relation": "member of band"
            },
            "children": [{
                "id": "52163_2",
                "name": "HTML",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "324134_3",
                "name": "CSS",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "324134_4",
                "name": "SCSS",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "324134_5",
                "name": "JavaScript",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "324134_7",
                "name": "TypeScript",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "324134_6",
                "name": "PHP",
                "data": {
                    "band": "Languages",
                    "relation": "member of band"
                },
                "children": []
            }]
        }, {
            "id": "235951_6",
            "name": "Frameworks",
            "data": {
                "band": "Skills",
                "relation": "member of band"
            },
            "children": [{
                "id": "2382_7",
                "name": "React",
                "data": {
                    "band": "Frameworks",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "2415_8",
                "name": "Angular",
                "data": {
                    "band": "Frameworks",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "3963_9",
                "name": "Symfony",
                "data": {
                    "band": "Frameworks",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "7848_10",
                "name": "Laravel",
                "data": {
                    "band": "Frameworks",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "5752_22",
                "name": "Express.js",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "7848_11",
                "name": "Bootstrap",
                "data": {
                    "band": "Frameworks",
                    "relation": "member of band"
                },
                "children": []
            }]
        }, {
            "id": "2396_14",
            "name": "Databases",
            "data": {
                "band": "Skills",
                "relation": "member of band"
            },
            "children": [{
                "id": "3963_15",
                "name": "MariaDB",
                "data": {
                    "band": "Databases",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "32247_16",
                "name": "MySQL",
                "data": {
                    "band": "Databases",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "32247_17",
                "name": "MongoDB",
                "data": {
                    "band": "Databases",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "83761_17",
                "name": "Redis",
                "data": {
                    "band": "Databases",
                    "relation": "member of band"
                },
                "children": []
            },]
        }, {
            "id": "36352_19",
            "name": "Extras",
            "data": {
                "band": "Skills",
                "relation": "member of band"
            },
            "children": [{
                "id": "1013_20",
                "name": "MVC",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "3963_21",
                "name": "Apache",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "3963_22",
                "name": "PhpStorm",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "33602_23",
                "name": "Terminal",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "33602_24",
                "name": "WebSockets",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            },{
                "id": "33602_25",
                "name": "REST APIs",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            },{
                "id": "40485_24",
                "name": "GIT",
                "data": {
                    "band": "Extras",
                    "relation": "is person"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "133257_25",
                "name": "SEO",
                "data": {
                    "band": "Extras",
                    "relation": "member of band"
                },
                "children": []
            }]
        }
        ],
        "data": []
    };
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 13,
          color: "#FFA500FF"
      },
      Edge: {
          lineWidth: 2,
          color: "#088"
      },
      onBeforeCompute: function(node){
          Log.write("");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "1.2em";
              style.color = "#ddd";

          } else if(node._depth == 2){
              style.fontSize = "1em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },
      
      onComplete: function(){
          Log.write("");
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}
