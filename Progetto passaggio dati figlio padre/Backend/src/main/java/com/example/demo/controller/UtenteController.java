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

import com.example.demo.model.Utente;
import com.example.demo.service.UtenteService;
@CrossOrigin
@RestController
@RequestMapping("api/utenteController")
public class UtenteController {
	@Autowired
	UtenteService service;
	
	@PostMapping("/creaUtente")
	public Utente creaUtente(@RequestBody Utente utente) {
		return service.crea(utente);
	}
	
	@GetMapping("/mostraTuttiGliUtenti")
	public List<Utente> mostraTuttiGliUtenti(){
		return service.mostratutto();
	}
	
	@DeleteMapping("/eliminaUtente/{id}")
	public void eliminaUtente(@PathVariable Long id) {
		service.elimina(id);
	}
	@PutMapping("/modificaUtente/{id}")
	public Utente modificaUtente(@PathVariable Long id, @RequestBody Utente utente) {
		return service.modifica(id,utente);
	}

}
