// <%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
// <%@ page import="java.util.*" %>
// <%@ page import="com.google.gson.Gson"%>
// <%@ page import="com.google.gson.JsonObject"%>
 
// <%
// Gson gsonObj = new Gson();
// Map<Object,Object> map = null;
// List<Map<Object,Object>> list = new ArrayList<Map<Object,Object>>();
 
// map = new HashMap<Object,Object>(); map.put("label", "FY11"); map.put("y", 146.65); list.add(map);
// map = new HashMap<Object,Object>(); map.put("label", "FY12"); map.put("y", 201.46); list.add(map);
// map = new HashMap<Object,Object>(); map.put("label", "FY13"); map.put("y", 202.69); list.add(map);
// map = new HashMap<Object,Object>(); map.put("label", "FY14"); map.put("y", 201.7); list.add(map);
// map = new HashMap<Object,Object>(); map.put("label", "FY15"); map.put("y", 175.51); list.add(map);
// map = new HashMap<Object,Object>(); map.put("label", "FY16"); map.put("y", 132.03); list.add(map);
 
// String dataPoints = gsonObj.toJson(list);
// %>
 
window.onload = function() { 
 
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Imports of Ore and Minerals in India"
        },
        axisX: {
            title: "Fiscal Year"
        },
        axisY: {
            title: "Imports (in billion USD)",
            includeZero: true
        },
        data: [{
            type: "column",
            yValueFormatString: "$#,##0.0# billion",
            // dataPoints: <%out.print(dataPoints);%>
        }]
    });
    chart.render();
     
    }