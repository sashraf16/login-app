package com.example.proj.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.validation.constraints.Null;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo _userRepo;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        _userRepo.findAll().forEach(users::add);
        return users;
    }

    public User getUser(String username) {
        return _userRepo.findById(username).orElse(null);
    }

    public User verifyUser(User user) {
        try {
            String attemptuser = user.getUsername();
            String attemptpass = user.getPassword();

            User dbacc = getUser(attemptuser);

            String dbuser = dbacc.getUsername();
            String dbpass = dbacc.getPassword();

            if (dbpass.equals(attemptpass)) {
                return dbacc;
            } else {
                user.setUsername("not signed in");
                return user;
            }
        }
        catch (Exception e) {
            System.out.println("error in validation: " + e);
            user.setUsername("not signed in");
            return user;
        }
    }

//    public int getID() {
//        return _userRepo.
//    }

    public int createUser(User user) throws DataIntegrityViolationException {
//        System.out.println(_userRepo.findById(user.getUsername()));
        Optional<User> result = _userRepo.findById(user.getUsername());
        System.out.println(result);
        if (result.equals(Optional.empty()))
        {
            System.out.println("unique user");
            _userRepo.save(user);
            return 1;
        }
        else
        {
            System.out.println("not unique");
            throw new DataIntegrityViolationException("error");
        }

    }

    public String getPass(String username) {
        User user = _userRepo.findById(username).orElse(null);
        return user.getPassword();
    }

    public boolean deleteUser(User user) {
        try{
             if (_userRepo.existsById(user.getUsername())) {
                 _userRepo.delete(user);
                 return true;
             }
             else {
                 return false;
             }
        }
        catch (Exception e)
        {
            System.out.println("error: " + e);
            return false;
        }
    }

    public boolean updateUser(User user)
    {
        Optional<User> result = _userRepo.findById(user.getUsername());
        System.out.println(result);
        if (result.equals(Optional.empty()))
        {
            System.out.println("cannot find that user");
            return false;
        }
        else
        {
            System.out.println("found and updated");
            _userRepo.save(user);
            return true;
        }

    }
}
