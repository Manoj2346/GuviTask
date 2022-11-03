<?php 

    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $ok = true;
    $message = array();

    if( !isset($username) || empty($username)){
        $ok = false;
        $messages[] = 'username cannot be empty!';
    }
    
    if( !isset($password) || empty($password)){
        $ok = false;
        $messages[] = 'password cannot be empty!';
    }

    if($ok){
        
    if($username === 'mdk' && $password === 'mdk'){
        $ok = false;
        $messages[] = 'username cannot be empty!';
    }
    }