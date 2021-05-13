<script>

document.addEventListener('DOMContentLoaded', function() {
jQuery(function($){
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
if (mypos > 40) {
if(mywindow.scrollTop() > mypos) {
$('#hidestickyheader').addClass('headerup');
} else {
$('#hidestickyheader').removeClass('headerup');
}
}
mypos = mywindow.scrollTop();
}); }); });

</script>
<style>
#hidestickyheader{
-webkit-transition: transform 0.34s ease;
transition : transform 0.34s ease;
}
.headerup{
transform: translateY(-120px); /*adjust this value to the height of your header*/
}
</style>