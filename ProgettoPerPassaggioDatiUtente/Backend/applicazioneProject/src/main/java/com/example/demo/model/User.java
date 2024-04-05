package com.example.demo.model;

import java.sql.Blob;

import com.example.demo.userEnum.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Blob img;
	private String name,surname,email;
	private int phoneNumber;
	private String workPlace, linkOfWorkPlace;
    @Enumerated(EnumType.STRING) 
	private Role role;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Blob getImg() {
		return img;
	}
	public void setImg(Blob img) {
		this.img = img;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getWorkPlace() {
		return workPlace;
	}
	public void setWorkPlace(String workPlace) {
		this.workPlace = workPlace;
	}
	public String getLinkOfWorkPlace() {
		return linkOfWorkPlace;
	}
	public void setLinkOfWorkPlace(String linkOfWorkPlace) {
		this.linkOfWorkPlace = linkOfWorkPlace;
	}
	@JsonIgnore
	public Role getRole() {
		return role;
	}
	public void setRole(Role string) {
		this.role = string;
	}
	
	
	
	public String getRoleDescription() {
        return role.getValue();
    }
	
	
	
	
	
	
	

}
