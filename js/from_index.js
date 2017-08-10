        var counter = 1;
        $(document).ready(function() {

          var erroEle = $('.error-message'),
            focusInput = $('.questions').find('.active2');

          $('.navigation a').click(function() {

            nextMaster('navi');

            var thisInput = $('#' + $(this).attr('data-ref'));
            $('.active2').removeClass('active2');
            thisInput.focus().addClass('active2')
            thisInput.closest('li').animate({
              marginTop: '0px',
              opacity: 1
            }, 200);
            thisInput.closest('li').prevAll('li').animate({
                marginTop: '-150px',
                opacity: 0
              }, 200)

            thisInput.closest('li').nextAll('li').animate({
                marginTop: '150px',
                opacity: 0
              }, 200)
            errorMessage(erroEle, '', 'hidden', 0);

          });

          if (focusInput.val() != '') {
            $('#next-page').css('opacity', 1);
          }

          $(document).keypress(function(event) {
            if (event.which == 13) {
              nextMaster('keypress');
              event.preventDefault();
            }
          });

          $('#next-page').click(function() {
            nextMaster('nextpage');

          })

          function nextMaster(type) {
            var focusInput = $('.questions').find('.active2').last();
            if (focusInput.val() != '') {
              if (focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) {
                errorMessage(erroEle, "It doesn't look like a " + focusInput.attr('name'), 'visible', 1);
              } else {

                if (type != 'navi') showLi(focusInput);
                $('#next-page').css('opacity', 0);
                errorMessage(erroEle, '', 'hidden', 0);
              }
            } else if (type == 'keypress') {
              errorMessage(erroEle, 'please enter your ' + focusInput.attr('name'), 'visible', 1);
            }

          }

          $("input[type='text']").keyup(function(event) {
            var focusInput = $(this);
            if (focusInput.val().length > 1) {
              if ((focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) ||
                (focusInput.attr('name') == 'number' && !validateNumber(focusInput.val()))) {
                $('#next-page').css('opacity', 0);
              } else {
                $('#next-page').css('opacity', 1);
              }

            } else {
              $('#next-page').css('opacity', 0);
            }
          });

          $("#password").keyup(function(event) {
            var focusInput = $(this);
            $("#viewpswd").val(focusInput.val());
            if (focusInput.val().length > 1) {
              $('#next-page').css('opacity', 1);
            }
          });

          $('#signup').click(function() {
            $('.navigation').fadeOut(400).css({
              'display': 'none'
            });
            $('#sign-form').fadeOut(400).css({
              'display': 'none'
            });
            $(this).fadeOut(400).css({
              'display': 'none'
            });
            $('#wf').animate({
              opacity: 1,
              marginTop: '1em'
            }, 500).css({
              'display': 'block'
            });
          });

          $('#show-pwd').mousedown(function() {
            $(this).toggleClass('view').toggleClass('hide');
            $('#password').css('opacity', 0);
            $('#viewpswd').css('opacity', 1);
          }).mouseup(function() {
            $(this).toggleClass('view').toggleClass('hide');
            $('#password').css('opacity', 1);
            $('#viewpswd').css('opacity', 0);
          });

        });

        function showLi(focusInput) {

          focusInput.closest('li').animate({
            marginTop: '-150px',
            opacity: 0
          }, 200);

          console.log(focusInput.closest('li'));

      
          $("[data-ref='" + focusInput.attr('id') + "']").addClass('done').html(focusInput.val());
  

          focusInput.removeClass('active2');
          counter++;

          var nextli = focusInput.closest('li').next('li');

          nextli.animate({
            marginTop: '0px',
            opacity: 1
          }, 200);
          console.log(counter);
          if (counter <= 2) {
            nextli.find('select').focus().addClass('active2');
            $('#next-page').animate({
              opacity: 1
            }, 200);
          }else{
            nextli.find('input').focus().addClass('active2');
          }
          

        }

        function errorMessage(textmeg, appendString, visib, opaci) {
          textmeg.css({
            visibility: visib
          }).animate({
            opacity: opaci
          }).html(appendString)
        }

        function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }

        function validateNumber(number){
          var re = /^-?\d*(\.\d+)?$/; 
          return re.test(number);
        }

        function validatePhone(phone) {
          var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
          return re.test(phone);
        }