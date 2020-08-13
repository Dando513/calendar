var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var time = moment().hours()


$.each(timeArray, function (index, value) {
   var correctedHour = timeArray[index];
   if (correctedHour > 12) {
      correctedHour -= 12;
   }
   
   var ppf = "";

   function timeDay(input) {
      if (input > time) {
         ppf = "future"
      }
      else if (input == time) {
         ppf = "present"
      }
      else if (input < time) {
         ppf = "past"
      }
   }

   timeDay(value);

   var inputGroup = $('<div class="input-group mb-3"></div>')
   
   var inputSpan = $('<span class="input-group-text">' + correctedHour + ':00<span>')
   var inputPrepend = $('<div class="input-group-prepend"></div>')
   inputPrepend.append(inputSpan)
   
   var input = $('<input type="text" id="'+timeArray[index]+'">');
   input.addClass("form-control");
   input.addClass(ppf);
   var savedText = localStorage.getItem(timeArray[index])
   console.log(savedText)
   input.val(savedText)

   var button = $('<button>Save</button>');
   
   inputGroup.append(inputPrepend, input, button);

   $("#timeDiv").append(inputGroup);
});

$("button").on("click", function () {

   var textInput = $(this).siblings("input").val();
   console.log(textInput);
   var hr = $(this).siblings("input").attr("id")
   console.log(hr);

   localStorage.setItem(hr,textInput);

})

