var timeArray = [9,10,11,12,13,14,15,16,17] 


$.each(timeArray, function(index, value){
 var inputGroup = $('<div class="input-group mb-3"></div>')
 var inputPrepend = $('<div class="input-group-prepend"></div>')
 var inputSpan = $('<span class="input-group-text">'+timeArray[index]+':00</span>')

 inputPrepend.append(inputSpan)
 var input = $('<input type="text" class="form-control present">')
 var button = $('<button>Save</button>')
 
 inputGroup.append(inputPrepend,input,button)
 
 $("#timeDiv").append(inputGroup);
})
$("button").on("click",function(){

var textInput=$(this).siblings("input").val()
console.log(textInput)
})





