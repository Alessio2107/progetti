package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Film;
import com.example.demo.service.FilmService;
@CrossOrigin
@RestController
@RequestMapping("/api/filmController")
public class FilmController {
	@Autowired
	FilmService filmService;
	
	@PostMapping("/aggiungiFilm")
	public String aggiungiFilm(@RequestBody Film film) {
		return filmService.aggiungi(film);
	}
	
	@DeleteMapping("/eliminaFilm/{id}")
	public String eliminaFilm(@PathVariable Long id) {
		return filmService.elimina(id);
	}
	@GetMapping("/mostraTuttiIFilm")
	public List<Film> mostraTuttiIFilm(){
		return filmService.mostraTutto();
	}
	@GetMapping("/mostraFilmPerAnno/{anno}")
	public List<Film> mostraFilmPerAnno(@PathVariable int anno) {
		return filmService.filtraPerAnno(anno);
	}
	
	@GetMapping("/cerca/{nome}")
	public List<Film> cerca(@PathVariable String nome){
		return filmService.cercaPerNome(nome);
	}
	@GetMapping("/cercaR/{regista}")
	public List<Film> cercaR(@PathVariable String regista){
		return filmService.cercaPerRegista(regista);
	}
	@PutMapping("/modificaFilmPerId/{id}")
	public Film modificaPerId(@PathVariable Long id,
			@RequestBody Film film) {
		return filmService.modificaFilmPerId(id, film);
	}

}
