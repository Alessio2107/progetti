package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long>{
	

}
