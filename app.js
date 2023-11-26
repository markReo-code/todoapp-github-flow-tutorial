$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val(""); //挿入し終わったら空にし
});

$(document).on("change", "input[type=checkbox]", function() {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ccc");

    } else {
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color", "#000");
    }
});