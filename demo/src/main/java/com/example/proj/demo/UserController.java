package com.example.proj.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class UserController {

    @Autowired
    private UserService _userService;

    @RequestMapping("/users")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> getAllUsers(){
        System.out.println(_userService.getAllUsers());
        return _userService.getAllUsers();
    }

    @RequestMapping("/users/{username}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUser(@PathVariable String username) {
        System.out.println(_userService.getUser(username));
        return _userService.getUser(username);
    }

//    public int getID()
//    {
//        return _userService.getID();
//    }

    @RequestMapping(value = "/users", method = POST, produces = "application/json", consumes = "application/json")
    @CrossOrigin(origins = "http://localhost:4200")
    public int createUser(@RequestBody User user) {
        int result = 0;
        try {
            System.out.println(user);
            result = _userService.createUser(user);
        } catch (Exception e){
            if (e instanceof SQLIntegrityConstraintViolationException)
            {
                result = -1;
                return result;
            }

            else if (e instanceof DataIntegrityViolationException)
            {
                result = -1;
                return result;
            }
            else
            {
                System.out.println("error insert: " + e);
            }
        }
        System.out.println(result + " rows affected my own");
        return result;
    }

    @RequestMapping(value = "/users/verify", method = POST)
    @CrossOrigin(origins = "http://localhost:4200")
    public User verifyLog(@RequestBody User loguser){
        User result;
        result = _userService.verifyUser(loguser);
        return result;
//        try {
//            System.out.println("try verify");
//            System.out.println(loguser);
//
//            String username = loguser.getUsername();
//            User dbuser = this.getUser(username);
//
//            String logpass = loguser.getPassword();
//            String dbpass = dbuser.getPassword();
//
//            if (logpass.equals(dbpass)) {
//                System.out.println("true");
//                return true;
//            } else {
//                System.out.println("false");
//                return false;
//            }
//        }
//        catch(Exception e) {
//            System.out.println("error: " + e);
//            return false;
//        }
    }

    @RequestMapping(value = "/users/delete", method = POST)
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean deleteUser(@RequestBody User loguser)
    {
        return _userService.deleteUser(loguser);
    }

    @RequestMapping(value = "/users/update", method = POST)
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean updateUser (@RequestBody User upuser)
    {
        return _userService.updateUser(upuser);
    }


}
