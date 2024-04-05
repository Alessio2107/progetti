package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.userEnum.Role;

@Service
public class UserService {
	@Autowired
	UserRepository repository;

	public List<User> responseOfGetAll() {
        List<User> userList = repository.findAll();
        for (User u : userList) {
            Role r = u.getRole();
            String roleDescription = r.getDescription();
            
        }

        return userList;
    }

	public User responseOfAddUser(User user) {
		// TODO Auto-generated method stub
		return repository.save(user);
	}

	public User responseOfGetById(Long id) {
		// TODO Auto-generated method stub
		return repository.findById(id).get();
	}

	public void responseOfDeleteById(Long id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	public List<String> responseOfAllNames() {
		// TODO Auto-generated method stub
		List<String> nameList= new ArrayList<>();
		List<User> userList= repository.findAll();
		for (User user : userList) {
			nameList.add(user.getName());
		}
		return nameList;
	}

}
