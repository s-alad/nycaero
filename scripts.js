//smooth scroll------------------------------------
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") 
        {
            event.preventDefault();
            var hash = this.hash;
            var x = $(hash).offset();
            $('html, body').animate({
                scrollTop: x.top-100
            }, 800, function(){
      
            });
        }
    });
});

//dynamic input for the team feild
$(document).ready(function() {
    var wrapper = $(".team-member-container");
    var add = $(".add-member");
    var element = '<div class="member-container"><input type="text" name="mytext[]"/><a href="#" class="delete-member">&times;</a></div>'
    var x = 1;
    $(add).click(function(e) 
    {
        e.preventDefault();
        x++;
        $(wrapper).append(element);
    });

    $(wrapper).on("click", ".delete-member", function(e) 
    {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});

//show join sections------------------------------------
function show(name) 
{
    document.getElementsByClassName(name)[0].style.display = 'block'; 
    document.getElementsByClassName("occupation")[0].style.display = 'none'; 
    document.getElementById("join-text").innerHTML = "JOIN US!";
    document.getElementsByClassName("rHome")[0].style.display = 'block'
    document.getElementsByClassName("lHome")[0].style.display = 'none'
    document.getElementsByClassName("lBack")[0].style.display = 'block'
};
