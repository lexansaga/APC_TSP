$(document).ready(function () {
    var table = $('#table').DataTable({
        "createdRow": (row, data, dataIndex) => {
            var num = data[1]
            var lowestNum = num > data[1] ? data[1] : num
            if (data[2] > 6.44) {

                $(row).find('td:eq(2)').css({
                    'background-color': '#e63946',
                    "color": "white"
                });

                $(`.alert-wlevel .alert-container`).prepend(`<div class="alert-content">
          <div>
          <i class='bx bxs-error' ></i>
          <p class="error-text"> High Water Level : ${data[2]} </p>    
      </div>
      <p class="error-time"> ${data[3]}</p>
         </div>`)
            }
            if (data[1] > 65) {
                $(row).find('td:eq(1)').css({
                    'background-color': '#e63946',
                    "color": "white"
                });

                $(`.alert-temp  .alert-container`).prepend(`<div class="alert-content">
            <div>
            <i class='bx bxs-error' ></i>
            <p class="error-text"> High Temperature : ${data[1]} </p>    
        </div>
        <p class="error-time"> ${data[3]}</p>
    </div>`)
            } else if (data[1] < 53) {
                //style="background-color:#5c9ef5"
                $(row).find('td:eq(1)').css({
                    'background-color': '#5c9ef5',
                    "color": "white"
                });

                $(`.alert-temp  .alert-container`).prepend(`<div class="alert-content"  >
            <div>
            <i class='bx bxs-error' ></i>
            <p class="error-text"> Low Temperature : ${data[1]} </p>    
        </div>
        <p class="error-time"> ${data[3]}</p>
    </div>`)
            } else {

            }





        },
        "order": [
            [3, "desc"]
        ],

        dom: 'Bfrtip',
        buttons: [
            'excelHtml5', 'pdfHtml5', 'csvHtml5'
        ]
    });
    var table2 = $('#table2').DataTable(
        {
            "createdRow": (row, data, dataIndex) => {
                var num = data[1]
                var lowestNum = num > data[1] ? data[1] : num
                if (data[2] > 6.44) {
    
                    $(row).find('td:eq(2)').css({
                        'background-color': '#e63946',
                        "color": "white"
                    });
    
                    $(`.alert-wlevel .alert-container`).prepend(`<div class="alert-content">
              <div>
              <i class='bx bxs-error' ></i>
              <p class="error-text"> High Water Level : ${data[2]} </p>    
          </div>
          <p class="error-time"> ${data[3]}</p>
             </div>`)
                }
                if (data[1] > 65) {
                    $(row).find('td:eq(1)').css({
                        'background-color': '#e63946',
                        "color": "white"
                    });
    
                    $(`.alert-temp  .alert-container`).prepend(`<div class="alert-content">
                <div>
                <i class='bx bxs-error' ></i>
                <p class="error-text"> High Temperature : ${data[1]} </p>    
            </div>
            <p class="error-time"> ${data[3]}</p>
        </div>`)
                } else if (data[1] < 53) {
                    //style="background-color:#5c9ef5"
                    $(row).find('td:eq(1)').css({
                        'background-color': '#5c9ef5',
                        "color": "white"
                    });
    
                    $(`.alert-temp  .alert-container`).prepend(`<div class="alert-content"  >
                <div>
                <i class='bx bxs-error' ></i>
                <p class="error-text"> Low Temperature : ${data[1]} </p>    
            </div>
            <p class="error-time"> ${data[3]}</p>
        </div>`)
                } else {
    
                }
    
    
    
    
    
            },
            "order": [
                [3, "desc"]
            ],
    
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5', 'pdfHtml5', 'csvHtml5'
            ] 
        });
    var data = table.row(':last-child').data();
    var temps = data[1];
    var waterLevel = data[2]
    // console.log()



    // const temp = new CircleProgress('.temp-progress', {
    //     value: data[1],
    //     max: 130,
    //     textFormat: function(value,max)
    //     {
    //         return temps
    //     }
    // })

    const cp = new CircleProgress('.wlevel-progress', {
        value: data[2],
        max: 20,
        textFormat: function (value, max) {
            return waterLevel
        }
    })

    var firstTemp = $('.alert-temp  .alert-container  .alert-content:first-child .error-text').text()
    var firstWaterLevel = $('.alert-wlevel  .alert-container  .alert-content:first-child .error-text').text()

    // alert(firstTemp)
    // alert(firstWaterLevel)
    if(temps != "" && waterLevel != "")
    {
            
    $('.notification').css({
        "display": "flex"
    })

    $('.notification-text').append("<h2>WARNING</h2>")
    $('.notification-text').append("<br>")
    $('.notification-text').append(`${firstWaterLevel}`)
    $('.notification-text').append("<br><br>")
    $('.notification-text').append(`${firstTemp}`)

    $("#close").click(() => {
        $('.notification').css({
            "display": "none"
        })
    })
    }



    const gaugeElement = document.querySelector(".gauge");

    function setGaugeValue(gauge, value) {
        if (value < 0 || value > 1) {
            return;
        }

        gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
        gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )} C`;
    }

    setGaugeValue(gaugeElement, temps / 100);



 

});


function preventBack() {
    window.history.forward();
}
// alert("Logout");
setTimeout("preventBack()", 0);
window.onunload = function () {
    null
};