package com.simple.controller

import scala.scalajs.js
import scala.scalajs.js.Any.fromInt
import scala.scalajs.js.Any.fromString
import com.greencatsoft.angularjs.AbstractController
import com.greencatsoft.angularjs.core.Scope
import com.greencatsoft.angularjs.injectable
import scala.scalajs.js.JSON

@js.native
trait D3Scope extends Scope {
  var options: js.Dynamic
  var data: js.Dynamic
}

@injectable("d3Ctrl")
class D3Controller(myScope: D3Scope) extends AbstractController[D3Scope](myScope) {
  val optionsText = """
{
    "chart": {
        "type": "scatterChart", 
        "height": 450, 
        "margin": {
            "top": 20, 
            "right": 20, 
            "bottom": 60, 
            "left": 55
        }, 
        "showValues": true, 
        "transitionDuration": 350, 
        "xAxis": {
            "axisLabel": "X Axis"
        }, 
        "yAxis": {
            "axisLabel": "Y Axis", 
            "axisLabelDistance": 30
        }
    }
}
        """

  val dataText = """
[
    {
        "key": "Group 0", 
        "values": [
            {
                "x": 0.10330622161870882, 
                "y": 0.20793365176444703, 
                "size": 0.21713723632390303, 
                "shape": "circle"
            }, 
            {
                "x": -1.0515291118697523, 
                "y": 0.5268680632861393, 
                "size": 0.15527655327486833, 
                "shape": "circle"
            }

        ]
    }, 
    {
        "key": "Group 1", 
        "values": [
            {
                "x": 0.879273868254847, 
                "y": -0.22946412397382013, 
                "size": 0.7037522513596903, 
                "shape": "circle"
            }, 
            {
                "x": -0.9436832130706864, 
                "y": 0.5691370697657997, 
                "size": 0.4912816430899889, 
                "shape": "circle"
            }, 
            {
                "x": -0.7109594820239431, 
                "y": -1.3585336319861274, 
                "size": 0.16759546555180815, 
                "shape": "circle"
            } 
        ]
    }, 
    {
        "key": "Group 2", 
        "values": [
            {
                "x": -0.639723023171846, 
                "y": 0.3938662438748171, 
                "size": 0.18809809076337558, 
                "shape": "circle"
            }, 
            {
                "x": -0.17864217164349058, 
                "y": -0.9361676411737182, 
                "size": 0.6606834389779213, 
                "shape": "circle"
            }
        ]
    }, 
    {
        "key": "Group 3", 
        "values": [
            {
                "x": 0.2863606664498774, 
                "y": -0.5258771670134756, 
                "size": 0.2464482337597793, 
                "shape": "circle"
            }, 
            {
                "x": 0.4070678013559303, 
                "y": -0.7892207116233403, 
                "size": 0.45762126195592434, 
                "shape": "circle"
            }, 
            {
                "x": 0.0464110421771623, 
                "y": -1.434419234761621, 
                "size": 0.3471898734529575, 
                "shape": "circle"
            }
        ]
    }
]    
    """
  scope.data = JSON.parse(dataText)
  scope.options = JSON.parse(optionsText)

}

