<?php
    $connect=mysqli_connect("localhost","root","","apc_stp") or die ("Connection Failed");
    ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
        <link href="src/css/index.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
        <link href="//cdn.datatables.net/buttons/2.0.1/css/buttons.dataTables.min.css" rel="stylesheet">

        <title>Main</title>
    </head>
    <body>
        <nav class="navbar">
            <div class="logo-container">
                <img src="src/assets/apc%20logo.png" class="logo"/>
                <h2> APC TSP Monitoring System </h2>
            </div>
            <ul class="items">
                <li  id="logout"><a href="login-page.php">Logout</a>  </li>
            </ul>
        </nav>
        <div class="dashboard">
        <div class="charts" >
            <div class="chart-temp card">
                <h3>
                    Temperature
                </h3>

                <!-- <div class="temp-progress"></div> -->

                <div class="gauge">
  <div class="gauge__body">
    <div class="gauge__fill"></div>
    <div class="gauge__cover"></div>
  </div>
</div>
            </div>
            <div class="chart-wlevel card">
                <h3>
                    Water Level
                </h3>

                <div class="wlevel-progress"></div>
            </div>
        </div>
      
        <div class="alert">
            <div class="alert-temp card">
                <h4>
                    Temperature Alert
                </h4>
                <div class="alert-container">
                    
                </div>
            </div>
            <div class="alert-wlevel card">
                <h4>
                    Water Level Alert
                </h4>
                <div class="alert-container">
                   
                </div>
            </div>
        </div>

      <div class="tables card">
            <h4>
                Table
            </h4>
            <table id="table" class="stripe row-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Temperature</th>
                        <th>Water Level</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                        $query="select * from fboglatest";
                        $result=mysqli_query($connect,$query);
                            while($row=mysqli_fetch_assoc($result)) 
                        { 
                        ?> 
                    <tr>
                        <td><?php echo $row['ID']; ?></td>
                        <td><?php echo $row['Temperature']; ?></td>
                        <td><?php echo $row['WaterLevel']; ?></td>
                        <td><?php 
                            echo $row['Date']
                            //    $date = new DateTime($row['Date']);
                            //   $date =  $date->format('jS M Y');?></td>
                    </tr>
                    <?php
                        }
                        ?>
                </tbody>
            </table>
        </div>


        <div class="notification">
        
        <div class="notif-container card">
            <div class="notif-data"> 
            <p class="notification-text"></p>    
            </div>
            <p><button id="close"><i class='bx bx-x'></i></button></p>
        </div>
    </div>
        <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossorigin="anonymous"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- <script src="gauge.min.js"> </script>  -->
<script src="src/js/circular-progressbar.js"> </script> 
<script src="src/js/index.js"> </script> 
    </body>
</html>