package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Utente;
import com.example.demo.repository.UtenteRepository;

@Service
public class UtenteService {
	@Autowired
	UtenteRepository repository;

	public Utente crea(Utente utente) {
		// TODO Auto-generated method stub
		return repository.save(utente);
	}

	public List<Utente> mostratutto() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	public void elimina(Long id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	public Utente modifica(Long id, Utente utente) {
		// TODO Auto-generated method stub
		Utente utente2= repository.getReferenceById(id);
		utente.setCognome(utente2.getCognome());
		utente.setEta(utente2.getEta());
		utente.setNome(utente.getNome());
		return repository.save(utente);
	}
	
	
	

}
