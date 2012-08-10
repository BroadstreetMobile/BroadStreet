define(["jquery","backbone","models/model","text!templates/main.html","controls/labelBox","controls/selectionList","controls/toggle","controls/textInput","controls/alert","controls/scrollView"],function($,Backbone,Model,template,Label,Selection,Toggle,Input,Alert,ScrollView){var View=Backbone.View.extend({el:"body",controlEvents:function(){return{"valueChange #textInput1":"alertText"}},initialize:function(){this.model=new Model,this.template=_.template(template,{model:this.model.toJSON()})},alertText:function(e){var AlertControl=new Alert;AlertControl.setAlert(" your name is "+e.getVal())},createControls:function(){var Label1=(new Label("label1","controls",this)).render();Label1.setTitle("label"),Label1.setLabel("label takes html");var Selection1=(new Selection("selection1","controls",this)).render();Selection1.setTitles("selection","make a selection"),Selection1.addRow(Label1.getLabel(),1),Selection1.addRow(Label1.getLabel(),2);var Toggle1=(new Toggle("toggle1","controls",this)).render();Toggle1.setTitle("Do you like this?"),Toggle1.setOptions("YES","NO");var TextInput=(new Input("textInput1","controls",this)).render();TextInput.setTitle("Your Name - will alert on blur");var ScrollView1=(new ScrollView("scrollView1","controls")).render();ScrollView1.setTitle("Add a ScrollView Panel"),ScrollView1.setHtml("this is a scrollview .. if you fill it<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7"),ScrollView1.setHeight("100")},events:{},render:function(){this.$el.find("#example").append(this.template),this.createControls()}});return View})