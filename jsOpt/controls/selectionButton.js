define(["underscore","backbone"],function(_,Backbone){var defaultSelectionButton=Backbone.View.extend({el:function(){var el="#"+this.id;this.el=el},initialize:function(id,parent,data,idx,listview){this.id=id,this.parent="#"+parent,this.idx=idx,this.data=data,this.listview=listview},val:function(){return $(this.el).html()},id:function(){return this.el()},html:function(html){var control='<div id="'+this.id+"_control"+this.idx+'" class="bsm_selection_btn"><div class="bsm_cell">'+this.data+"</div></div>";return control},numberPattern:new RegExp("[0-9]+$"),render:function(){$("#"+this.id).append(this.html()),this.val="";var that=this;return $("#"+this.id+"_control"+this.idx).bind("click",function(e){$(that.parent+"_selection").html('<div class="bsm_cell">'+that.data+"</div>");var target=e.currentTarget;that.listview.html=$("#"+this.id).html(),that.listview.val=that.idx,that.listview.hideOptions(),that.listview.watchVal()}),this}});return defaultSelectionButton})