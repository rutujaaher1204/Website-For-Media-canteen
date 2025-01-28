<?php 

             $host="localhost";
             $email="root";
             $password=" ";
             $db="media_can";


             $data=mysqli_connect($host,$email,$password,$db);
             if($data==false)
             {
                die("connection error");
             }
             if($_SERVER["REQUEST_METHOD"]=="POST")
             {
                $email=$_POST["email"];
                $password=$_POST["password"];

                $sql="select * from createaccount where email='".$email."'AND password='".$password."'";
                $result=mysqli_query($data,$sql);
                $row=mysqli_fetch_array($result);
                if($result){
                    if(mysqli_num_rows($result)==1){
                        session_start();
                        $_SESSION['email'] = true;
                        $_SESSION['email'] = $password;
                        // header("location:home.php");
                    }else{
                        echo "INVALID EMAIL OR PASSWORD";
                    }
                }
               
             }
            ?>