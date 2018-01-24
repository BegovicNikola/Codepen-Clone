$("li").click(function(){
	$(this).toggleClass("active");

	var containerId = $(this).attr("id") + "Container";
	$("#" + containerId).toggleClass("hidden");
});

$("textarea").height($(window).height() - $("#header").height() - 30);

$("textarea").on("change keyup paste", function(){
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssContainer").val() + "</style></head><body>" + $("#htmlContainer").val() + "</body></html>");
	
	document.getElementById("outputContainer").contentWindow.eval($("#javascriptContainer").val());
});