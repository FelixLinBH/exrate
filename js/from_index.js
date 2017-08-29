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

          // $("#password").keyup(function(event) {
          //   var focusInput = $(this);
          //   $("#viewpswd").val(focusInput.val());
          //   if (focusInput.val().length > 1) {
          //     $('#next-page').css('opacity', 1);
          //   }
          // });

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
          if (counter <= 3) {
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

        var $table = $('#fresh-table'),
        $alertBtn = $('#alertBtn'),
        full_screen = false;
    var partJson =
   {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5.2
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
    var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

    $().ready(function(){
        $table.bootstrapTable({
            toolbar: ".toolbar",

            showRefresh: false,
            search: false,
            showToggle: false,
            showColumns: false,
            pagination: true,
            striped: true,
            pageSize: 7,
            pageList: [7],
            
            formatShowingRows: function(pageFrom, pageTo, totalRows){
                //do nothing here, we don't want to show the text "showing x of y from..." 
            },
            formatRecordsPerPage: function(pageNumber){
                return pageNumber + " rows visible";
            },
            icons: {
                refresh: 'fa fa-refresh',
                toggle: 'fa fa-th-list',
                columns: 'fa fa-columns',
                detailOpen: 'fa fa-plus-circle',
                detailClose: 'fa fa-minus-circle'
            }
        });
        
                    
        
        $(window).resize(function () {
            $table.bootstrapTable('resetView');
        });

        
        window.operateEvents = {
            'click .like': function (e, value, row, index) {
                alert('You click like icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);
            },
            'click .edit': function (e, value, row, index) {
                alert('You click edit icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);    
            },
            'click .remove': function (e, value, row, index) {
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: [row.id]
                });
        
            }
        };
        
        $alertBtn.click(function () {
            alert("You pressed on Alert");
        });
        
        particlesJS.load('particles-js', jsonUri, function() {
          console.log('callback - particles.js config loaded');
        });

        // select option
        $('.selectpicker').selectpicker({
          size: 4
        });

        $('.selectpicker2').selectpicker({
          size: 2
        });
        
 
    });
        

    function operateFormatter(value, row, index) {
        return [
            '<a rel="tooltip" title="Like" class="table-action like" href="javascript:void(0)" title="Like">',
                '<i class="fa fa-heart"></i>',
            '</a>',
            '<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
                '<i class="fa fa-edit"></i>',
            '</a>',
            '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
                '<i class="fa fa-remove"></i>',
            '</a>'
        ].join('');
    }

    
    //Socket
    var bankMapping = {
      "cathaybk":"國泰世華銀行",
      "fubonbk":"富邦銀行",
      "megabk":"兆豐銀行",
      "twbk":"台灣銀行",
      "chbbk":"彰化銀行",
      "esunbk":"玉山銀行",
      "taishinbk":"台新銀行",
      "hncbbk":"華南銀行",
      "tcbbk":"合作金庫銀行",
      "ctbcbk":"中國信託銀行",
      "feibbk":"遠東商業銀行",
      "sinopacbk":"永豐銀行",
      "kgibk":"凱基銀行",
      "tcbk":"大眾銀行",
      "entiebk":"安泰銀行",
      "scbk":"上海商業銀行",
      "dbsbk":"星展銀行",
      "netbk":"日盛銀行",
      "hsbcbk":"匯豐銀行",
      "firstbk":"第一銀行"
    };
    var bankMappingID = {
      "cathaybk":1,
      "fubonbk":2,
      "megabk":3,
      "twbk":4,
      "chbbk":5,
      "esunbk":6,
      "taishinbk":7,
      "hncbbk":8,
      "tcbbk":9,
      "ctbcbk":10,
      "feibbk":11,
      "sinopacbk":12,
      "kgibk":13,
      "tcbk":14,
      "entiebk":15,
      "scbk":16,
      "dbsbk":17,
      "netbk":18,
      "hsbcbk":19,
      "firstbk":20
    };
    var currency = [];
    var currencySelect = "";

    function selectCurrency(currencyTarget){
      if (currencyTarget == currencySelect) {
        return;
      }
      currencySelect = currencyTarget;
      $table.bootstrapTable('removeAll');
      for(var bank in currency[currencyTarget]){
        $table.bootstrapTable('insertRow', {
            index: 1,
            id: bankMappingID[bank],
            row: {
                bankName: bankMapping[bank],
                cashbuy: currency[currencyTarget][bank]['cashbuy'],
                cashsell: currency[currencyTarget][bank]['cashsell'],
                bkbuy: currency[currencyTarget][bank]['bkbuy'],
                bksell: currency[currencyTarget][bank]['bksell'],
            }
        });
      }
    }

    $().ready(function(){

          $('.item').click(function(){
            $('.item').removeClass("select");
            $(this).addClass("select");
            selectCurrency($(this).data('item').toUpperCase());
            
          });

        var socket = io('http://localhost:3000');
      socket.on('connect', function(){
        console.log("connect");
      });
      socket.on('event', function(source){
        if (source == "end") {
          socket.disconnect();
        }
      });
      socket.on('message', function(source){

        var i = 0;
       

        for (var item in source){
          i++;
          var tData = LZString.decompressFromUTF16(source[item]);
          var jsonData = JSON.parse(tData);
          for(var key in jsonData){
            currency[key] = (currency[key] === undefined)?{}:currency[key];
            currency[key][item] = jsonData[key];
          }
        }

        selectCurrency("USD");
      });
      socket.on('disconnect', function(){
        console.log("disconnect");
      });

      // $.ajax({
      //   type: "POST",
      //   url: "http://localhost:3000/subscription",
      //   // data: JSON.stringify({
      //   //     first_name: "test@test.com",
      //   //     last_name: "test@test.com",
      //   // }),
      //   contentType: "application/json",
      //   dataType: 'json',
      //   success: function(res){
      //     console.log(res);
      //   },
        
      // });
    });