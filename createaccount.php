<?php
include 'conn.php';
$errors = array();

if (isset($_POST['signup'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
    if ($password !== $cpassword) {
        $errors['password'] = "Confirm password not matched!";
        echo $errors['password'];
        exit();
    }


    $email_check = "SELECT * FROM createaccount WHERE email = '$email' ";
    $res = mysqli_query($con, $email_check);
    if (mysqli_num_rows($res) > 0) {
        $errors['email'] = "Email that you have entered is already exist!";
        echo $errors['email'];
    }


    $insert_data = "INSERT INTO createaccount values (name, email, password, cpassword)
                        values('$name', '$email', '$password','$cpassword')";
    $data_check = mysqli_query($con, $insert_data);
    if ($data_check) {
        echo "Data inserted successfully";
        header('Location:signinpage.php');
    } else {
        echo "Data not inserted successfully.error....";
    }
}



?>