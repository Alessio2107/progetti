package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/user")
public class UserController {
	@Autowired
	UserService service;
	
	@GetMapping("/getAll")
	public List<User> getAll(){
		return service.responseOfGetAll();
	}
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return service.responseOfAddUser(user);
	}
	@GetMapping("/getById/{id}")
	public User getById(@PathVariable Long id) {
		return service.responseOfGetById(id);
	}
	@DeleteMapping("/deleteById/{id}")
	public void deleteById(@PathVariable Long id) {
		service.responseOfDeleteById(id);
	}
	@GetMapping("/getAllNames")
	public List<String> allNames(){
		return service.responseOfAllNames();
	}
	

}
